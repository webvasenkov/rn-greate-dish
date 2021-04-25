import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { CategoriesScreen, CategoryMealScreen, MealDetailScreen } from '../screens';
import { COLORS } from '../constants/constants';

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeal: CategoryMealScreen,
    MealDetail: {
      screen: MealDetailScreen,
      navigationOptions: {
        headerTitle: 'Meal Detail',
      },
    },
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

export default createAppContainer(MealsNavigator);
