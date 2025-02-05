import axios from "axios";

/**
 * Fetch IP details from the backend API
 * @param {string} ipAddress - The IP address or domain to search for
 * @returns {Promise<Object>} - The data returned by the API
 */
export const fetchIPDetails = async (ipAddress) => {
  try {
    const response = await axios.get(`https://ip-address-tracker-410z.onrender.com/api/ip/${ipAddress}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching IP details:", error);
    throw error;
  }
};
