import { StyleSheet, TextInput, View, Alert } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import { useState } from 'react';
import Colours from '../constants/colours';
import Title from '../components/ui/Title'

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
      <View style={styles.inputContainer}>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 36,
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
