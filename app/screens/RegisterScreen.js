import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import GlobalContext from '../contexts/globalContext';
import { REGISTER_SCREEN } from '../config/messages';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  surname: Yup.string().required().label('Surname'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

function RegisterScreen() {
  const { language } = useContext(GlobalContext);

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}>
        <AppFormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder={REGISTER_SCREEN[language]['APP_FORM_FIELD_FIRST_NAME']}
        />
        <AppFormField
          autoCorrect={false}
          icon="account"
          name="surname"
          placeholder={REGISTER_SCREEN[language]['APP_FORM_FIELD_LAST_NAME']}
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder={REGISTER_SCREEN[language]['APP_FORM_FIELD_EMAIL']}
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder={REGISTER_SCREEN[language]['APP_FORM_FIELD_PASSWORD']}
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title={REGISTER_SCREEN[language]['APP_FORM_SUBMIT_REGISTER']} />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
