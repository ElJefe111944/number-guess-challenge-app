import { StyleSheet, Text, View } from 'react-native';
import { FC } from 'react';

interface PrimaryButtomProps {
    children: string;
}

const PrimaryButton: FC<PrimaryButtomProps> = ({ children }) => {

  return (
    <View>
        <Text>{children}</Text>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({

});