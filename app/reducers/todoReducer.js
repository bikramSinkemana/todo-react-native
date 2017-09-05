import * as types from "../actions/types";

export const todoCount = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [...state, action.data];

    case types.FETCH_TODO:
      return (state = action.data);

    case types.TOGGLE_TODO:
      return state.map(
        todo =>
          todo.id === action.data.id
            ? { ...todo, completed: !todo.completed }
            : todo
      );

    default:
      return state;
  }
};
