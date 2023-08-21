import { StyleSheet, Image, View, Text } from 'react-native';
import Title from '../components/ui/Title'
import Colours from '../constants/colours';

export default function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title title='Game Over!' />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>
      <Text style={styles.summaryText}>Your phone neeed <Text style={styles.highlight}>X</Text> rounds to guess the number <Text style={styles.highlight}>Y</Text>.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
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
  },
  highlight: {
    fontFamily: 'Open-Sans-Bold',
    color: Colours.primary500,
  }
});
