import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Header from '@/components/Header';
import Colors from '@/components/ui/Colors';
import TypoText from '@/components/ui/TypoText';
import { router } from 'expo-router';


const RegisterScreen = () => {
  return (
    <View style={styles.user}>
      <Header title='User'/>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/explore')}
        >
          <Text style={TypoText.label}>Mascotas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/explore')}
        >
          <Text style={TypoText.label}>Configuracion</Text>
        </TouchableOpacity>
      </View>

    </View>



  );
};

const styles = StyleSheet.create({
  user:{
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
  registerContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  button: {
    width: '100%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    marginBottom: 10, 
    borderRadius: 10,
    paddingVertical: 15,
  },
  mailText: {
    marginTop: 10,
  },
 
});

export default RegisterScreen;
