import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

interface PrimaryButtomProps {
  children: string;
}

const PrimaryButton: React.FC<PrimaryButtomProps> = ({ children }) => {

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer} onPress={() => { console.log('Pressed') }} android_ripple={{ color: '#57012c' }}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    elevation: 2,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#8a5871',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    backgroundColor: '#57012c',
  }
});