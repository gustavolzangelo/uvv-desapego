import React, { useContext } from 'react';
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';
import AppButton from '../components/AppButton';
import GlobalContext from '../contexts/globalContext';
import { WELCOME_SCREEN } from '../config/messages';

function WelcomeScreen({ navigation }) {
  const { language } = useContext(GlobalContext);
  return (
    <ImageBackground
      style={styles.background}
      blurRadius={10}
      source={require('../assets/background.jpg')}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.tagLine}>{WELCOME_SCREEN[language]['LOGO_VIEW']}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title={WELCOME_SCREEN[language]['APP_BUTTON_LOGIN_TITLE']}
          onPress={() => navigation.navigate('Login')}
        />
        <AppButton
          title={WELCOME_SCREEN[language]['APP_BUTTON_REGISTER_TITLE']}
          color="secondary"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonsContainer: {
    padding: 20,
    width: '100%',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  tagLine: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
