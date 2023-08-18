import { StyleSheet, Text, View } from 'react-native';
import Colours from '../../constants/colours';

interface InstructionTextProps {
    children: React.ReactNode;
}

export default function Card({ children }: InstructionTextProps) {
    return (
        <Text style={styles.inputInstructionText}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    inputInstructionText: {
        color: Colours.secondary500,
        fontSize: 24,
      },
});
