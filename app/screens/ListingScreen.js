import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';

const listings = [
  {
    id: 1,
    title: 'Red jacket for sal',
    price: 100,
    image: require('../assets/jacket-red.jpg'),
  },
  {
    id: 2,
    title: 'Couch in great condition',
    price: 20,
    image: require('../assets/couch.jpg'),
  },
];

function ListingScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card title={item.title} subTitle={'R$' + item.price} image={item.image} />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingScreen;
