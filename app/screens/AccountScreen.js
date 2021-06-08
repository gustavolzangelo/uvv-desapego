import React, { useContext } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import GlobalContext from '../contexts/globalContext';
import Icon from '../components/Icon';
import { ListItem, ListItemSeparator } from '../components/lists';
import Screen from '../components/Screen';
import colors from '../config/colors';
import { ACCOUNT_SCREEN } from '../config/messages';

const menuItems = [
  {
    id: 1,
    title: { EN_US: 'My messages', PT_BR: 'Minhas mensagens', ES: 'Mis mensajes' },
    icon: { name: 'email', backgroundColor: colors.secondary },
    targetScreen: 'Messages',
  },
  {
    id: 2,
    title: { EN_US: 'Languages', PT_BR: 'Idiomas', ES: 'Idiomas' },
    icon: { name: 'email', backgroundColor: colors.secondary },
    targetScreen: 'Languages',
  },
];

function AccountScreen({ navigation }) {
  const { language, setSigned } = useContext(GlobalContext);

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Gustavo Angelo"
          subTitle="gustavolz.angelo@gmail.com"
          image={require('../assets/mosh.jpg')}
        />
      </View>
      <View style={styles.container}>
        {console.log(language)}
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.id.toString()}
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
        title={ACCOUNT_SCREEN[language]['APP_FORM_SUBMIT_LOGOUT']}
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={() => {
          setSigned(false);
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
