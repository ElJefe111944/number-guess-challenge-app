import { View, Text, StyleSheet } from "react-native"
import Colours from "../../constants/colours";

interface GuessLogItemProps {
    roundNumber: number | null;
    guess: number;
}

export default function GuessLogItem({ roundNumber, guess }: GuessLogItemProps) {
  return (
    <View style={styles.listItem}>
        <Text style={styles.itemText}>#{roundNumber}</Text>
        <Text style={styles.itemText}>Opponents's Guess: {guess}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colours.primary500,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colours.secondary500,
        flexDirection: "row",
        justifyContent: "space-between",
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },
    itemText: {
        fontFamily: 'Open-Sans-Regular',
    }
});