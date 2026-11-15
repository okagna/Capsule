import { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

const OPTIONS = [
  { id: 'moi', label: 'Moi' },
  { id: 'ami', label: 'Un ami' },
  { id: 'plusieurs', label: 'Plusieurs' },
];

export default function ZonePourQui() {
  const [choix, setChoix] = useState('ami');

  return (
    <View style={styles.zone}>
      <Text style={styles.label}>Pour qui ?</Text>
      <View style={styles.ligne}>
        {OPTIONS.map((option) => {
          const actif = choix === option.id;
          return (
            <Pressable
              key={option.id}
              onPress={() => setChoix(option.id)}
              style={[styles.bouton, actif && styles.boutonActif]}
            >
              <Text style={[styles.texte, actif && styles.texteActif]}>
                {option.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  zone: { 
    gap: 10 
},

  label: { 
    bottom:160,
    fontSize: 14, 
    fontWeight: '600', 
    color: '#1E1B4B' 
},

  ligne: { 
    bottom:150,
    flexDirection: 'row', 
    gap: 8 
},

  bouton: {
    height: 44,
    paddingHorizontal: 18,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#D3CAF7',
    backgroundColor: '#fff',
    justifyContent: 'center',
    
  },

  boutonActif: { backgroundColor: '#6E4FE8', borderColor: '#6E4FE8' },
  texte: { fontSize: 14, fontWeight: '500', color: '#1E1B4B' },
  texteActif: { color: '#fff', fontWeight: '600' },
});