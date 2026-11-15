import { useState } from 'react';
import { View } from 'react-native';
import Accueil from './pages/accueil/Accueil';
import Amis from './pages/amis/Amis';
import Publication from './pages/publication/Publication';
import BarreNav from './pages/BarreNav/BarreNav';

export default function App() {
  const [onglet, setOnglet] = useState('capsules');

  return (
    <View style={{ flex: 1 }}>
      {onglet === 'capsules' && <Accueil />}
      {onglet === 'amis' && <Amis />}
      {onglet === 'creer' && <Publication />}

      <BarreNav actif={onglet} onChange={setOnglet} />
    </View>
  );
}
