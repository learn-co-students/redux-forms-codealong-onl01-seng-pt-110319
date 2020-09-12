export default function manageTodo(state = {
  todos: [],
}, action) {

  switch (action.type) {
    case 'ADD_TODO':
      console.log(`current todos: ${state.todos.concat(action.payload.item)}`);
      return { todos: state.todos.concat(action.payload.item)}

      default:
        return state;
  }
}
