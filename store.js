const vue = require('vue');
const vuex = require('vuex');

// This is necessary even if you are on the server-side.
vue.use(vuex);

const store = new vuex.Store({
    strict: true,
    state: {
        count: 0,
        todoList: []
    },
    mutations: {
        increment (state) {
            state.count++;
        },
        addTodo (state, {title, done}) {
            state.todoList.push({
                title,
                done,
            });
        }
    }
});

module.exports = store;
