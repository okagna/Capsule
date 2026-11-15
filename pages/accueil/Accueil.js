import { useState } from 'react';
import { StyleSheet, Text, View, useWindowDimensions, Pressable, Alert } from 'react-native';

export default function Accueil() {

  const { width, height } = useWindowDimensions();

  // ce qui se passe quand on appuie sur le +
  const onPress = () => {
    Alert.alert("Capsule", "Bouton + appuyé !");
  };


  return (

    
    <View style={styles.container}>

      <View style={[styles.containertitre, { marginTop: height * 0.08 }]}>
      <Text style={styles.titre}>Capsule</Text>
    </View>


<Pressable
        onPress={onPress}
        onHoverIn={() => setHovered(true)}
        onHoverOut={() => setHovered(false)}
        style={({ pressed }) => [
          styles.containerplus,
          pressed && styles.appui,
        ]}
      >
        <Text style={styles.plus}>＋</Text>
      </Pressable>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center'
  },

  titre: {
    color: '#0000',
    fontSize: 38,
    fontWeight: 'bold',
  },

  containertitre:{
    alignItems:'center',
  },


  plus:{
    color:'#ffff',
    fontSize:40
  },

  containerplus:{
  position: 'absolute',   // 👈 le place par rapport à l'écran
  bottom: '8%',           // 👈 à 8 % du bas
  alignSelf: 'center',    // 👈 centré horizontalement

  width: 80,
  height: 80,
  borderRadius: 999,
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: "0 5px 15px rgba(123, 96, 246, 0.45)",
  backgroundColor: "#7D61F4",        
},


appui: {
  backgroundColor: "#6F57F3",      // violet plus foncé
  transform: [{ scale: 0.95 }],    // rétrécit un peu
},
  
});
