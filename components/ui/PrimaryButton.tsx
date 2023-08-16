import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

// constants
import Colours from '../../constants/colours';

interface PrimaryButtomProps {
  children: string;
  onPress: () => void;
}

const PrimaryButton: React.FC<PrimaryButtomProps> = ({ children, onPress }) => {

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer} onPress={onPress} android_ripple={{ color: Colours.primary600 }}>
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
    backgroundColor: Colours.CtaBackgroundLight,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    backgroundColor: Colours.primary600,
  }
});