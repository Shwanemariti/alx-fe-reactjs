import axios from 'axios';

const BASE_URL = ('https://api.github.com/search/user?q=${query}');

/**
 * Fetches GitHub users based on the search query.
 * @param {string} query - The search query (e.g., username, location, repos).
 * @returns {Promise<Object>} - The search results from the GitHub API.
 */
export const fetchUserData = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
    return response.data; // GitHub API returns data in the `items` property
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; // Propagate the error for handling in the UI
  }
};
