import { TextStyle } from 'react-native';
import Colors from './Colors';

const TypoText: { [key: string]: TextStyle } = {
  // Header principal (por ejemplo, "THOMY")
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: Colors.light, // Blanco
  },
  // Títulos secundarios (como "Mascotas", "Control")
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.light,
  },
  // Texto del cuerpo (para textos normales)
  body: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.light,
  },
  // Etiquetas de los inputs (como "User", "Password")
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.textLight,
    textTransform: 'uppercase',
  },
  // Texto dentro de los inputs
  input: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.textDark, // Texto oscuro
  },
  // Texto de los botones (por ejemplo, "Ingresar")
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.light, // Blanco
  },
  // Texto pequeño, como enlaces o subtítulos
  small: {
    fontSize: 12,
    fontWeight: '400',
    color: Colors.textLight, // Gris claro
  },
};

export default TypoText;
