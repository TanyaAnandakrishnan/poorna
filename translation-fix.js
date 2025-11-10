/**
 * Translation Fix Script - Enhanced with Language Manager Integration
 * Fixes Google Translate issues and integrates with centralized language management
 */

(function() {
    'use strict';

    // Hide Google Translate banner and fix body positioning
    function hideGoogleTranslateBanner() {
        const style = document.createElement('style');
        style.innerHTML = `
            .goog-te-banner-frame.skiptranslate,
            .goog-te-banner-frame,
            body > .skiptranslate {
                display: none !important;
            }
            
            html body .goog-te-banner-frame,
            html body .goog-te-banner-frame.skiptranslate {
                top: 0 !important;
                z-index: 99999 !important;
            }
            
            body {
                top: 0 !important;
                position: static !important;
            }
            
            .goog-te-combo {
                font-size: 12px !important;
                padding: 6px 8px !important;
                border-radius: 6px !important;
                border: 1px solid #ccc !important;
                background-color: #fff !important;
                color: #000 !important;
                box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2) !important;
                cursor: pointer !important;
                font-weight: bold !important;
                transition: all 0.2s ease !important;
                min-width: 80px !important;
            }
            
            .goog-te-combo:hover {
                border-color: #4CAF50 !important;
                box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3) !important;
            }
            
            @media (max-width: 768px) {
                .goog-te-combo {
                    padding: 5px 6px !important;
                    font-size: 11px !important;
                    min-width: 70px !important;
                }
            }
            
            @media (max-width: 480px) {
                .goog-te-combo {
                    padding: 4px 5px !important;
                    font-size: 10px !important;
                    min-width: 60px !important;
                }
            }
            
            @media (max-width: 320px) {
                .goog-te-combo {
                    padding: 3px 4px !important;
                    font-size: 9px !important;
                    min-width: 50px !important;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Initialize translation fixes
    function initTranslationFixes() {
        hideGoogleTranslateBanner();
        
        // Fix body positioning issues
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                    const body = document.body;
                    if (body.style.top && body.style.top !== '0px') {
                        body.style.top = '0px';
                        body.style.position = 'static';
                    }
                }
            });
        });
        
        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ['style']
        });
    }

    // Enhanced language change detection with improved reliability
    function setupLanguageChangeDetection() {
        let detectionSetup = false;
        
        // Wait for language manager to be available
        const waitForLanguageManager = () => {
            if (window.languageManager && !detectionSetup) {
                setupEnhancedDetection();
                detectionSetup = true;
            } else if (!detectionSetup) {
                setTimeout(waitForLanguageManager, 100);
            }
        };
        
        const setupEnhancedDetection = () => {
            // Monitor Google Translate dropdown changes
            const observer = new MutationObserver(() => {
                // Handle .goog-te-combo (the actual dropdown)
                const selectElement = document.querySelector('.goog-te-combo');
                if (selectElement && !selectElement.hasAttribute('data-enhanced-listener')) {
                    selectElement.setAttribute('data-enhanced-listener', 'true');
                    
                    selectElement.addEventListener('change', function(e) {
                        const selectedValue = e.target.value;
                        const language = selectedValue.includes('ta') ? 'ta' : 'en';
                        
                        console.log('Language changed via dropdown:', language);
                        
                        // Update language manager
                        if (window.languageManager) {
                            window.languageManager.saveLanguagePreference(language);
                        }
                    });
                }
                
                // Handle original select element
                const originalSelect = document.querySelector('#google_translate_element select');
                if (originalSelect && !originalSelect.hasAttribute('data-enhanced-listener')) {
                    originalSelect.setAttribute('data-enhanced-listener', 'true');
                    
                    originalSelect.addEventListener('change', function(e) {
                        const selectedValue = e.target.value;
                        const language = selectedValue.includes('ta') ? 'ta' : 'en';
                        
                        console.log('Language changed via original select:', language);
                        
                        // Update language manager
                        if (window.languageManager) {
                            window.languageManager.saveLanguagePreference(language);
                        }
                    });
                }
                
                // Monitor iframe menu changes
                const iframe = document.querySelector('iframe.goog-te-menu-frame');
                if (iframe) {
                    try {
                        const items = iframe.contentDocument.querySelectorAll('.goog-te-menu2-item span.text');
                        items.forEach(span => {
                            if (!span.hasAttribute('data-enhanced-listener')) {
                                span.setAttribute('data-enhanced-listener', 'true');
                                span.addEventListener('click', function() {
                                    const selectedText = span.innerText.toLowerCase();
                                    const language = selectedText.includes('tamil') ? 'ta' : 'en';
                                    
                                    console.log('Language changed via iframe menu:', language);
                                    
                                    // Update language manager
                                    if (window.languageManager) {
                                        window.languageManager.saveLanguagePreference(language);
                                    }
                                });
                            }
                        });
                    } catch (err) {
                        console.warn('Google Translate iframe access error:', err);
                    }
                }
            });
            
            observer.observe(document.body, { childList: true, subtree: true });
            
            // Also set up a periodic check for language sync
            setInterval(() => {
                if (window.languageManager) {
                    window.languageManager.syncLanguageOnFocus();
                }
            }, 2000); // Check every 2 seconds
        };
        
        waitForLanguageManager();
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            initTranslationFixes();
            setupLanguageChangeDetection();
        });
    } else {
        initTranslationFixes();
        setupLanguageChangeDetection();
    }

    // Additional fix for page load
    window.addEventListener('load', function() {
        setTimeout(function() {
            document.body.style.top = '0px';
            document.body.style.position = 'static';
            
            // Trigger language sync after page load
            if (window.languageManager) {
                window.languageManager.refreshLanguage();
            }
        }, 100);
    });
    
    // Handle page navigation (for single-page apps or dynamic content)
    window.addEventListener('beforeunload', function() {
        // Ensure language preference is saved before leaving
        if (window.languageManager) {
            const currentLang = window.languageManager.getCurrentLanguage();
            sessionStorage.setItem('poornam_session_lang', currentLang);
        }
    });

    // Expose utility functions globally for debugging
    window.translationFix = {
        getCurrentLanguage: () => window.languageManager ? window.languageManager.getCurrentLanguage() : 'en',
        changeLanguage: (lang) => window.languageManager ? window.languageManager.changeLanguage(lang) : null,
        refreshLanguage: () => window.languageManager ? window.languageManager.refreshLanguage() : null
    };

})();