import { StyleSheet, Text, View, Button } from 'react-native';
import Title from '../components/Title'
import Colours from '../constants/colours';

export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title title="Opponent's Guess" />
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
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colours.titleTextColour,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colours.titleTextColour,
    padding: 12,
  }
});
