import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CarteCapsule({ capsule }) {
  return (
    <View style={styles.ligne}>
      <ImageBackground
        source={{ uri: 'https://picsum.photos/seed/coucher/200/200' }}
        style={styles.miniature}
        imageStyle={{ borderRadius: 14 }}
      >
        <View style={styles.play}>
          <Ionicons name="play" size={14} color="#fff" />
        </View>
      </ImageBackground>

      <Text style={styles.duree}>{capsule.duree}</Text>

      <Ionicons name="lock-closed-outline" size={20} color="#A796F0" />
    </View>
  );
}

const styles = StyleSheet.create({
  ligne: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEAFB',
  },
  miniature: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  play: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.35)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  duree: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    color: '#3A2E7A',
  },
});
