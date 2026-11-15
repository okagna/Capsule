import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CartePersonne from './composants/CartePersonne';

// Fausses données pour l'instant (plus tard : elles viendront d'une base de données)
const PERSONNES = [
  { id: '1', nom: 'Lucy', statut: "Se révèle aujourd'hui", ouverte: true, photo: 'https://i.pravatar.cc/150?img=47' },
  { id: '2', nom: 'Ash', statut: 'Dans 2 jours', ouverte: false, photo: 'https://i.pravatar.cc/150?img=12' },
  { id: '3', nom: 'Kaeleen', statut: 'Dans 5 jours', ouverte: false, photo: 'https://i.pravatar.cc/150?img=32' },
  { id: '4', nom: 'Saint', statut: 'Dans 7 jours', ouverte: false, photo: 'https://i.pravatar.cc/150?img=15' },
];

export default function Amis() {
  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Appointments</Text>
      <Text style={styles.sousTitre}>Les personnes que tu attends.</Text>

      <ScrollView contentContainerStyle={styles.liste} showsVerticalScrollIndicator={false}>
        {PERSONNES.map((p) => (
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
  titre: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1E1B4B',
  },
  sousTitre: {
    fontSize: 16,
    color: '#5B5675',
    marginTop: 6,
    marginBottom: 24,
  },
  liste: {
    gap: 14,
    paddingBottom: 140,
  },
});
