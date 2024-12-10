import axios from 'axios';

const BASE_URL = 'https://api.github.com/users';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`);
    return response.data;
  } catch (error) {
    throw new Error('User not found');
  }
import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

export const fetchAdvancedUserData = async (criteria) => {
  const { username, location, minRepos } = criteria;

  let query = [];
  if (username) query.push(`user:${username}`);
  if (location) query.push(`location:${location}`);
  if (minRepos) query.push(`repos:>${minRepos}`);

  const queryString = query.join('+');
  const url = `${BASE_URL}?q=${queryString}`;

  try {
    const response = await axios.get(url);
    return response.data.items; // Array of users
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
};
