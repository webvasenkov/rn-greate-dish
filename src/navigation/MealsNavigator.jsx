import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { COLORS } from '../constants/constants';
import { Ionicons } from '@expo/vector-icons';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

const defaultNavigationOptions = {
  headerTintColor: Platform.OS === 'android' ? COLORS.primary : COLORS.accent,
  headerStyle: { backgroundColor: Platform.OS === 'android' ? COLORS.accent : COLORS.primary },
};

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeal: CategoryMealScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions,
  }
);

const FavoritesNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  { defaultNavigationOptions }
);

const configTabNavigator = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => <Ionicons name='restaurant' size={18} color={tabInfo.tintColor} />,
      barStyle: { backgroundColor: COLORS.primary },
      activeColor: COLORS.accent,
    },
  },
  Favorites: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => <Ionicons name='heart' size={18} color={tabInfo.tintColor} />,
      barStyle: { backgroundColor: COLORS.accent },
      activeColor: COLORS.primary,
    },
  },
};

const MealsFavTabsNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(configTabNavigator, {
        shifting: true,
      })
    : createBottomTabNavigator(configTabNavigator, {
        tabBarOptions: {
          activeTintColor: COLORS.accent,
        },
      });

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  { defaultNavigationOptions }
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFav: {
      screen: MealsFavTabsNavigator,
      navigationOptions: {
        drawerLabel: 'Meals',
      },
    },
    Filters: FiltersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: COLORS.accent,
    },
  }
);

export default createAppContainer(MainNavigator);
