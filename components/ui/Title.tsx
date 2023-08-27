import { StyleSheet, Text, View, Dimensions, Platform } from 'react-native';
import Colours from '../../constants/colours';



interface TileProp {
    title: string;
}

export default function GameScreen({ title }: TileProp) {
  return (
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>

  );
}

const windowWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: Colours.titleTextColour,
    textAlign: 'center',
    // borderWidth: Platform.OS === 'ios' ? 0 : 2,
    borderWidth: Platform.select({ ios: 0, android: 0 }),
    borderColor: Colours.titleTextColour,
    padding: 12,
    fontFamily: 'Open-Sans-Bold',
    maxWidth: '80%',
    width: 300,
    marginTop: windowWidth < 480 ? 20 : 0,
  }
});
