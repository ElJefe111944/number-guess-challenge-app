import { StyleSheet, Image, View } from 'react-native';
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
    margin: 'auto',
  },
  image: {
    width: '100%',
    height: '100%',
  }
});
