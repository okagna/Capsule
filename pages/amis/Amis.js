import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CartePersonne from './composants/CartePersonne';
import { CAPSULES_PARTAGEES } from '../../donnees/capsulesPartagees';
import { estOuverte, tempsRestant } from '../../utils/dates';


export default function Amis({ onAjouter }) {
  // On calcule le statut de chaque capsule à partir de sa date d'ouverture
  const personnes = [...CAPSULES_PARTAGEES]
    .sort((a, b) => a.ouverture - b.ouverture)
    .map((c) => {
      const ouverte = estOuverte(c.ouverture);
      return {
        ...c,
        ouverte,
        statut: ouverte ? "Se révèle aujourd'hui" : tempsRestant(c.ouverture),
      };
    });

  return (
    <View style={styles.container}>
      <View style={styles.entete}>
        <View style={{ flex: 1 }}>
          <Text style={styles.titre}>Capsules partagées</Text>
          <Text style={styles.sousTitre}>Celles des personnes que tu suis</Text>
        </View>

        <Pressable
          onPress={onAjouter}
          style={({ pressed }) => [styles.boutonAjout, pressed && styles.appui]}
        >
          <Ionicons name="person-add-outline" size={24} color="#7D61F4" />
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.liste} showsVerticalScrollIndicator={false}>
        {personnes.map((p) => (
          <CartePersonne key={p.id} personne={p} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEAFB',
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  entete: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 24,
  },
  titre: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E1B4B',
  },
  sousTitre: {
    fontSize: 15,
    color: '#5B5675',
    marginTop: 6,
  },
  boutonAjout: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 5px 16px rgba(123, 96, 246, 0.25)',
  },
  appui: {
    transform: [{ scale: 0.94 }],
  },
  liste: {
    gap: 14,
    paddingBottom: 160,
  },
});
