/**
 * Enhanced Centralized Language Management System
 * Synchronizes language selection across all pages with improved reliability
 */

class LanguageManager {
    constructor() {
        this.currentLanguage = 'en';
        this.storageKey = 'poornam_language';
        this.cookieKey = 'googtrans';
        this.sessionKey = 'poornam_session_lang';
        this.isInitialized = false;
        this.retryCount = 0;
        this.maxRetries = 10;
        this.init();
    }

    init() {
        // Load saved language preference
        this.loadLanguagePreference();
        
        // Set up Google Translate
        this.setupGoogleTranslate();
        
        // Listen for language changes
        this.setupLanguageChangeListener();
        
        // Apply saved language after Google Translate loads
        this.applyLanguageAfterLoad();
        
        // Mark as initialized
        this.isInitialized = true;
    }

    loadLanguagePreference() {
        // Check session storage first (most recent)
        const sessionLang = sessionStorage.getItem(this.sessionKey);
        if (sessionLang) {
            this.currentLanguage = sessionLang;
            return;
        }
        
        // Check localStorage
        const savedLang = localStorage.getItem(this.storageKey);
        if (savedLang) {
            this.currentLanguage = savedLang;
            // Also set in session storage
            sessionStorage.setItem(this.sessionKey, savedLang);
            return;
        }
        
        // Check cookie as fallback
        const cookieMatch = document.cookie.match(/(^|;\\s*)googtrans=\\/en\\/(\\w+)/);
        if (cookieMatch && cookieMatch[2]) {
            this.currentLanguage = cookieMatch[2];
            // Save to both storages
            localStorage.setItem(this.storageKey, cookieMatch[2]);
            sessionStorage.setItem(this.sessionKey, cookieMatch[2]);
        }
    }

    saveLanguagePreference(language) {
        if (this.currentLanguage === language) return; // No change needed
        
        this.currentLanguage = language;
        
        // Save to all storage methods
        localStorage.setItem(this.storageKey, language);
        sessionStorage.setItem(this.sessionKey, language);
        
        // Save to cookie for Google Translate
        const cookieValue = `/en/${language}`;
        document.cookie = `${this.cookieKey}=${cookieValue};path=/;max-age=31536000`; // 1 year
        document.cookie = `${this.cookieKey}=${cookieValue};path=/;domain=${location.hostname};max-age=31536000`;
        
        // Broadcast change to other tabs/windows
        this.broadcastLanguageChange(language);
        
        console.log(`Language preference saved: ${language}`);
    }

    setupGoogleTranslate() {
        // Set cookie before Google Translate loads
        if (this.currentLanguage !== 'en') {
            const cookieValue = `/en/${this.currentLanguage}`;
            document.cookie = `${this.cookieKey}=${cookieValue};path=/`;
            document.cookie = `${this.cookieKey}=${cookieValue};path=/;domain=${location.hostname}`;
        }
    }

    setupLanguageChangeListener() {
        // Listen for storage changes (cross-tab synchronization)
        window.addEventListener('storage', (e) => {
            if ((e.key === this.storageKey || e.key === this.sessionKey) && e.newValue !== this.currentLanguage) {
                this.currentLanguage = e.newValue;
                this.applyLanguage(e.newValue);
            }
        });

        // Listen for page visibility changes to sync language
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden) {
                this.syncLanguageOnFocus();
            }
        });

        // Listen for Google Translate changes
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.observeGoogleTranslateChanges();
            });
        } else {
            this.observeGoogleTranslateChanges();
        }
    }

    observeGoogleTranslateChanges() {
        const observer = new MutationObserver(() => {
            const iframe = document.querySelector('iframe.goog-te-menu-frame');
            if (iframe) {
                try {
                    const items = iframe.contentDocument.querySelectorAll('.goog-te-menu2-item span.text');
                    items.forEach(span => {
                        span.addEventListener('click', () => {
                            const selectedText = span.innerText.toLowerCase();
                            const language = selectedText.includes('tamil') ? 'ta' : 'en';
                            this.saveLanguagePreference(language);
                        });
                    });
                } catch (err) {
                    console.warn('Google Translate frame access error:', err);
                }
            }

            // Also observe the select dropdown
            const selectElement = document.querySelector('#google_translate_element select');
            if (selectElement && !selectElement.hasAttribute('data-listener-added')) {
                selectElement.setAttribute('data-listener-added', 'true');
                selectElement.addEventListener('change', (e) => {
                    const selectedValue = e.target.value;
                    const language = selectedValue.includes('ta') ? 'ta' : 'en';
                    this.saveLanguagePreference(language);
                });
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });
    }

    applyLanguageAfterLoad() {
        // Wait for Google Translate to load, then apply saved language
        const checkGoogleTranslate = () => {
            if (this.retryCount >= this.maxRetries) {
                console.warn('Google Translate failed to load after maximum retries');
                return;
            }
            
            const selectElement = document.querySelector('.goog-te-combo');
            if (selectElement || (window.google && window.google.translate)) {
                setTimeout(() => {
                    this.applyLanguage(this.currentLanguage);
                }, 1000);
            } else {
                this.retryCount++;
                setTimeout(checkGoogleTranslate, 500);
            }
        };
        checkGoogleTranslate();
    }

    applyLanguage(language) {
        if (language === 'en') {
            // Reset to English
            this.resetToEnglish();
            return;
        }

        // Set cookie first to ensure persistence
        const cookieValue = `/en/${language}`;
        document.cookie = `${this.cookieKey}=${cookieValue};path=/;max-age=31536000`;
        document.cookie = `${this.cookieKey}=${cookieValue};path=/;domain=${location.hostname};max-age=31536000`;

        // Try multiple methods to trigger Google Translate
        this.triggerGoogleTranslate(language);
    }

    broadcastLanguageChange(language) {
        // Create a custom event for same-page components
        const event = new CustomEvent('languageChanged', { 
            detail: { language: language } 
        });
        window.dispatchEvent(event);
    }

    resetToEnglish() {
        // Clear translation cookies
        document.cookie = `${this.cookieKey}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
        document.cookie = `${this.cookieKey}=; path=/; domain=${location.hostname}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
        
        // Reload page to reset translation
        if (document.querySelector('.goog-te-combo')) {
            window.location.reload();
        }
    }

    triggerGoogleTranslate(language) {
        // Method 1: Try select element
        const selectElement = document.querySelector('.goog-te-combo');
        if (selectElement) {
            const targetOption = Array.from(selectElement.options).find(option => 
                option.value.includes(language)
            );
            if (targetOption) {
                selectElement.value = targetOption.value;
                selectElement.dispatchEvent(new Event('change', { bubbles: true }));
                return true;
            }
        }

        // Method 2: Try the original selector
        const originalSelect = document.querySelector('#google_translate_element select');
        if (originalSelect) {
            const targetOption = Array.from(originalSelect.options).find(option => 
                option.value.includes(language)
            );
            if (targetOption) {
                originalSelect.value = targetOption.value;
                originalSelect.dispatchEvent(new Event('change', { bubbles: true }));
                return true;
            }
        }

        // Method 3: Try Google Translate API directly
        if (window.google && window.google.translate) {
            try {
                const translateElement = new google.translate.TranslateElement({
                    pageLanguage: 'en',
                    includedLanguages: 'en,ta',
                    layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
                }, 'google_translate_element');
                
                setTimeout(() => {
                    this.triggerGoogleTranslate(language);
                }, 500);
            } catch (error) {
                console.warn('Google Translate API error:', error);
            }
        }

        return false;
    }

    syncLanguageOnFocus() {
        // Check if language has changed in another tab
        const currentStoredLang = localStorage.getItem(this.storageKey);
        const currentSessionLang = sessionStorage.getItem(this.sessionKey);
        
        const latestLang = currentSessionLang || currentStoredLang || 'en';
        
        if (latestLang !== this.currentLanguage) {
            this.currentLanguage = latestLang;
            this.applyLanguage(latestLang);
        }
    }

    // Public method to manually change language
    changeLanguage(language) {
        this.saveLanguagePreference(language);
        this.applyLanguage(language);
    }

    // Get current language
    getCurrentLanguage() {
        return this.currentLanguage;
    }

    // Force refresh language state
    refreshLanguage() {
        this.loadLanguagePreference();
        this.applyLanguage(this.currentLanguage);
    }
}

// Initialize the language manager
const languageManager = new LanguageManager();

// Make it globally available
window.languageManager = languageManager;

// Export for modules if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LanguageManager;
}