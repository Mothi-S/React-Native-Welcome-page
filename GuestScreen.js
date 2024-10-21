
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GuestScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome Guest</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#ffdab9',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color:"black",
  },
});

export default GuestScreen;
