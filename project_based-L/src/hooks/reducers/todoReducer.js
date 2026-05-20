export const todoReducer = (
  state,
  action
) => {

  switch(action.type){

    // Add Todo
    case "ADD_TODO":

      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          completed: false
        }
      ];

    // Delete Todo
    case "DELETE_TODO":

      return state.filter(
        (todo) =>
          todo.id !== action.payload
      );

    // Toggle Todo
    case "TOGGLE_TODO":

      return state.map((todo) =>

        todo.id === action.payload
          ? {
              ...todo,
              completed:
                !todo.completed
            }
          : todo

      );

    default:
      return state;
  }
};