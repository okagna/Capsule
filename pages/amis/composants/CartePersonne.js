import { StyleSheet, Text, View, Pressable, Image, ImageBackground, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CartePersonne({ personne }) {
  const onPressCarte = () => {
    if (personne.ouverte) {
      Alert.alert(personne.nom, 'Sa capsule est ouverte ! (la lecture arrive bientôt)');
    } else {
      Alert.alert('Capsule scellée 🔒', `Celle de ${personne.nom} se révélera ${personne.statut.toLowerCase()}.`);
    }
  };

  return (
    <Pressable onPress={onPressCarte} style={({ pressed }) => [styles.carte, pressed && styles.appui]}>
      <Image source={{ uri: personne.photo }} style={styles.photo} />

      <View style={styles.infos}>
        <Text style={styles.nom}>{personne.nom}</Text>

        <View style={styles.ligneStatut}>
          {!personne.ouverte && (
            <Ionicons name="lock-closed-outline" size={14} color="#6B6685" />
          )}
          <Text style={[styles.statut, personne.ouverte && styles.statutOuvert]}>
            {personne.statut}
          </Text>
        </View>
      </View>

      {/* Miniature de la capsule, avec ▶ si elle est ouverte */}
      <ImageBackground
        source={{ uri: personne.miniature }}
        style={styles.miniature}
        imageStyle={{ borderRadius: 16 }}
      >
        {personne.ouverte && (
          <View style={styles.play}>
            <Ionicons name="play" size={18} color="#fff" />
          </View>
        )}
      </ImageBackground>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  carte: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 24,
    padding: 10,
    paddingLeft: 14,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.8)',
  },
  appui: {
    transform: [{ scale: 0.98 }],
  },
  photo: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#D3CAF7',
  },
  infos: {
    flex: 1,
    gap: 4,
  },
  nom: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E1B4B',
  },
  ligneStatut: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statut: {
    fontSize: 14,
    color: '#6B6685',
  },
  statutOuvert: {
    color: '#7D61F4',
    fontWeight: '600',
  },
  miniature: {
    width: 76,
    height: 76,
    justifyContent: 'center',
    alignItems: 'center',
  },
  play: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.35)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
