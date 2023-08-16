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
    fontWeight: 'bold',
    color: Colours.titleTextColour,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colours.titleTextColour,
    padding: 12,
  }
});
