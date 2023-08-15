import { StyleSheet, Text, View, Button } from 'react-native';

export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <View>
        <Text>Opponent's Guess</Text>
      </View>
      <View>
        <Text>Higher or Lower?</Text>
        <Button title='+' />
        <Button title='-' />
      </View>
      <View>
        <Text>
          Round Logs
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,

  }
});
