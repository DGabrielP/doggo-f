import {useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert, TextInput} from 'react-native';
import Header from '@/components/Header';
import Colors from '@/components/ui/Colors';
import TypoText from '@/components/ui/TypoText';
import Logo from '@/components/ui/Logo';
import TextInputDefine from '@/components/ui/TextInputDefine';
import ButtonTemplate from '@/components/ui/ButtonTemplate';
import { useRouter } from 'expo-router';
import { register } from '@/config/auth';


const RegisterScreen = () => {

  const router = useRouter(); 
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }
    try {
      const response = await register(username, email, password);
      Alert.alert(`Éxito, ${response.message}`);
      router.replace("./index"); // Redirigir al login después del registro
    } catch (error) {
      Alert.alert("Error, No se pudo registrar el usuario");
    }
  };

  return (
    <View style={styles.container}>
      <Header title='Registro'/>
    
    <View>
      <Logo source={require('@/assets/images/logo-nofondo.png')} />
      <Text style={TypoText.label}>user name</Text>
      <TextInputDefine placeholder="Nombre de usuario" onChangeText={setUsername}/>
      <Text style={TypoText.label}>Password</Text>
      <TextInputDefine placeholder="Contraseña" secureTextEntry onChangeText={setPassword}/>
      <Text style={TypoText.label}>Pasword confirm</Text>
      <TextInputDefine placeholder="Confirme la contraseña" secureTextEntry onChangeText={setConfirmPassword}/>
      <Text style={TypoText.label}>E mail</Text>
      <TextInput placeholder="Correo electronico" onChangeText={setEmail}/>
      <ButtonTemplate title="Registrar" onPress={handleRegister} />
      <TouchableOpacity onPress={()=>alert("proximamente")}>
        <Text style={[TypoText.small, styles.registerText]}>Registrar con Google</Text>
      </TouchableOpacity>
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
  registerContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  mailText: {
    marginTop: 10,
  },
  registerText: {
    marginTop: 10,
  }
 
});

export default RegisterScreen;
