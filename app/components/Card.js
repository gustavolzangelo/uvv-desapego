import React from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';

function Card({ title, subTitle, image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        {console.log(subTitle)}
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subtitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden',
  },
  detailsContainer: {
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    marginBottom: 7,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
});

export default Card;
