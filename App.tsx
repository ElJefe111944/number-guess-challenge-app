import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { useFonts } from 'expo-font';
// screens
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Colours from './constants/colours';
import GameOverScreen from './screens/GameOverScreen';



export default function App() {

  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState<boolean>(true);

  const [fontsLoaded] = useFonts({
    'Open-Sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'Open-Sans-Bold': require('./assets/fonts/OpenSans-Regular.ttf'),
  });

  const startGameHandler = (selectedNumber: number) => {
    setUserNumber(selectedNumber);
    setGameOver(false);
  }

  const gameOverHandler = () => {
    setGameOver(true);
  };

  if(!fontsLoaded){
    return null
  }

  let screen = <StartGameScreen startGameHandler={startGameHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} gameOverHandler={gameOverHandler} />
  }

  if(gameOver && userNumber){
    screen = <GameOverScreen />
  }

  return (
    <LinearGradient
      colors={[ Colours.secondary500, Colours.primary600 ]}
      style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.45,
  }
});
