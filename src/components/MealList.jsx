// @ts-nocheck
import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import MealItem from './MealItem';

const MealList = ({ navigation, mealData }) => {
  const favoriteMeals = useSelector((state) => state.meals.favorites);

  const mealItem = ({ item }) => (
    <MealItem
      title={item.title}
      imageUrl={item.imageUrl}
      duration={item.duration}
      affordability={item.affordability}
      complexity={item.complexity}
      onSelect={() =>
        navigation.navigate({
          routeName: 'MealDetail',
          params: {
            mealId: item.id,
            mealTitle: item.title,
            isFavorite: favoriteMeals.some(({ id }) => id === item.id),
          },
        })
      }
    />
  );

  return <FlatList keyExtractor={(item) => item.id} data={mealData} renderItem={mealItem} />;
};

export default MealList;
