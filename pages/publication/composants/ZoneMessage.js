import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function ZoneMessage() {
  const [message, setMessage] = useState('');

  return (
    <View style={styles.zone}>
      <Text style={styles.label}>Message</Text>
      <TextInput
        style={styles.champ}
        value={message}
        onChangeText={setMessage}
        placeholder="Écris un mot qui accompagnera ta capsule…"
        placeholderTextColor="#8A85A3"
        multiline
        textAlignVertical="top"
        maxLength={300}
      />
      <Text style={styles.compteur}>{message.length}/300</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  zone: { 
    gap: 10, 
    bottom:150
},

  label: { 
    fontSize: 14, 
    fontWeight: '600', 
    color: '#1E1B4B',

  },


  champ: {
    height: 100,
    borderRadius: 20,
    backgroundColor: '#fff',
    padding: 14,
    fontSize: 15,
    color: '#1E1B4B',
  },
  compteur: { alignSelf: 'flex-end', fontSize: 12, color: '#5B5675' },
});