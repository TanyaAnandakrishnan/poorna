/**
 * Simple and Reliable Language Persistence System
 * Ensures Tamil selection persists across all pages
 */

(function() {
    'use strict';
    
    const LANGUAGE_KEY = 'poornam_language';
    const COOKIE_KEY = 'googtrans';
    
    // Set language cookie with proper format
    function setLanguageCookie(lang) {
        const cookieValue = `/en/${lang}`;
        const maxAge = 365 * 24 * 60 * 60; // 1 year in seconds
        
        // Set cookie with multiple variations for reliability
        document.cookie = `${COOKIE_KEY}=${cookieValue};path=/;max-age=${maxAge}`;
        document.cookie = `${COOKIE_KEY}=${cookieValue};path=/;domain=${location.hostname};max-age=${maxAge}`;
        
        // Also save to localStorage as backup
        localStorage.setItem(LANGUAGE_KEY, lang);
        
        console.log(`Language set to: ${lang}`);
    }
    
    // Get saved language preference
    function getSavedLanguage() {
        // Check localStorage first (most reliable)
        const localLang = localStorage.getItem(LANGUAGE_KEY);
        if (localLang) return localLang;
        
        // Check cookie as fallback
        const cookieMatch = document.cookie.match(new RegExp(`(^|;\\s*)${COOKIE_KEY}=\\/en\\/(\\w+)`));
        if (cookieMatch && cookieMatch[2]) {
            return cookieMatch[2];
        }
        
        return 'en'; // default
    }
    
    // Apply language immediately on page load
    function applyLanguageOnLoad() {
        const savedLang = getSavedLanguage();
        if (savedLang && savedLang !== 'en') {
            setLanguageCookie(savedLang);
        }
    }
    
    // Monitor Google Translate dropdown changes
    function monitorLanguageChanges() {
        // Wait for Google Translate to load
        const checkForTranslate = () => {
            const selectElement = document.querySelector('#google_translate_element select');
            if (selectElement) {
                // Add change listener to the select element
                selectElement.addEventListener('change', function() {
                    const selectedValue = this.value;
                    const lang = selectedValue.includes('ta') ? 'ta' : 'en';
                    setLanguageCookie(lang);
                });
                
                // Apply saved language to the dropdown
                const savedLang = getSavedLanguage();
                if (savedLang === 'ta') {
                    // Find and select Tamil option
                    const tamilOption = Array.from(selectElement.options).find(option => 
                        option.value.includes('ta')
                    );
                    if (tamilOption) {
                        selectElement.value = tamilOption.value;
                        selectElement.dispatchEvent(new Event('change'));
                    }
                }
            } else {
                // Retry if Google Translate hasn't loaded yet
                setTimeout(checkForTranslate, 500);
            }
        };
        
        // Start checking after a short delay
        setTimeout(checkForTranslate, 1000);
    }
    
    // Monitor for Google Translate menu frame (dropdown menu)
    function monitorTranslateMenu() {
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
                                setLanguageCookie(lang);
                            });
                        }
                    });
                } catch (err) {
                    // Ignore cross-origin errors
                    console.warn('Cannot access translate menu frame:', err);
                }
            }
        });
        
        observer.observe(document.body, { childList: true, subtree: true });
    }
    
    // Initialize the language persistence system
    function init() {
        // Apply saved language immediately
        applyLanguageOnLoad();
        
        // Set up monitoring for language changes
        monitorLanguageChanges();
        monitorTranslateMenu();
        
        console.log('Language persistence system initialized');
    }
    
    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Also run on window load as backup
    window.addEventListener('load', init);
    
})();