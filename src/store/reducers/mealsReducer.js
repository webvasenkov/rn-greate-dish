import { MEALS } from '../../data/dummy-data';

const initialState = {
  all: MEALS,
  filtered: MEALS,
  favorites: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default mealsReducer;
