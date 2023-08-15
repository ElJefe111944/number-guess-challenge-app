import { StyleSheet, Text, View } from 'react-native';

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
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
  }
});
