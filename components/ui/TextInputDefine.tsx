import React from 'react';
import { TextInput as RNTextInput, StyleSheet, TextInputProps } from 'react-native';
import Colors from './Colors';

const TextInputDefine: React.FC<TextInputProps> = (props) => {
  return (
    <RNTextInput
      style={styles.input}
      placeholderTextColor={Colors.textLight}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.light,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginVertical: 8,
    borderColor: Colors.textLight,
    borderWidth: 1,
    color: Colors.textDark,
    width: 300,
  },
});

export default TextInputDefine;
