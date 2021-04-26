import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { COLORS } from '../constants/constants';
import { Ionicons } from '@expo/vector-icons';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoriteScreen from '../screens/FavoritesScreen';

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeal: CategoryMealScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerTintColor: Platform.OS === 'android' ? COLORS.primary : COLORS.accent,
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? COLORS.accent : COLORS.primary,
      },
    },
  }
);

const MealsFavTabsNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => <Ionicons name='restaurant' size={18} color={tabInfo.tintColor} />,
      },
    },
    Favorite: {
      screen: FavoriteScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => <Ionicons name='heart' size={18} color={tabInfo.tintColor} />,
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: COLORS.accent,
    },
  }
);

export default createAppContainer(MealsFavTabsNavigator);
