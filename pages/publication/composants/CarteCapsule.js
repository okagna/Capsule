import { StyleSheet, Text, View, ImageBackground, Pressable, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CarteCapsule({ capsule }) {
  // Ce qui se passe quand on appuie sur une capsule
  const onPressCapsule = () => {
    Alert.alert(
      'Capsule scellée 🔒',
      `Elle se révélera dans ${capsule.duree}. Encore un peu de patience !`
    );
  };

  return (
    <Pressable
      onPress={onPressCapsule}
      style={({ pressed }) => [styles.carte, pressed && styles.appui]}
    >
      <ImageBackground
        source={{ uri: 'https://picsum.photos/seed/coucher/200/200' }}
        style={styles.miniature}
        imageStyle={{ borderRadius: 14 }}
      >
        <View style={styles.play}>
          <Ionicons name="play" size={12} color="#fff" />
        </View>
      </ImageBackground>

      <View style={styles.bas}>
        <Text style={styles.duree}>{capsule.duree}</Text>
        <Ionicons name="lock-closed-outline" size={14} color="#A796F0" />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  carte: {
    width: 90,
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 6,
    gap: 6,
  },
  appui: {
    transform: [{ scale: 0.95 }],
    opacity: 0.8,
  },
  miniature: {
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  play: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: 'rgba(255,255,255,0.35)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bas: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    paddingBottom: 2,
  },
  duree: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3A2E7A',
  },
});
