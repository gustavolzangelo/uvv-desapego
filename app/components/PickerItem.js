import React, { useContext } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import AppText from './AppText';
import GlobalContext from '../contexts/globalContext';

function PickerItem({ item, onPress }) {
  const { language } = useContext(GlobalContext);

  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label[language]}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default PickerItem;
