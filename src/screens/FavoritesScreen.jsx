import React from 'react';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import MealList from '../components/MealList';
import CustomHeaderButton from '../components/CustomHeaderButton';

const FavoritesScreen = ({ navigation }) => {
  const favoriteMeals = MEALS.filter(({ id }) => id === 'm3' || id === 'm4');
  return <MealList navigation={navigation} mealData={favoriteMeals} />;
};

FavoritesScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Favorite Meals',
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title='Menu' iconName='menu-outline' onPress={navigation.toggleDrawer} />
    </HeaderButtons>
  ),
});

export default FavoritesScreen;
