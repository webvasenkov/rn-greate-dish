import React from 'react';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealScreen = ({ navigation }) => {
  const categoryId = navigation.getParam('categoryId');
  const selectedMeals = MEALS.filter(({ categoryIds }) => categoryIds.includes(categoryId));

  return <MealList navigation={navigation} mealData={selectedMeals} />;
};

CategoryMealScreen.navigationOptions = ({ navigation }) => {
  const { title } = CATEGORIES.find(({ id }) => id === navigation.getParam('categoryId'));
  return {
    headerTitle: title,
  };
};

export default CategoryMealScreen;
