// Global language synchronization across all pages
(function() {
    'use strict';
    
    // Function to set language cookies with multiple fallbacks
    function setLanguageCookie(lang) {
        const cookieValue = '/en/' + lang;
        const expires = new Date();
        expires.setFullYear(expires.getFullYear() + 1);
        
        // Set multiple cookie variations for maximum compatibility
        document.cookie = `googtrans=${cookieValue};path=/;expires=${expires.toUTCString()}`;
        document.cookie = `googtrans=${cookieValue};path=/;domain=${location.hostname};expires=${expires.toUTCString()}`;
        
        // Try to set for parent domain as well
        const domain = location.hostname.split('.').slice(-2).join('.');
        if (domain !== location.hostname) {
            document.cookie = `googtrans=${cookieValue};path=/;domain=.${domain};expires=${expires.toUTCString()}`;
        }
        
        // Store in localStorage and sessionStorage as backup
        localStorage.setItem('selectedLanguage', lang);
        sessionStorage.setItem('selectedLanguage', lang);
    }
    
    // Function to get saved language
    function getSavedLanguage() {
        // Try cookie first
        const cookieMatch = document.cookie.match(/(^|;\s*)googtrans=\/en\/(\w+)/);
        if (cookieMatch) return cookieMatch[2];
        
        // Try localStorage
        const localLang = localStorage.getItem('selectedLanguage');
        if (localLang) return localLang;
        
        // Try sessionStorage
        const sessionLang = sessionStorage.getItem('selectedLanguage');
        if (sessionLang) return sessionLang;
        
        return null;
    }
    
    // Apply saved language on page load
    function applySavedLanguage() {
        const savedLang = getSavedLanguage();
        if (savedLang && savedLang !== 'en') {
            setLanguageCookie(savedLang);
        }
    }
    
    // Initialize language sync
    function initLanguageSync() {
        // Apply saved language immediately
        applySavedLanguage();
        
        // Monitor for Google Translate changes
        const observer = new MutationObserver(() => {
            const iframe = document.querySelector('iframe.goog-te-menu-frame');
            if (iframe) {
                try {
                    const items = iframe.contentDocument.querySelectorAll('.goog-te-menu2-item span.text');
                    items.forEach(span => {
                        span.addEventListener('click', function() {
                            const lang = span.innerText.toLowerCase().includes('tamil') ? 'ta' : 'en';
                            setLanguageCookie(lang);
                        });
                    });
                } catch (err) {
                    // Ignore cross-origin errors
                }
            }
        });
        
        observer.observe(document.body, { childList: true, subtree: true });
    }
    
    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLanguageSync);
    } else {
        initLanguageSync();
    }
})();