import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colours from '../../constants/colours';

interface NumberContainerProps {
    children: React.ReactNode;
}

export default function NumberContainer({ children }: NumberContainerProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colours.primary600,
        borderRadius: 8,
        padding: 24,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: Colours.primary600,
        fontSize: 36,
        fontWeight: 'bold',
    }
});