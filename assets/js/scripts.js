function setupCookieConsent() {
    PDCookieConsent.config({
        "brand": {
            "dev": false,
            "name": "Cremaet Dynamics SL",
            "url": "https://www.cremaetdynamics.com",
            "websiteOwner": ""
        },
        "showRejectButton": true,
        "cookiePolicyLink": "https://www.cremaetdynamics.com/cookies-policy.html",
        "hideModalIn": [
            "https://www.cremaetdynamics.com/privacy-policy.html",
            "https://www.cremaetdynamics.com/cookies-policy.html",
            "https://www.cremaetdynamics.com/legal-notice.html"
        ],
        "styles": {
            "primaryButton": {
                "bgColor": "#EEEEEE",
                "txtColor": "#333333"
            },
            "secondaryButton": {
                "bgColor": "#EEEEEE",
                "txtColor": "#333333"
            },
            "rejectButton": {
                "bgColor": "#EEEEEE",
                "txtColor": "#333333"
            }
        }
    });
}

function setupParticles() {
    particlesJS.load('particles-bg-target', 'assets/js/particlesjs-config.json', function() {
        console.log('callback - particles.js config loaded');
    });
}

console.log("Setting up cookies consent...");
setupCookieConsent();
console.log("Setting up particles...");
setupParticles();