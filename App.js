import { useState } from 'react';
import { View } from 'react-native';
import Accueil from './pages/accueil/Accueil';
import Amis from './pages/amis/Amis';
import AjouterAmis from './pages/amis/composants/AjouterAmis';
import Publication from './pages/publication/Publication';
import BarreNav from './pages/BarreNav/BarreNav';
import { calculerOuverture } from './utils/dates';

export default function App() {
  const [onglet, setOnglet] = useState('capsules');

  // La liste des capsules (fausses données de départ)
  // Chaque capsule retient sa durée ET sa vraie date d'ouverture
  const [capsules, setCapsules] = useState([
    { id: '1', duree: '48 h', ouverture: calculerOuverture('48 h') },
    { id: '2', duree: '7 j', ouverture: calculerOuverture('7 j') },
    { id: '3', duree: '1 mois', ouverture: calculerOuverture('1 mois') },
  ]);

  // Appelée quand on valide une nouvelle capsule
  const ajouterCapsule = (duree) => {
    const nouvelle = {
      id: Date.now().toString(),
      duree,
      ouverture: calculerOuverture(duree),
    };
    setCapsules([nouvelle, ...capsules]);
  };

  return (
    <View style={{ flex: 1 }}>
      {onglet === 'capsules' && (
        <Accueil
          onOuvrirAmis={() => setOnglet('amis')}
          onCreer={() => setOnglet('creer')}
        />
      )}
      {onglet === 'amis' && <Amis onAjouter={() => setOnglet('ajouterAmis')} />}
      {onglet === 'ajouterAmis' && <AjouterAmis onRetour={() => setOnglet('amis')} />}
      {onglet === 'creer' && <Publication capsules={capsules} onAjouter={ajouterCapsule} />}

      {/* Pas de barre sur l'accueil (il a son bouton +) ni sur "Ajouter des amis" */}
      {onglet !== 'capsules' && onglet !== 'ajouterAmis' && (
        <BarreNav actif={onglet} onChange={setOnglet} />
      )}
    </View>
  );
}
