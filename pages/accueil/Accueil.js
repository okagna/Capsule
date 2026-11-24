import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Alert, Image, ScrollView, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CarteProchaine from './composants/CarteProchaine';
import { estOuverte } from '../../utils/dates';
import { CAPSULES_PARTAGEES } from '../../donnees/capsulesPartagees';

export default function Accueil({ onOuvrirAmis, onCreer }) {
  const { width } = useWindowDimensions();
  const [page, setPage] = useState(0);

  const largeurCarte = width - 80;
  const espace = 16;

  // Capsules des personnes que tu suis, encore fermées,
  // de la plus proche à la plus lointaine
  const aVenir = CAPSULES_PARTAGEES
    .filter((c) => !estOuverte(c.ouverture))
    .sort((a, b) => a.ouverture - b.ouverture);

  const onPressparametre = () => {
    Alert.alert("Bouton Paramètre appuyé");
  };

  const onPressprofil = () => {
    Alert.alert("Bouton Profil appuyé");
  };

  // Pendant qu'on fait glisser : quelle carte est au centre ?
  const onGlisse = (e) => {
    const x = e.nativeEvent.contentOffset.x;
    const index = Math.round(x / (largeurCarte + espace));
    // On reste entre 0 et le nombre de cartes - 1
    const indexValide = Math.max(0, Math.min(index, aVenir.length - 1));
    if (indexValide !== page) {
      setPage(indexValide);
    }
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

      {/* Cartes des prochaines capsules */}
      <View style={styles.zoneCartes}>
        {aVenir.length === 0 ? (
          <View style={[styles.vide, { width: largeurCarte, height: largeurCarte }]}>
            <Ionicons name="hourglass-outline" size={48} color="#A796F0" />
            <Text style={styles.texteVide}>Aucune capsule en attente</Text>
            <Text style={styles.sousTexteVide}>Appuie sur + pour en créer une</Text>
          </View>
        ) : (
          <ScrollView
            horizontal
            style={{ flexGrow: 0, width: '100%' }}
            showsHorizontalScrollIndicator={false}
            snapToInterval={largeurCarte + espace}
            decelerationRate="fast"
            onScroll={onGlisse}
            scrollEventThrottle={16}
            contentContainerStyle={{ paddingHorizontal: 40, gap: espace }}
          >
            {aVenir.map((c, index) => (
              <CarteProchaine
                key={c.id}
                capsule={c}
                largeur={largeurCarte}
                etiquette={index === 0 ? 'Prochaine capsule' : 'Ensuite'}
              />
            ))}
          </ScrollView>
        )}

        {/* Points sous les cartes : montrent quelle carte est affichée */}
        {aVenir.length > 0 && (
          <View style={styles.points}>
            {aVenir.map((c, index) => (
              <View key={c.id} style={[styles.point, index === page && styles.pointActif]} />
            ))}
          </View>
        )}

        {/* Bouton amis posé sur le coin de la carte */}
        <Pressable
          onPress={onOuvrirAmis}
          style={({ pressed }) => [styles.boutonAmis, pressed && styles.appui]}
        >
          <Ionicons name="people-outline" size={28} color="#fff" />
        </Pressable>
      </View>

      {/* Gros bouton + en bas */}
      <Pressable
        onPress={onCreer}
        style={({ pressed }) => [styles.boutonPlus, pressed && styles.appui]}
      >
        <Ionicons name="add" size={44} color="#fff" />
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEAFB',
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

  zoneCartes: {
    width: '100%',
    marginTop: 90,
    alignItems: 'center',
  },
  boutonAmis: {
    position: 'absolute',
    top: -10,
    right: 22,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#8B6CF6',
    borderWidth: 4,
    borderColor: '#EEEAFB',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 6px 16px rgba(123, 96, 246, 0.4)',
  },
  appui: {
    transform: [{ scale: 0.94 }],
  },

  vide: {
    marginTop: 18,
    borderRadius: 32,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#C9BDF7',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  texteVide: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3A2E7A',
  },
  sousTexteVide: {
    fontSize: 14,
    color: '#5B5675',
  },

  points: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 28,
  },
  point: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#C2B5F5',
  },
  pointActif: {
    width: 10,
    backgroundColor: '#7D61F4',
  },

  boutonPlus: {
    position: 'absolute',
    bottom: '7%',
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: '#7D61F4',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 10px 25px rgba(123, 96, 246, 0.5)',
  },
});
