import { StyleSheet, View, Pressable } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

const ONGLETS = [
  { id: 'capsules', lib: AntDesign, icone: 'cloud' },
  { id: 'amis', lib: Ionicons, icone: 'people' },
  { id: 'creer', lib: Ionicons, icone: 'add' },
];

export default function BarreNav({ actif, onChange }) {
  return (
    <View style={styles.barre}>
      {ONGLETS.map((onglet) => {
        const estActif = actif === onglet.id;
        const Icone = onglet.lib;

        return (
          <Pressable
            key={onglet.id}
            onPress={() => onChange(onglet.id)}
            style={({ pressed }) => [
              styles.bouton,
              estActif && styles.boutonActif,
              pressed && styles.appui,
            ]}
          >
            <Icone
              name={onglet.icone}
              size={28}
              color={estActif ? '#fff' : '#7D61F4'}
            />
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  barre: {
    position: 'absolute',
    bottom: '10%',
    alignSelf: 'center',
    flexDirection: 'row',
    gap: '20%',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 999,
    boxShadow: '0 5px 20px rgba(123, 96, 246, 0.25)',
  },
  bouton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boutonActif: {
    backgroundColor: '#7D61F4',
    boxShadow: '0 5px 15px rgba(123, 96, 246, 0.45)',
  },
  appui: {
    transform: [{ scale: 0.92 }],
  },
});
