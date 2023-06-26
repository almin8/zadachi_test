import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  plugins: [createPersistedState()],
  state: {
    tasks: [],
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
    },
    editTask(state, { index, task }) {
      state.tasks[index] = task;
    },
    deleteTask(state, index) {
      state.tasks.splice(index, 1);
    },
  },
});

export default store;
