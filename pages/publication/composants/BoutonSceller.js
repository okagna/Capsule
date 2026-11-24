import { StyleSheet, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BoutonSceller({ onPress }) {
  return (
    <Pressable style={styles.bouton} onPress={onPress}>
      <Text style={styles.texte}>Continuer</Text>
      <Ionicons name="arrow-forward" size={22} color="#fff" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  bouton: {
    height: 60,
    borderRadius: 30,
    backgroundColor: '#6E4FE8',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    shadowColor: '#6E4FE8',
    shadowOpacity: 0.35,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
    bottom:'45%'
  },
  texte: { fontSize: 17, fontWeight: '700', color: '#fff' },
});