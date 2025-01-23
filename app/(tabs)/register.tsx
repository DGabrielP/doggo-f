import React from 'react';
import { View, StyleSheet, Text,} from 'react-native';
import Header from '@/components/Header';
import Colors from '@/components/ui/Colors';
import TypoText from '@/components/ui/TypoText';


const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Header title='Registro'/>
        <Text style={TypoText.title}>Registro</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
  },
  registerContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  mailText: {
    marginTop: 10,
  },
 
});

export default RegisterScreen;
