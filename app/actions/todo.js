import * as types from "./types";

export function todoCount(data) {
  return {
    type: types.ADD_TODO,
    data: data
  };
}

export function fetchTodoAction(todos) {
  return {
    type: types.FETCH_TODO,
    data: todos
  };
}

export function toggleTodoAction(data) {
  return {
    type: types.TOGGLE_TODO,
    data: data
  };
}
