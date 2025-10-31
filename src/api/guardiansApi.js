// src/api/guardiansApi.js

import { API_URL } from './config.js';
import sampleData from '../data/sampleData.js';

/**
 * Fetch all guardians from MockAPI
 * Falls back to sample data if API fails or is not configured
 */
export const getGuardians = async () => {
    // If no API_URL is configured, return sample data
    if (!API_URL || API_URL.includes('undefined')) {
        console.warn('API_URL not configured, using sample data');
        return sampleData;
    }

    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        return Array.isArray(data) ? data : sampleData;
    } catch (error) {
        console.error('Error fetching guardians from API, using sample data:', error);
        return sampleData;
    }
};

/**
 * Fetch a single guardian by ID
 */
export const getGuardianById = async (id) => {
    if (!API_URL || API_URL.includes('undefined')) {
        return sampleData.find(g => g.id === id) || null;
    }

    try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching guardian ${id}:`, error);
        return sampleData.find(g => g.id === id) || null;
    }
};

// Default export for compatibility
export default {
    getGuardians,
    getGuardianById
};