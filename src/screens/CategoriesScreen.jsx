import React from 'react';
import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryItem from '../components/CategoryItem';

const CategoriesScreen = ({ navigation }) => {
  const categoryItem = ({ item }) => (
    <CategoryItem
      onSelect={() => navigation.navigate({ routeName: 'CategoryMeal', params: { categoryId: item.id } })}
      color={item.color}
      title={item.title}
    />
  );

  return <FlatList keyExtractor={(item) => item.id} data={CATEGORIES} renderItem={categoryItem} numColumns={2} />;
};

export default CategoriesScreen;
