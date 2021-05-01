import { MEALS } from '../../data/dummy-data';

const TOGGLE_FAVORITE = 'RN-MEALS/MEALS-REDUCER/TOGGLE-FAVORITE';
const FILTERED = 'RN-MEALS/MEALS-REDUCER/FILTERED';

const initialState = {
  all: MEALS,
  filtered: MEALS,
  favorites: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE: {
      const { mealId } = action;
      const existingMeal = state.favorites.findIndex(({ id }) => id === mealId);
      if (~existingMeal) {
        return { ...state, favorites: state.favorites.filter(({ id }) => id !== mealId) };
      } else {
        return { ...state, favorites: [...state.favorites, state.all.find(({ id }) => id === mealId)] };
      }
    }
    case FILTERED: {
      const { options } = action;
      console.log(options);
      return {
        ...state,
        filtered: state.all.filter(({ isGlutenFree, isVegan, isVegetarian, isLactoseFree }) => {
          if (options.isGlutenFree && !isGlutenFree) return false;
          if (options.isVegan && !isVegan) return false;
          if (options.isVegetarian && !isVegetarian) return false;
          if (options.isLactoseFree && !isLactoseFree) return false;
          return true;
        }),
      };
    }
    default:
      return state;
  }
};

export default mealsReducer;

export const toggleFavoriteAC = (mealId) => ({
  type: TOGGLE_FAVORITE,
  mealId,
});

export const filteredAC = (options) => ({
  type: FILTERED,
  options,
});
