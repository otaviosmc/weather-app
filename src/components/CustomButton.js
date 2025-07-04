import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CustomButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#23262B', // Cor de fundo aqui!
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 100,
    width:300,
    borderRadius:20,
    borderWidth: 1,
    borderColor: '#838384'
  },
  text: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Overpass-Regular',
  },
  
});
