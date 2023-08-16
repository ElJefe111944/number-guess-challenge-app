import { StyleSheet, Text, View, Button } from 'react-native';
import Title from '../components/Title'
import Colours from '../constants/colours';
import { useState } from 'react';

interface GameScreenProps {
  userNumber: number | null;
}

  function generateRandomBetween(min: number, max: number, exclude: number | null) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

export default function GameScreen({ userNumber }: GameScreenProps) {

  const initialGuess = generateRandomBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);

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
});
