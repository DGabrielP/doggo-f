import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Header from '@/components/Header';
import Colors from '@/components/ui/Colors';
import TypoText from '@/components/ui/TypoText';
import { router } from 'expo-router';
import { useUserStore } from '@/store/UserStore';

const UserScreen = () => {
  const name = useUserStore(state => state.name); // Accede al nombre del usuario desde el store

  return (
    <View style={styles.user}>
      {/* Pasa el nombre al Header */}
      <Header title={name || 'Cargando...'} /> {/* Si no está disponible, muestra "Cargando..." */}

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/pet')} // Dirígete a PetScreen
        >
          <Text style={TypoText.label}>Mascotas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/setings')} // Dirígete a ConfigScreen
        >
          <Text style={TypoText.label}>Configuracion</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  user: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  buttonContainer: {
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: '40%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    marginBottom: 10,
    borderRadius: 10,
    paddingVertical: 15,
  },
});

export default UserScreen;
