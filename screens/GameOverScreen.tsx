import { StyleSheet, Image, View, Text, Dimensions } from 'react-native';
import Title from '../components/ui/Title'
import PrimaryButton from '../components/ui/PrimaryButton';
import Colours from '../constants/colours';

interface GameOverScreenProps {
  roundNumber: number,
  userNumber: number | null,
  onStartNewGame: () => void,
}


export default function GameOverScreen({ roundNumber, userNumber, onStartNewGame }: GameOverScreenProps) {
  return (
    <View style={styles.rootContainer}>
      <Title title='Game Over!' />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>
      <Text style={styles.summaryText}>Your phone neeed <Text style={styles.highlight}>{roundNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.</Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    borderRadius: windowWidth > 380 ? 100 : 150,
    width: windowWidth > 380 ? 200 : 300,
    height: windowWidth > 380 ? 200 : 300,
    borderWidth: 3,
    borderColor: Colours.CtaBackgroundLight,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'Open-Sans-Regular',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlight: {
    fontFamily: 'Open-Sans-Bold',
    color: Colours.primary500,
  }
});
