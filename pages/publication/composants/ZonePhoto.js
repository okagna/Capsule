import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ZonePhoto() {

  const onpresszonephoto=() => {
    Alert.alert("zone photo appuyé");
  };

  
  const onpressretour=() => {
    Alert.alert("retour nappuyé");
  };


  return (
    <View style={styles.container}>

      

      {/* En-tête */}
      <View style={styles.entete}>
        <Pressable onPress={onpressretour} style={styles.boutonRetour}>
          <Ionicons name="chevron-back" size={22} color="#1E1B4B" />
        </Pressable>


        <View style={{ width: 44 }} />
      </View>

      {/* Zone photo */}
      <Pressable onPress={onpresszonephoto} style={styles.zonePhoto}>
        <View style={styles.rondIcone}>
          <Ionicons name="image-outline" size={28} color="#6E4FE8" />
        </View>
        <Text style={styles.textePhoto}>Ajouter une photo ou une vidéo</Text>
        <Text style={styles.sousTexte}>Ce que tu veux revoir plus tard</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  entete: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  boutonRetour: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titre: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E1B4B',
  },

  zonePhoto: {
    marginTop: 20,
    height: 180,
    borderRadius: 28,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#A796F0',
    backgroundColor: '#F7F5FE',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  rondIcone: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E2DBFB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textePhoto: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E1B4B',
  },
  sousTexte: {
    fontSize: 13,
    color: '#5B5675',
  },
});