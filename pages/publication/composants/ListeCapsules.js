import { StyleSheet, Text, View, ScrollView, Pressable, ImageBackground, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ListeCapsules({ capsules, onRetour }) {
  const onPressCapsule = (capsule) => {
    Alert.alert(
      'Capsule scellée 🔒',
      `Elle se révélera dans ${capsule.duree}. Encore un peu de patience !`
    );
  };

  return (
    <View style={styles.container}>
      {/* Retour */}
      <Pressable onPress={onRetour} style={styles.retour}>
        <Ionicons name="chevron-back" size={26} color="#3A2E7A" />
      </Pressable>

      <Text style={styles.titre}>Mes Capsules</Text>
      <Text style={styles.nombre}>
        {capsules.length} capsule{capsules.length > 1 ? 's' : ''}
      </Text>

      <ScrollView contentContainerStyle={styles.liste} showsVerticalScrollIndicator={false}>
        {capsules.map((c) => (
          <Pressable
            key={c.id}
            onPress={() => onPressCapsule(c)}
            style={({ pressed }) => [styles.ligne, pressed && styles.appui]}
          >
            <ImageBackground
              source={{ uri: 'https://picsum.photos/seed/coucher/200/200' }}
              style={styles.miniature}
              imageStyle={{ borderRadius: 14 }}
            >
              <View style={styles.play}>
                <Ionicons name="play" size={14} color="#fff" />
              </View>
            </ImageBackground>

            <Text style={styles.duree}>{c.duree}</Text>

            <Ionicons name="lock-closed-outline" size={20} color="#A796F0" />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEAFB',
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 150,
  },
  retour: {
    width: 44,
    height: 44,
    justifyContent: 'center',
  },
  titre: {
    fontSize: 28,
    color: '#3A2E7A',
    marginTop: 10,
  },
  nombre: {
    fontSize: 14,
    color: '#5B5675',
    marginTop: 4,
    marginBottom: 20,
  },
  liste: {
    paddingBottom: 20,
  },
  ligne: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(167, 150, 240, 0.25)',
  },
  appui: {
    opacity: 0.6,
  },
  miniature: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  play: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.35)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  duree: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    color: '#3A2E7A',
  },
});
