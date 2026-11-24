import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CarteCapsule from './CarteCapsule';

export default function MesCapsules({ capsules, onVoirTout }) {
  return (
    <View style={styles.zone}>
      {/* Titre + lien "Voir tout" */}
      <View style={styles.entete}>
        <Text style={styles.titre}>Mes Capsules</Text>
        <Pressable onPress={onVoirTout} style={styles.voirTout} hitSlop={10}>
          <Text style={styles.texteVoirTout}>Voir tout</Text>
          <Ionicons name="chevron-forward" size={16} color="#7D61F4" />
        </Pressable>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.liste}
      >
        {capsules.map((c) => (
          <CarteCapsule key={c.id} capsule={c} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  zone: {
    gap: 10,
  },
  entete: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titre: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E1B4B',
  },
  voirTout: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  texteVoirTout: {
    fontSize: 14,
    fontWeight: '600',
    color: '#7D61F4',
  },
  liste: {
    gap: 10,
  },
});
