import { StyleSheet, Text, View, Alert, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText'
import GuessLogItem from '../components/game/GuessLogItem';


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
  const [guessRounds, setGuessRounds] = useState<number[]>([initialGuess]);

  useEffect(() => {
    if(currentGuess === userNumber){
      console.log(`currentGuess: ${currentGuess}, userNumber: ${userNumber}`)
      gameOverHandler();
    }

  }, [currentGuess, userNumber, gameOverHandler]);

  useEffect(() => {
    let minBoundary = 1;
    let maxBoundary = 100;
  }, []);

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
    setGuessRounds((prevState) => [newRndNum, ...prevState]);
  };

  const guessRoundsListLength = guessRounds.length;


  return (
    <View style={styles.screen}>
      <Title title="Opponent's Guess" />
      <NumberContainer>
        {currentGuess}
      </NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('lower')}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('higher')}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View>
        <FlatList 
          data={guessRounds}
          renderItem={({item, index}) => <GuessLogItem guess={item} roundNumber={guessRoundsListLength - index} />}
          keyExtractor={(item) => item.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10,
  },
  buttonContainer: {
    flex: 1,
  }
});
