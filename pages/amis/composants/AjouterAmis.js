import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput, Image, Alert, Share, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Fausses demandes d'amis pour l'instant
const DEMANDES_DEPART = [
  { id: '1', nom: 'Leo', photo: 'https://i.pravatar.cc/150?img=59' },
  { id: '2', nom: 'Maya', photo: 'https://i.pravatar.cc/150?img=44' },
];

export default function AjouterAmis({ onRetour }) {
  const [recherche, setRecherche] = useState('');
  const [demandes, setDemandes] = useState(DEMANDES_DEPART);

  // Retire une demande de la liste
  const retirer = (id) => {
    setDemandes(demandes.filter((d) => d.id !== id));
  };

  const accepter = (demande) => {
    retirer(demande.id);
    Alert.alert('Ami ajouté', `${demande.nom} fait maintenant partie de tes proches.`);
  };

  const partagerLien = async () => {
    await Share.share({
      message: 'Rejoins-moi sur Capsule ⏳ : https://capsule.app/invite/moi',
    });
  };

  const scannerQR = () => {
    Alert.alert('Scanner un QR code', 'Cette fonction arrive bientôt.');
  };

  const lancerRecherche = () => {
    if (recherche.trim() === '') return;
    Alert.alert('Recherche', `Aucun utilisateur trouvé pour « ${recherche} » (pas encore de serveur).`);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contenu}>
      <Pressable onPress={onRetour} style={styles.retour} hitSlop={10}>
        <Ionicons name="chevron-back" size={26} color="#1E1B4B" />
      </Pressable>

      <Text style={styles.titre}>Ajouter des amis</Text>
      <Text style={styles.sousTitre}>Rejoins tes proches sur Capsule</Text>

      {/* Recherche */}
      <View style={styles.recherche}>
        <Ionicons name="search-outline" size={20} color="#5B5675" />
        <TextInput
          style={styles.champ}
          value={recherche}
          onChangeText={setRecherche}
          onSubmitEditing={lancerRecherche}
          placeholder="Rechercher un utilisateur"
          placeholderTextColor="#8A85A3"
          returnKeyType="search"
          autoCapitalize="none"
        />
      </View>

      {/* Actions */}
      <View style={styles.bloc}>
        <Pressable onPress={scannerQR} style={({ pressed }) => [styles.action, pressed && styles.appui]}>
          <Ionicons name="qr-code-outline" size={24} color="#7D61F4" />
          <Text style={styles.texteAction}>Scanner un QR code</Text>
          <Ionicons name="chevron-forward" size={20} color="#5B5675" />
        </Pressable>

        <View style={styles.separateur} />

        <Pressable onPress={partagerLien} style={({ pressed }) => [styles.action, pressed && styles.appui]}>
          <Ionicons name="link-outline" size={24} color="#7D61F4" />
          <Text style={styles.texteAction}>Partager mon lien d'invitation</Text>
          <Ionicons name="chevron-forward" size={20} color="#5B5675" />
        </Pressable>
      </View>

      {/* Demandes */}
      <Text style={styles.titreSection}>Demandes ({demandes.length})</Text>

      {demandes.length === 0 ? (
        <Text style={styles.aucune}>Aucune demande pour l'instant.</Text>
      ) : (
        <View style={styles.listeDemandes}>
          {demandes.map((d) => (
            <View key={d.id} style={styles.demande}>
              <Image source={{ uri: d.photo }} style={styles.photo} />

              <View style={{ flex: 1 }}>
                <Text style={styles.nom}>{d.nom}</Text>
                <Text style={styles.texteDemande}>souhaite t'ajouter</Text>
              </View>

              <Pressable onPress={() => retirer(d.id)} style={styles.boutonRefuser} hitSlop={6}>
                <Ionicons name="close" size={22} color="#5B5675" />
              </Pressable>

              <Pressable onPress={() => accepter(d)} style={styles.boutonAccepter} hitSlop={6}>
                <Ionicons name="checkmark" size={22} color="#fff" />
              </Pressable>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEAFB',
  },
  contenu: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 160,
  },
  retour: {
    width: 44,
    height: 44,
    justifyContent: 'center',
  },
  titre: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1E1B4B',
    marginTop: 8,
  },
  sousTitre: {
    fontSize: 16,
    color: '#5B5675',
    marginTop: 6,
    marginBottom: 24,
  },
  recherche: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    height: 56,
    paddingHorizontal: 18,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.7)',
  },
  champ: {
    flex: 1,
    fontSize: 16,
    color: '#1E1B4B',
  },
  bloc: {
    marginTop: 20,
    borderRadius: 24,
    backgroundColor: 'rgba(255,255,255,0.7)',
    overflow: 'hidden',
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingHorizontal: 18,
    height: 64,
  },
  texteAction: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#1E1B4B',
  },
  separateur: {
    height: 1,
    marginHorizontal: 18,
    backgroundColor: 'rgba(167, 150, 240, 0.25)',
  },
  appui: {
    opacity: 0.6,
  },
  titreSection: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E1B4B',
    marginTop: 30,
    marginBottom: 12,
  },
  aucune: {
    fontSize: 15,
    color: '#5B5675',
  },
  listeDemandes: {
    gap: 10,
  },
  demande: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 12,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.7)',
  },
  photo: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#D3CAF7',
  },
  nom: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E1B4B',
  },
  texteDemande: {
    fontSize: 13,
    color: '#5B5675',
    marginTop: 2,
  },
  boutonRefuser: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: 'rgba(255,255,255,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boutonAccepter: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#7D61F4',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
