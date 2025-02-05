import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import Header from "@/components/Header";
import Colors from "@/components/ui/Colors";
import TypoText from "@/components/ui/TypoText";
import { router } from "expo-router";
import { useUserStore } from "@/store/UserStore";
import { usePetStore } from "@/store/PetStore"; // Almacena mascota seleccionada
import api from "@/services/api";

// Definir la interfaz de Pet
interface Pet {
  id: number;
  name: string;
  ownerdName: string;
}

const PetScreen = () => {
  const { userId, token } = useUserStore(); // Obtener usuario autenticado
  const { setPet } = usePetStore(); // Guardar mascota seleccionada
  const [pets, setPets] = useState<Pet[]>([]); // Estado tipado correctamente

  // Función para obtener las mascotas del usuario
  const fetchPets = async () => {
    try {
      const response = await api.get(`/pets?userId=${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPets(response.data);
    } catch (error) {
      console.error("Error fetching pets:", error);
    }
  };

  // Cargar mascotas al montar la pantalla
  useEffect(() => {
    if (userId && token) {
      fetchPets();
    }
  }, [userId, token]);

  return (
    <View style={styles.container}>
      <Header title="Mascotas" />

      <FlatList
        data={pets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.petCard}>
            <Text style={TypoText.label}>{item.name}</Text>
            <Text style={TypoText.body}>Dueño: {item.ownerdName}</Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setPet(item.id, item.name); // Guardar mascota seleccionada
                router.push("/monitor"); // Ir a monitor
              }}
            >
              <Text style={TypoText.label}>Ver</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => router.push("/newPet")}
      >
        <Text style={TypoText.label}>Añadir Mascota</Text>
      </TouchableOpacity>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: "center",
    padding: 10,
  },
  petCard: {
    width: "90%",
    backgroundColor: Colors.secondary,
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
  },
  button: {
    marginTop: 10,
    backgroundColor: Colors.secondary,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  addButton: {
    marginTop: 20,
    backgroundColor: Colors.secondary,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
});

export default PetScreen;
