import React, { useContext } from 'react';
import { StyleSheet, Image } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppFormField, AppForm, SubmitButton } from '../components/forms';
import GlobalContext from '../contexts/globalContext';
import { LOGIN_SCREEN } from '../config/messages';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

function LoginScreen() {
  const { setSigned, language } = useContext(GlobalContext);

  const handleSubmit = () => setSigned(true);

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />

      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          name="email"
          icon="email"
          placeholder={LOGIN_SCREEN[language]['APP_FORM_FIELD_EMAIL']}
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder={LOGIN_SCREEN[language]['APP_FORM_FIELD_PASSWORD']}
          secureTextEntry
          textContentType="password"
        />

        <SubmitButton title={LOGIN_SCREEN[language]['APP_FORM_FIELD_LOGIN']} />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
