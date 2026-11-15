import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ZoneDate() {
  return (
    <View style={styles.zone}>
      <Text style={styles.label}>Elle s'ouvrira le</Text>
      <Pressable style={styles.ligne}>
        <Ionicons name="calendar-outline" size={22} color="#6E4FE8" />
        <Text style={styles.date}>15 novembre 2027</Text>
        <Ionicons name="chevron-forward" size={20} color="#5B5675" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  zone: { gap: 10 },
  label: { fontSize: 14, fontWeight: '600', color: '#1E1B4B' },
  ligne: {
    height: 56,
    borderRadius: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  date: { flex: 1, fontSize: 15, fontWeight: '500', color: '#1E1B4B' },
});