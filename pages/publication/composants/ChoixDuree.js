import { StyleSheet, Text, View, Pressable, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DUREES = ['48 h', '7 j', '1 mois'];

export default function ChoixDuree({ duree, onChange, onRetour, onSuivant }) {
  return (
    <View style={styles.container}>
      {/* Bouton retour */}
      <Pressable onPress={onRetour} style={styles.retour}>
        <Ionicons name="chevron-back" size={26} color="#3A2E7A" />
      </Pressable>

      {/* Aperçu de la vidéo (image de test) */}
      <ImageBackground
        source={{ uri: 'https://picsum.photos/seed/coucher/800/600' }}
        style={styles.apercu}
        imageStyle={{ borderRadius: 28 }}
      >
        <View style={styles.play}>
          <Ionicons name="play" size={30} color="#fff" />
        </View>
        <Text style={styles.temps}>1:00</Text>
      </ImageBackground>

      {/* Choix de la durée */}
      <View style={styles.ligneDurees}>
        {DUREES.map((d) => {
          const actif = duree === d;
          return (
            <Pressable
              key={d}
              onPress={() => onChange(d)}
              style={[styles.pastille, actif && styles.pastilleActive]}
            >
              <Text style={[styles.texteDuree, actif && styles.texteDureeActif]}>{d}</Text>
            </Pressable>
          );
        })}
      </View>

      <View style={{ flex: 1 }} />

      {/* Bouton suivant */}
      <Pressable
        onPress={onSuivant}
        style={({ pressed }) => [styles.rond, pressed && styles.appui]}
      >
        <Ionicons name="arrow-forward" size={28} color="#7D61F4" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEAFB',
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 140,
    alignItems: 'center',
  },
  retour: {
    alignSelf: 'flex-start',
    width: 44,
    height: 44,
    justifyContent: 'center',
  },
  apercu: {
    width: '100%',
    aspectRatio: 4 / 3,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  play: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  temps: {
    position: 'absolute',
    bottom: 14,
    right: 18,
    color: '#fff',
    fontSize: 13,
  },
  ligneDurees: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 50,
  },
  pastille: {
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 999,
  },
  pastilleActive: {
    backgroundColor: '#fff',
    boxShadow: '0 5px 20px rgba(123, 96, 246, 0.25)',
  },
  texteDuree: {
    fontSize: 20,
    color: '#3A2E7A',
  },
  texteDureeActif: {
    fontWeight: 'bold',
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
