import React from 'react';
import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
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

CategoriesScreen.navigationOptions = ({ navigation }) => ({
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title='Menu' iconName='menu-outline' onPress={navigation.toggleDrawer} />
    </HeaderButtons>
  ),
});

export default CategoriesScreen;
