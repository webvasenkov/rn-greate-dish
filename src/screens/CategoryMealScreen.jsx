// @ts-nocheck
import React from 'react';
import { CATEGORIES } from '../data/dummy-data';
import { useSelector } from 'react-redux';
import MealList from '../components/MealList';

const CategoryMealScreen = ({ navigation }) => {
  const meals = useSelector((state) => state.meals.all);
  const categoryId = navigation.getParam('categoryId');
  const selectedMeals = meals.filter(({ categoryIds }) => categoryIds.includes(categoryId));

  return <MealList navigation={navigation} mealData={selectedMeals} />;
};

CategoryMealScreen.navigationOptions = ({ navigation }) => {
  const { title } = CATEGORIES.find(({ id }) => id === navigation.getParam('categoryId'));
  return {
    headerTitle: title,
  };
};

export default CategoryMealScreen;
