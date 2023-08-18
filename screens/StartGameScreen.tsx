import { StyleSheet, TextInput, View, Alert, Text } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import { useState } from 'react';
import Colours from '../constants/colours';
import Title from '../components/ui/Title'
import Card from '../components/ui/Card';

interface StartGameScreenProp {
  startGameHandler: (selectedNumber: number) => void;
}

export default function StartGameScreen({ startGameHandler }: StartGameScreenProp) {

  const [enteredNumber, setEnteredNumber] = useState<string>('')

  // update on each keystroke
  const numberInputHandler = (value: string) => {
    setEnteredNumber(value);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    // input validation
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // show alert 
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99',
        [
          {
            text: 'Try again',
            onPress: () => resetInputHandler,
            style: 'cancel',
          }
        ]
      )
      return;
    }
    startGameHandler(chosenNumber);
  };

  const resetInputHandler = () => {
    setEnteredNumber('');
  };

  return (
    <View style={styles.rootContainer}>
      <Title title='Guess my Number' />
      <Card>
        <Text style={styles.inputInstructionText}>Enter a number</Text>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType='number-pad'
          autoCapitalize='none'
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  inputInstructionText: {
    color: Colours.secondary500,
    fontSize: 24,
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colours.secondary500,
    borderBottomWidth: 2,
    color: Colours.secondary500,
    marginVertical: 8,
    fontWeight: 'bold',
    width: 50,
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
