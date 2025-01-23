import React from 'react';
import { Image, StyleSheet } from 'react-native';

interface LogoProps {
  source: any; // Imagen del logo
  style?: object;
}

const Logo: React.FC<LogoProps> = ({ source, style }) => {
  return <Image source={source} style={[styles.logo, style]} />;
};

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});

export default Logo;
