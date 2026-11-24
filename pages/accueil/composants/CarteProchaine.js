import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { tempsRestant, formaterDate } from '../../../utils/dates';

export default function CarteProchaine({ capsule, etiquette, largeur }) {
  return (
    <View style={{ width: largeur, paddingTop: 18 }}>
      {/* Carte derrière, pour l'effet de pile */}
      <View style={styles.derriere} />

      <ImageBackground
        source={{ uri: capsule.miniature }}
        style={[styles.carte, { height: largeur }]}
        imageStyle={{ borderRadius: 32 }}
      >
        {/* Voile violet par-dessus la photo */}
        <View style={styles.voile} />

        <View style={styles.pastille}>
          <Text style={styles.textePastille}>{etiquette}</Text>
        </View>

        <Text style={styles.temps}>{tempsRestant(capsule.ouverture)}</Text>
        <Text style={styles.date}>{formaterDate(capsule.ouverture)}</Text>

        {/* À qui appartient la capsule */}
        <View style={styles.auteur}>
          <Image source={{ uri: capsule.photo }} style={styles.photo} />
          <Text style={styles.nom}>{capsule.nom}</Text>
        </View>

        <View style={styles.cadenas}>
          <Ionicons name="lock-closed-outline" size={22} color="#fff" />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  derriere: {
    position: 'absolute',
    top: 0,
    left: '6%',
    right: '6%',
    height: 60,
    borderRadius: 28,
    backgroundColor: '#D9D0FA',
  },
  carte: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    boxShadow: '0 12px 30px rgba(123, 96, 246, 0.25)',
  },
  voile: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 32,
    backgroundColor: 'rgba(124, 92, 240, 0.25)',
  },
  pastille: {
    backgroundColor: 'rgba(255,255,255,0.55)',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 999,
  },
  textePastille: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2E2560',
  },
  temps: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 18,
  },
  date: {
    fontSize: 16,
    color: '#fff',
    marginTop: 6,
  },
  auteur: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 16,
  },
  photo: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: '#fff',
  },
  nom: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
  cadenas: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: 'rgba(255,255,255,0.25)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});
