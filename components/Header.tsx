import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from './ui/Colors';
import TypoText from './ui/TypoText';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={TypoText.header}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    padding: 30,
    width: '100%',
  },
});

export default Header;
