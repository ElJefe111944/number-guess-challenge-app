import { StyleSheet, TextInput, View, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';

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
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: '#72063c',
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
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
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
