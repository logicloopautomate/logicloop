// Onboarding constants
export const STEPS = [
    { id: 1, name: 'Business' },
    { id: 2, name: 'Qualification' },
    { id: 3, name: 'Commitment' }
];

export const LOCATION_OPTIONS = ['1 Location', '2-5 Locations', '6+ Locations'];

export const STRUGGLE_OPTIONS = [
    "Reputation Crisis: Need urgent recovery.",
    "SEO Ranking: Losing leads to competitors.",
    "Scaling : Need to automate reviews handling."
];

// EmailJS configuration
export const EMAILJS_CONFIG = {
    PUBLIC_KEY: "btz5D4ZT1oUnd4vZk",
    NOTIFICATION: {
        SERVICE_ID: "service_n7dfet3",
        TEMPLATE_ID: "template_j47ztka"
    },
    CUSTOMER: {
        SERVICE_ID: "service_uvh8247",
        TEMPLATE_ID: "template_l9gj7ry"
    }
};

// Integration platforms
export const INTEGRATION_PLATFORMS = [
    { name: 'Google Maps', icon: 'https://cdn-icons-png.flaticon.com/512/281/281764.png' },
    { name: 'Facebook', icon: 'https://cdn-icons-png.flaticon.com/512/733/733547.png' },
    { name: 'Yelp', icon: 'https://www.vectorlogo.zone/logos/yelp/yelp-icon.svg' },
    { name: 'Trustpilot', icon: 'https://static.cdnlogo.com/logos/t/66/trustpilot_800.png' },
];

// Validation regex patterns
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const URL_REGEX = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
