// frontend/src/services/authService.jsx

const API_BASE_URL = process.env.MONGODB_URI || 'http://localhost:3001'; // Utilisez MONGODB_URI s'il est défini, sinon utilisez 'http://localhost:3000'

export async function registration(userData) {
  try {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Erreur lors de l\'inscription');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur lors de l\'inscription:', error);
    throw error;
  }
}
