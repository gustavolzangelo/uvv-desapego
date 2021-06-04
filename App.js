import React, { useState } from 'react';
import AppPicker from './app/components/AppPicker';
import Screen from './app/components/Screen';

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);

  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        placeholder="Category"
        icon={'mail'}
      />
    </Screen>
  );
}
