// src/_services/auth.js
import axios from "axios";

const API_URL = "http://localhost:8000/api"; // ganti sesuai URL backend kamu

// Register
export const registerUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/register`, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// Login
export const loginUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/login`, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// Logout
export const logoutUser = async (token) => {
  try {
    await axios.post(
      `${API_URL}/logout`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
  } catch (error) {
    throw error.response?.data || error;
  }
};
