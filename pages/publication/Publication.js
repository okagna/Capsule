import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ZonePhoto from './composants/ZonePhoto';
import MesCapsules from './composants/MesCapsules';
import BoutonSceller from './composants/BoutonSceller';
import ChoixDuree from './composants/ChoixDuree';
import Confirmation from './composants/Confirmation';
import ListeCapsules from './composants/ListeCapsules';

export default function Publication({ capsules, onAjouter }) {
  // L'étape affichée : 'creer' → 'duree' → 'confirmation' → retour à 'creer'
  const [etape, setEtape] = useState('creer');
  const [duree, setDuree] = useState('48 h');

  if (etape === 'liste') {
    return <ListeCapsules capsules={capsules} onRetour={() => setEtape('creer')} />;
  }

  if (etape === 'duree') {
    return (
      <ChoixDuree
        duree={duree}
        onChange={setDuree}
        onRetour={() => setEtape('creer')}
        onSuivant={() => setEtape('confirmation')}
      />
    );
  }

  if (etape === 'confirmation') {
    return (
      <Confirmation
        duree={duree}
        onValider={() => {
          onAjouter(duree);
          setEtape('creer');
        }}
      />
    );
  }

  // Étape 'creer' : la photo + la petite zone Mes Capsules + le bouton
  return (
    <View style={styles.container}>
      <ZonePhoto />
      <View style={{ flex: 1 }} />
      <MesCapsules capsules={capsules} onVoirTout={() => setEtape('liste')} />
      <BoutonSceller onPress={() => setEtape('duree')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEAFB',
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 180,
    gap: 22,
  },
});
