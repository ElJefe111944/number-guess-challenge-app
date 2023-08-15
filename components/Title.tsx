import { StyleSheet, Text, View } from 'react-native';

export default function GameScreen() {
  return (
      <View>
        <Text style={styles.title}>Opponent's Guess</Text>
      </View>

  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
  }
});
