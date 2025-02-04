import api from './api';

export const createPet = async (name: string, species: string, bread: string, age: string, ownerName: string, userId: string) => {
  try {
    const response = await api.post('/pets', {
      name,
      species,
      bread,
      age,
      ownerName,
      userId,
    });
    return response.data;
  } catch (error) {
    throw new Error('Error al crear la mascota');
  }
};
