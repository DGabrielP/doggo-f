import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import Logo from '@/components/ui/Logo';
import TextInputDefine from '@/components/ui/TextInputDefine';
import ButtonTemplate from '@/components/ui/ButtonTemplate';
import TypoText from '@/components/ui/TypoText';
import Colors from '@/components/ui/Colors';
import { router } from 'expo-router';
import { loginUser } from '@/services/user';
import { useUserStore } from '@/store/UserStore';

const HomeScreen = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {setUser} = useUserStore();

  const handleLogin = async() => {
    try {
    const user = await loginUser(username, password);
    setUser(user.id, user.name, user.token);
    router.push('/explore');
    }catch (error) {
      console.error(error);
      Alert.alert('Error', 'Usuario o contraseña incorrectos')
  } 
}

  return (
    <View style={styles.container}>
      <Logo source={require('@/assets/images/logo-nofondo.png')} />
      <Text style={TypoText.label}>User</Text>
      <TextInputDefine placeholder="name_user" value={username} onChangeText={setUsername}/>
      <Text style={TypoText.label}>Password</Text>
      <TextInputDefine placeholder="password" secureTextEntry value={password} onChangeText={setPassword}/>
      <ButtonTemplate title="Ingresar" onPress={handleLogin} />
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
