import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import { AppForm, AppFormField, AppFormPicker, SubmitButton } from '../components/forms';
import Screen from '../components/Screen';
import GlobalContext from '../contexts/globalContext';
import { LISTING_EDIT_SCREEN } from '../config/messages';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
});

const categories = [
  {
    label: { EN_US: 'Furniture', PT_BR: 'Mobília', ES: 'Mueble' },
    value: 1,
    backgroundColor: 'red',
    icon: 'apps',
  },
  {
    label: { EN_US: 'Clothing', PT_BR: 'Roupas', ES: 'Ropa' },
    value: 2,
    backgroundColor: 'green',
    icon: 'email',
  },
  {
    label: { EN_US: 'Camera', PT_BR: 'Câmera', ES: 'Cámara' },
    value: 3,
    backgroundColor: 'blue',
    icon: 'lock',
  },
];

function ListingEditScreen() {
  const { language } = useContext(GlobalContext);

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}>
        <AppFormField
          maxLength={255}
          name="title"
          placeholder={LISTING_EDIT_SCREEN[language]['APP_FORM_FIELD_TITLE']}
        />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder={LISTING_EDIT_SCREEN[language]['APP_FORM_FIELD_PRICE']}
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          // PickerItemComponent={CategoryPickerItem}
          placeholder={LISTING_EDIT_SCREEN[language]['APP_FORM_FIELD_CATEGORY']}
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder={LISTING_EDIT_SCREEN[language]['APP_FORM_FIELD_DESCRIPTION']}
        />
        <SubmitButton title={LISTING_EDIT_SCREEN[language]['APP_FORM_FIELD_POST']} />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
