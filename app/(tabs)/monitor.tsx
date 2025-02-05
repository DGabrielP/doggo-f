import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '@/components/Header';

export default function MonitorScreen() {
    return (
      <View style={styles.container}>
        <Header title='Monitor'/>
      </View>
    );
  }

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
});