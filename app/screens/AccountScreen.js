import React, { useContext } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import GlobalContext from '../contexts/globalContext';
import Icon from '../components/Icon';
import { ListItem, ListItemSeparator } from '../components/lists';
import Screen from '../components/Screen';
import colors from '../config/colors';

const menuItems = [
  { title: 'My Listings', icon: { name: 'format-list-bulleted', backgroundColor: colors.primary } },
  {
    title: 'My Messages',
    icon: { name: 'email', backgroundColor: colors.secondary },
    targetScreen: 'Messages',
  },
];

function AccountScreen({ navigation }) {
  const context = useContext(GlobalContext);
  console.log(context);

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Mosh Hamedani"
          subTitle="programmingwithmosh@gmail.com"
          image={require('../assets/mosh.jpg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={() => {
          context.setSigned(false);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default AccountScreen;
