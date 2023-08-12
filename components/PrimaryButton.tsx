import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface PrimaryButtomProps {
    children: string;
}

const PrimaryButton: React.FC<PrimaryButtomProps> = ({ children }) => {

  return (
    <View>
        <Text>{children}</Text>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({

});