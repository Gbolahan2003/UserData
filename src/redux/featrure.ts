import axios from "axios";
import { store } from "./store";
import { setUsers } from ".";

/**
 * Fetches users from the API and dispatches the setUsers action.
 * 
 * @returns {Promise} A promise that resolves when the users are fetched and the action is dispatched.
 */
export const fetchUsers = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    if (response.status === 200) {
      store.dispatch(setUsers(response.data));
      return response.data;
    } else {
      throw new Error(`Failed to fetch users: ${response.status}`);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};