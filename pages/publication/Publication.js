import { StyleSheet, View } from 'react-native';
import ZonePhoto from './composants/ZonePhoto';
import ZonePourQui from './composants/ZonePourQui';
import ZoneMessage from './composants/ZoneMessage';
import ZoneDate from './composants/ZoneDate';
import BoutonSceller from './composants/BoutonSceller';

export default function Publication() {
  return (
    <View style={styles.container}>
      <ZonePhoto />
      <ZonePourQui />
      <ZoneMessage />
      <ZoneDate />
      <View style={{ flex: 1 }} />
      <BoutonSceller />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEAFB',
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 130,
    gap: 22,
  },
});