// @ts-nocheck
import React from 'react';
import { CATEGORIES } from '../data/dummy-data';
import { useSelector } from 'react-redux';
import Fallback from '../components/Fallback';
import MealList from '../components/MealList';

const CategoryMealScreen = ({ navigation }) => {
  const filteredMeals = useSelector((state) => state.meals.filtered);
  const categoryId = navigation.getParam('categoryId');
  const selectedMeals = filteredMeals.filter(({ categoryIds }) => categoryIds.includes(categoryId));

  if (!selectedMeals.length) return <Fallback text='Meals not found :(' />;
  return <MealList navigation={navigation} mealData={selectedMeals} />;
};

CategoryMealScreen.navigationOptions = ({ navigation }) => {
  const { title } = CATEGORIES.find(({ id }) => id === navigation.getParam('categoryId'));
  return {
    headerTitle: title,
  };
};

export default CategoryMealScreen;
