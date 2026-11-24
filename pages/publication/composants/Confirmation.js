import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Confirmation({ duree, onValider }) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }} />

      <Ionicons name="hourglass-outline" size={110} color="#C9BDF7" />
      <Text style={styles.titre}>Capsule confiée.</Text>
      <Text style={styles.duree}>{duree}</Text>

      <View style={{ flex: 1 }} />

      <Pressable
        onPress={onValider}
        style={({ pressed }) => [styles.rond, pressed && styles.appui]}
      >
        <Ionicons name="checkmark" size={30} color="#7D61F4" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEAFB',
    alignItems: 'center',
    paddingBottom: 140,
  },
  titre: {
    fontSize: 30,
    color: '#3A2E7A',
    marginTop: 30,
  },
  duree: {
    fontSize: 22,
    color: '#A796F0',
    marginTop: 10,
  },
  rond: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 5px 20px rgba(123, 96, 246, 0.3)',
        bottom:'20%'

  },
  appui: {
    transform: [{ scale: 0.94 }],
  },
});
