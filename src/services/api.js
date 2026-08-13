// API Service for handling all backend communications
class ApiService {
    constructor() {
        this.baseURL = (import.meta.env.VITE_API_URL || 'http://localhost:5000/api').replace(/\/$/, '');
    }

    // Generic request method
    async request(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;

        const config = {
            method: options.method || 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            body: options.body ? options.body : undefined,
        };

        const response = await fetch(url, config);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || `HTTP error! status: ${response.status}`);
        }

        return data;
    }

    // Reservation methods
    async createReservation(reservationData) {
        const dataToSend = {
            ...reservationData,
            date: new Date(reservationData.date).toISOString().split('T')[0],
        };

        return this.request('/reservations', {
            method: 'POST',
            body: JSON.stringify(dataToSend),
        });
    }

    async getReservations(params = {}) {
        const queryString = new URLSearchParams(params).toString();
        const endpoint = queryString ? `/reservations?${queryString}` : '/reservations';
        return this.request(endpoint);
    }

    async getReservation(id) {
        return this.request(`/reservations/${id}`);
    }

    async updateReservationStatus(id, status) {
        return this.request(`/reservations/${id}/status`, {
            method: 'PATCH',
            body: JSON.stringify({ status }),
        });
    }

    async getAvailableSlots(date) {
        return this.request(`/availability?date=${encodeURIComponent(date)}`);
    }

    async healthCheck() {
        return this.request('/health');
    }
}

// Singleton instance
const apiService = new ApiService();
export default apiService;
export const createReservation = apiService.createReservation.bind(apiService);
export const {
    getReservations,
    getReservation,
    updateReservationStatus,
    getAvailableSlots,
    healthCheck
} = apiService;
