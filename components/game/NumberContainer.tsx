import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
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

const windowWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colours.primary600,
        borderRadius: 8,
        padding: windowWidth < 380 ? 12 : 24,
        margin: windowWidth < 380 ? 12 : 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: Colours.primary600,
        fontSize: windowWidth < 380 ? 28 : 36,
        fontFamily: 'Open-Sans-Bold',
    }
});