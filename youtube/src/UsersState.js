import { useState, useEffect } from 'react';
import axios from 'axios';

export const UsersState = () => {
//state of list of users to access from across the program
const [users, setUsers] = useState([]);

//add a new user function
const addUser = async (newUser) => {
  try {
    const response = await axios.post('http://localhost:80/api/users', newUser);
    // console.log(response.data.message); // Log the status message
    // console.log(response.data.newUser); //log
    setUsers([...users, response.data.newUser]);
  } catch (error) {
    console.error('Error adding user:', error);
  }
  console.log(users); //debug
};

//fetch users
useEffect(() => {
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:80/users/fetchUsers');
      console.log(response); // Log the status message
      if (Array.isArray(response.data.users)) {
        setUsers(response.data.users);
      } else {
        console.error('Fetched users data is not an array:', response.data.users);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  fetchUsers();
  // console.log(users);
}, []);

return {users, addUser};
};
