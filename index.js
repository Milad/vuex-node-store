const store = require('./store');

store.commit('addTodo', {title: "Groceries", done: false});
store.commit('increment');
store.commit('addTodo', {title: "Laundry", done: false});
store.commit('increment');

console.log(store.state.todoList);
console.log(store.state.count);
