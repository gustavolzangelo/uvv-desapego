import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import { AppForm, AppFormPicker, SubmitButton } from '../components/forms';
import Screen from '../components/Screen';
import GlobalContext from '../contexts/globalContext';
import { ACCOUNT_SCREEN } from '../config/messages';

const validationSchema = Yup.object().shape({
  language: Yup.object().required().label('Language'),
});

const languagesLabel = [
  {
    label: { EN_US: 'Portuguese (Brazil)', PT_BR: 'Português (Brasil)', ES: 'Portugués (Brasil)' },
    value: 'PT_BR',
  },
  {
    label: {
      EN_US: 'English (United States)',
      PT_BR: 'Inglês (Estados Unidos)',
      ES: 'Inglés (Estados Unidos)',
    },
    value: 'EN_US',
  },
  {
    label: { EN_US: 'Spanish', PT_BR: 'Espanhol', ES: 'Español' },
    value: 'ES',
  },
];

function LanguageScreen({ navigation }) {
  const { language, setLanguage } = useContext(GlobalContext);
  const handleSubmit = ({ language }) => {
    navigation.navigate('Account');
    setLanguage(language.value);
  };
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          language: languagesLabel[0],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
        <AppFormPicker
          items={languagesLabel}
          name="language"
          placeholder={ACCOUNT_SCREEN[language]['APP_FORM_FIELD_CATEGORY']}
          width={'90%'}
        />
        <SubmitButton title={ACCOUNT_SCREEN[language]['APP_FORM_SUBMIT_POST']} />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default LanguageScreen;
