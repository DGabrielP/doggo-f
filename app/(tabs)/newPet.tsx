import { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert, TextInput } from 'react-native';
import Header from '@/components/Header';
import Colors from '@/components/ui/Colors';
import TypoText from '@/components/ui/TypoText';
import Logo from '@/components/ui/Logo';
import TextInputDefine from '@/components/ui/TextInputDefine';
import ButtonTemplate from '@/components/ui/ButtonTemplate';
import { useRouter } from 'expo-router';
import { createPet } from '@/config/createPet'; // Función que manejará la creación de la mascota en la API

const NewPetScreen = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [bread, setBread] = useState('');
  const [age, setAge] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [userId, setUserId] = useState(''); // Aquí deberías obtener el userId de la sesión o contexto de usuario

  const handleCreatePet = async () => {
    // Validar que todos los campos estén completos
    if (!name || !species || !bread || !age || !ownerName || !userId) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    try {
      const response = await createPet(name, species, bread, age, ownerName, userId);
      Alert.alert('Éxito', `La mascota ${response.name} fue creada exitosamente`);
      router.push('./pet'); // Redirigir a la pantalla donde se listan las mascotas
    } catch (error) {
      Alert.alert('Error', 'No se pudo crear la mascota');
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Nueva Mascota" />
      <View>
        <Logo source={require('@/assets/images/logo-nofondo.png')} />
        <Text style={TypoText.label}>Nombre de la mascota</Text>
        <TextInputDefine placeholder="Nombre" onChangeText={setName} />
        
        <Text style={TypoText.label}>Especie</Text>
        <TextInputDefine placeholder="Especie" onChangeText={setSpecies} />

        <Text style={TypoText.label}>Raza</Text>
        <TextInputDefine placeholder="Raza" onChangeText={setBread} />

        <Text style={TypoText.label}>Edad</Text>
        <TextInputDefine placeholder="Edad" keyboardType="numeric" onChangeText={setAge} />

        <Text style={TypoText.label}>Nombre del dueño</Text>
        <TextInputDefine placeholder="Nombre del dueño" onChangeText={setOwnerName} />
        
        {/* Aquí deberías obtener el userId del usuario logueado, por ejemplo, desde un contexto global o el almacenamiento local */}
        <TextInput
          style={styles.hiddenInput}
          value={userId}
          onChangeText={setUserId} // Establecer el userId
          placeholder="ID del usuario"
        />

        <ButtonTemplate title="Crear Mascota" onPress={handleCreatePet} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
  },
  hiddenInput: {
    display: 'none', // Ocultar el campo para el userId, ya que el ID debería venir de un contexto o algo más seguro
  },
});

export default NewPetScreen;
