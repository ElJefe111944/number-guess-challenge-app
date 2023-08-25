import { StyleSheet, View, Dimensions } from 'react-native';
import Colours from '../../constants/colours';


interface CardProps {
    children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
    return (
        <View style={styles.inputContainer}>{children}</View>
    );
}

const windowWidth = Dimensions.get('window').width;



const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: windowWidth < 380 ? 18 : 36,
        marginHorizontal: 24,
        backgroundColor: Colours.primary500,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        textAlign: 'center',

    },
});
