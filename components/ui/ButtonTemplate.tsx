import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from './Colors';

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: object;
}

const ButtonTemplate: React.FC<ButtonProps> = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.secondary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
  },
  text: {
    color: Colors.light,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ButtonTemplate;
