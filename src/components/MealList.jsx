import React from 'react';
import { FlatList } from 'react-native';
import MealItem from './MealItem';

const MealList = ({ navigation, mealData }) => {
  const mealItem = ({ item }) => (
    <MealItem
      title={item.title}
      imageUrl={item.imageUrl}
      duration={item.duration}
      affordability={item.affordability}
      complexity={item.complexity}
      onSelect={() => navigation.navigate({ routeName: 'MealDetail', params: { mealId: item.id } })}
    />
  );

  return <FlatList keyExtractor={(item) => item.id} data={mealData} renderItem={mealItem} />;
};

export default MealList;
