import axios from 'axios';

export const fetchAverageReviews = async (businessId: number) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/v1/reviews/business/average/${businessId}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch average reviews for service ${businessId}: ${error}`);
        return null;
    }
};