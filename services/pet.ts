import api from '@/services/api';

interface Pet {
  id: number;
  name: string;
  ownerdName: string;
}

export const fetchPets = async (userId: number, token: string): Promise<Pet[]> => {
  try {
    const response = await api.get(`/pets?userId=${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching pets:', error);
    return []; // 🔥 Retorna un array vacío en lugar de `never[]`
  }
};

