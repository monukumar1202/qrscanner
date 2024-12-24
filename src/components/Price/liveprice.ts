import axios from 'axios';

const API_URL = 'https://api.frankfurter.app/latest?from=USD&to=INR'; // Replace with your chosen API

export const fetchExchangeRate = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching exchange rate:', error);
        throw error;
    }
};