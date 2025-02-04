import api from './api'; // Asegúrate de que la ruta sea correcta

// Función para obtener las mascotas desde la API
export const fetchPets = async () => {
  try {
    const response = await api.get('/pets'); // Ruta de la API para obtener mascotas
    return response.data; // Asumiendo que la API devuelve un array de mascotas
  } catch (error) {
    console.error('Error al obtener las mascotas:', error);
    throw new Error('Error al obtener las mascotas');
  }
};