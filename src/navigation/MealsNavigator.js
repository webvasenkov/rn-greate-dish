import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { CategoriesScreen, CategoryMealScreen, MealDetailScreen } from '../screens';

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeal: CategoryMealScreen,
  MealDetail: MealDetailScreen,
});

export default createAppContainer(MealsNavigator);
