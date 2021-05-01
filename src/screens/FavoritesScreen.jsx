// @ts-nocheck
import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import Fallback from '../components/Fallback';
import MealList from '../components/MealList';
import CustomHeaderButton from '../components/CustomHeaderButton';

const FavoritesScreen = ({ navigation }) => {
  const favoriteMeals = useSelector((state) => state.meals.favorites);

  if (!favoriteMeals.length) return <Fallback text='No favorite meals' />;
  return <MealList navigation={navigation} mealData={favoriteMeals} />;
};

FavoritesScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Favorite Meals',
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title='Menu' iconName='menu-outline' onPress={navigation.toggleDrawer} />
    </HeaderButtons>
  ),
});

export default FavoritesScreen;
