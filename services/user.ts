
import api from './api';

// Función para autenticar al usuario
export const loginUser = async (username: string, password: string) => {
  try {
    const response = await api.post('/auth/login', { username, password });
    return response.data; // Retorna los datos del usuario autenticado (userId, token, etc.)
  } catch (error) {
    throw new Error('Usuario o contraseña incorrectos');
  }
};

