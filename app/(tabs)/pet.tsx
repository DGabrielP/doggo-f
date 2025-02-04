import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, Alert } from 'react-native';
import { fetchPets } from '@/config/pet'; // Asegúrate de que la ruta sea correcta
import { router } from 'expo-router';
import ButtonTemplate from '@/components/ui/ButtonTemplate'; // Importa el componente ButtonTemplate
import Colors from '@/components/ui/Colors';
import TypoText from '@/components/ui/TypoText';

// Definir la interfaz Pet
interface Pet {
  id: number;
  name: string;
  ownerName: string; 
}

const PetListScreen = () => {
  const [pets, setPets] = useState<Pet[]>([]); // Especifica que pets es un array de Pet
  const [loading, setLoading] = useState(true);

  // Función para cargar las mascotas
  const loadPets = async () => {
    try {
      const petsData = await fetchPets(); // Obtiene las mascotas desde la API
      setPets(petsData); // Guarda las mascotas
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Alert.alert('Error', 'No se pudo cargar la lista de mascotas');
    }
  };

  useEffect(() => {
    loadPets(); // Carga las mascotas cuando el componente se monta
  }, []);

  // Función para renderizar cada mascota
  const renderItem = ({ item }: { item: Pet }) => (
    <View style={styles.petItem}>
      <Text style={TypoText.label}>{item.name}</Text> {/* Nombre de la mascota */}
      <Text>Dueño: {item.ownerName}</Text> {/* Nombre del dueño */}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={TypoText.title}>Lista de Mascotas</Text>
      
      {loading ? (
        <Text>Cargando...</Text>
      ) : (
        <FlatList
          data={pets}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()} // Asegúrate de que cada mascota tenga un id único
        />
      )}

      {/* Botones fuera del View con la lista de mascotas */}
      <View style={styles.buttonContainer}>
        <ButtonTemplate title="Añadir Mascota" onPress={() => router.push('./newPet')} />
        <ButtonTemplate title="Ver Monitoreo" onPress={() => router.push('./monitor')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    padding: 20,
  },
  petItem: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default PetListScreen;
