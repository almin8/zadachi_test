import { createRouter, createWebHistory } from "vue-router";
import TodoList from "../components/TodoList";
import HomePage from "../components/HomePage";

const routes = [
  { path: "/tasks", component: TodoList },
  { path: "/", component: HomePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
