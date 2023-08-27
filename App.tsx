import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
// screens
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Colours from './constants/colours';
import GameOverScreen from './screens/GameOverScreen';



SplashScreen.preventAutoHideAsync();

export default function App() {

  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState<boolean>(true);
  const [rounds, setRounds] = useState<number>(0);

  const [fontsLoaded] = useFonts({
    'Open-Sans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'Open-Sans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  useEffect(() => {
    const hideSplashScreen = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    };

    hideSplashScreen();

  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const startGameHandler = (selectedNumber: number) => {
    setUserNumber(selectedNumber);
    setGameOver(false);
  }

  const gameOverHandler = (numberOfRounds: number) => {
    setGameOver(true);
    setRounds(numberOfRounds)
  };

  const StartNewGameHandler = () => {
    setUserNumber(null);
    setRounds(0);
  };

  let screen = <StartGameScreen startGameHandler={startGameHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} gameOverHandler={gameOverHandler} />
  }

  if (gameOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} roundNumber={rounds} onStartNewGame={StartNewGameHandler} />
  }

  return (
    <>
      <StatusBar style='light' />
      <LinearGradient
        colors={[Colours.primary600, Colours.secondary500]}
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
    </>
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
