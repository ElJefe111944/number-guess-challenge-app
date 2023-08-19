import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';
import Colours from '../../constants/colours';

interface InstructionTextProps {
    children: React.ReactNode;
    style?: StyleProp<TextStyle>;
}

export default function Card({ children, style }: InstructionTextProps) {
    return (
        <Text style={[styles.inputInstructionText, style]}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    inputInstructionText: {
        color: Colours.secondary500,
        fontSize: 24,
      },
});
