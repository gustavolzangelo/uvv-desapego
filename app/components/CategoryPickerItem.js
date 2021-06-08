import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from './AppText';
import Icon from './Icon';
import GlobalContext from '../contexts/globalContext';

function CategoryPickerItem({ item, onPress }) {
  const { language } = useContext(GlobalContext);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon style={styles.container} backgroundColor="blue" name={item.icon} size={80} />
        <AppText style={styles.label}>{item.label[language]}</AppText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: 'center',
    width: '33%',
  },
  label: {
    marginTop: 5,
    textAlign: 'center',
  },
});
export default CategoryPickerItem;
