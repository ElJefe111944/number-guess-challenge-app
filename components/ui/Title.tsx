import { StyleSheet, Text, View } from 'react-native';
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

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: Colours.titleTextColour,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colours.titleTextColour,
    padding: 12,
    fontFamily: 'Open-Sans-Bold',
    maxWidth: '80%',
    width: 300,
  }
});
