// services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // Remplacez par l'URL de votre API Symfony

export const getUser = async (userId) => {
  return axios.get(`${API_URL}/users/${userId}`);
};

export const updateUser = async (userId, userData) => {
  return axios.put(`${API_URL}/users/${userId}`, userData);
};

// Ajoutez d'autres fonctions CRUD pour gérer les utilisateurs, les commandes, etc.
