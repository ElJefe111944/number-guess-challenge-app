import { StyleSheet, Text, View, Alert } from 'react-native';
import Title from '../components/ui/Title'
import { useEffect, useState } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';

interface GameScreenProps {
  userNumber: number | null;
  gameOverHandler: () => void;
}

function generateRandomBetween(min: number, max: number, exclude: number | null) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

// initial boundaries
let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, gameOverHandler }: GameScreenProps) {

  const initialGuess = generateRandomBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);

  useEffect(() => {
    if(currentGuess === userNumber){
      console.log(`currentGuess: ${currentGuess}, userNumber: ${userNumber}`)
      gameOverHandler();
    }

  }, [currentGuess, userNumber, gameOverHandler]);

  function nextGuessHandler(direction: string) {

    if (direction === 'lower') {
      if (userNumber !== null && currentGuess < userNumber) {
        Alert.alert("Don't lie!", "You know that this is wrong...", [
          {
            text: "Sorry!",
            style: "cancel",
          }
        ])
        return;
      }
    }

    if (direction === 'higher') {
      if (userNumber !== null && currentGuess > userNumber) {
        Alert.alert("Don't lie!", "You know that this is wrong...", [
          {
            text: "Sorry!",
            style: "cancel",
          }
        ])
        return;
      }
    }
    // lower option
    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      // higher option
      minBoundary = currentGuess + 1;
    }
    console.log(minBoundary, maxBoundary)
    const newRndNum = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndNum);
  };


  return (
    <View style={styles.screen}>
      <Title title="Opponent's Guess" />
      <NumberContainer>
        {currentGuess}
      </NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <PrimaryButton onPress={() => nextGuessHandler('lower')}>-</PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler('higher')}>+</PrimaryButton>
        </View>
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
