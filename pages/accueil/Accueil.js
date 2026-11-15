import { StyleSheet, Text, View, Pressable, Alert, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export default function Accueil() {

  const onPressparametre = () => {
    Alert.alert("Bouton Paramètre appuyé");
  };

  const onPressprofil = () => {
    Alert.alert("Bouton Profil appuyé");
  };

  return (
    <View style={styles.container}>

      {/* Barre du haut */}
      <View style={styles.header}>
        <Pressable onPress={onPressprofil} style={[styles.cote, styles.profil]}>
          <Ionicons name="person-circle-outline" size={40} color="#2d2b32" />
        </Pressable>

        <View style={styles.containertitre}>
          <Image source={require('../../assets/logo.png')} style={styles.logo} resizeMode="contain" />
          <Text style={styles.titre}>Capsule</Text>
        </View>

        <Pressable onPress={onPressparametre} style={[styles.cote, styles.parametres]}>
          <Ionicons name="settings-outline" size={28} color="#2d2b32" />
        </Pressable>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: '17%',
  },
  cote: {
    width: 40,
  },
  profil: {
    alignItems: 'flex-start',
  },
  parametres: {
    alignItems: 'flex-end',
  },
  containertitre: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
  },
  titre: {
    color: '#000',
    fontSize: 35,
    fontWeight: 'bold',
  },
});