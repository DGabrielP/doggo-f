import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Logo from '@/components/ui/Logo';
import TextInputDefine from '@/components/ui/TextInputDefine';
import ButtonTemplate from '@/components/ui/ButtonTemplate';
import TypoText from '@/components/ui/TypoText';
import Colors from '@/components/ui/Colors';
import { router } from 'expo-router';




const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Logo source={require('@/assets/images/logo-nofondo.png')} />
      <Text style={TypoText.label}>User</Text>
      <TextInputDefine placeholder="name_user" />
      <Text style={TypoText.label}>Password</Text>
      <TextInputDefine placeholder="password" secureTextEntry />
      <ButtonTemplate title="Ingresar" onPress={() => alert('Login!')} />
      <TouchableOpacity onPress={() => router.push('/register')}>
        <Text style={[TypoText.small, styles.registerText]}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  registerText: {
    
  },
});

export default HomeScreen;
