/**
 * Optimized Language Translation System
 * Ensures Tamil selection persists across all pages reliably
 */

(function() {
    'use strict';
    
    const STORAGE_KEY = 'poornam_language';
    const COOKIE_KEY = 'googtrans';
    
    // Set language with all necessary storage methods
    function setLanguage(lang) {
        const cookieValue = `/en/${lang}`;
        const expires = new Date();
        expires.setFullYear(expires.getFullYear() + 1);
        
        // Set cookies with multiple variations
        document.cookie = `${COOKIE_KEY}=${cookieValue};path=/;expires=${expires.toUTCString()}`;
        document.cookie = `${COOKIE_KEY}=${cookieValue};path=/;domain=${location.hostname};expires=${expires.toUTCString()}`;
        
        // Set for parent domain if different
        const domain = location.hostname.split('.').slice(-2).join('.');
        if (domain !== location.hostname) {
            document.cookie = `${COOKIE_KEY}=${cookieValue};path=/;domain=.${domain};expires=${expires.toUTCString()}`;
        }
        
        // Store in localStorage and sessionStorage
        localStorage.setItem(STORAGE_KEY, lang);
        sessionStorage.setItem(STORAGE_KEY, lang);
        
        console.log(`Language set to: ${lang}`);
    }
    
    // Get saved language preference
    function getSavedLanguage() {
        // Check sessionStorage first (most recent)
        const sessionLang = sessionStorage.getItem(STORAGE_KEY);
        if (sessionLang) return sessionLang;
        
        // Check localStorage
        const localLang = localStorage.getItem(STORAGE_KEY);
        if (localLang) return localLang;
        
        // Check cookie
        const cookieMatch = document.cookie.match(new RegExp(`(^|;\\s*)${COOKIE_KEY}=\\/en\\/(\\w+)`));
        if (cookieMatch && cookieMatch[2]) return cookieMatch[2];
        
        return 'en'; // default
    }
    
    // Apply language immediately on page load
    function applyLanguageOnLoad() {
        const savedLang = getSavedLanguage();
        if (savedLang && savedLang !== 'en') {
            setLanguage(savedLang);
        }
    }
    
    // Monitor Google Translate changes
    function setupLanguageMonitoring() {
        let retryCount = 0;
        const maxRetries = 20;
        
        const checkForTranslate = () => {
            const selectElement = document.querySelector('#google_translate_element select');
            
            if (selectElement) {
                // Add change listener
                selectElement.addEventListener('change', function() {
                    const selectedValue = this.value;
                    const lang = selectedValue.includes('ta') ? 'ta' : 'en';
                    setLanguage(lang);
                });
                
                // Apply saved language
                const savedLang = getSavedLanguage();
                if (savedLang === 'ta') {
                    setTimeout(() => {
                        const tamilOption = Array.from(selectElement.options).find(option => 
                            option.value.includes('ta')
                        );
                        if (tamilOption && selectElement.value !== tamilOption.value) {
                            selectElement.value = tamilOption.value;
                            selectElement.dispatchEvent(new Event('change'));
                        }
                    }, 500);
                }
                
                console.log('Language monitoring setup complete');
            } else if (retryCount < maxRetries) {
                retryCount++;
                setTimeout(checkForTranslate, 500);
            }
        };
        
        // Start monitoring after a delay
        setTimeout(checkForTranslate, 1000);
    }
    
    // Monitor translate menu frame
    function setupMenuMonitoring() {
        const observer = new MutationObserver(() => {
            const iframe = document.querySelector('iframe.goog-te-menu-frame');
            if (iframe) {
                try {
                    const menuItems = iframe.contentDocument.querySelectorAll('.goog-te-menu2-item span.text');
                    menuItems.forEach(span => {
                        if (!span.hasAttribute('data-listener-added')) {
                            span.setAttribute('data-listener-added', 'true');
                            span.addEventListener('click', function() {
                                const selectedText = this.innerText.toLowerCase();
                                const lang = selectedText.includes('tamil') ? 'ta' : 'en';
                                setLanguage(lang);
                            });
                        }
                    });
                } catch (err) {
                    // Ignore cross-origin errors
                }
            }
        });
        
        observer.observe(document.body, { childList: true, subtree: true });
    }
    
    // Listen for storage changes (cross-tab sync)
    window.addEventListener('storage', function(e) {
        if (e.key === STORAGE_KEY && e.newValue) {
            const newLang = e.newValue;
            const currentLang = getSavedLanguage();
            
            if (newLang !== currentLang) {
                setLanguage(newLang);
                // Reload page to apply translation
                setTimeout(() => window.location.reload(), 100);
            }
        }
    });
    
    // Initialize the system
    function init() {
        applyLanguageOnLoad();
        setupLanguageMonitoring();
        setupMenuMonitoring();
        
        console.log('Enhanced language system initialized');
    }
    
    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Also run on window load as backup
    window.addEventListener('load', init);
    
    // Make functions globally available for debugging
    window.languageDebug = {
        getSavedLanguage,
        setLanguage,
        currentLanguage: () => getSavedLanguage()
    };
    
})();