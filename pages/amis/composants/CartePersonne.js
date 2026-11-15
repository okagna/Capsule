import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CartePersonne({ personne }) {
  return (
    <Pressable style={({ pressed }) => [styles.carte, pressed && styles.appui]}>
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

      <Ionicons name="chevron-forward" size={22} color="#6B6685" />
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
    padding: 14,
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
});
