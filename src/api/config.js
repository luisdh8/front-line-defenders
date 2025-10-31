// src/api/config.js

// Get the MockAPI project ID from environment variables
export const MOCKAPI_PROJECT_ID = import.meta.env.VITE_PROJECT_SECRET_KEY;

// Construct the full API URL
// MockAPI URL format: https://{PROJECT_ID}.mockapi.io/{endpoint}
export const API_URL = MOCKAPI_PROJECT_ID 
    ? `https://${MOCKAPI_PROJECT_ID}.mockapi.io/defenders`
    : '';

// Alternative export for compatibility
export const API_CONFIG = {
    baseUrl: MOCKAPI_PROJECT_ID ? `https://${MOCKAPI_PROJECT_ID}.mockapi.io` : '',
    endpoints: {
        guardians: '/defenders'
    }
};