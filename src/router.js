import { createRouter, createWebHistory } from "vue-router";
import BookList from "@/views/BookList/BookList.vue";
import NotFound from "@/views/NotFound/NotFound.vue";

const routes = [
  {
    path: "/",
    redirect: "/books",
  },
  {
    path: "/books",
    name: "Books",
    component: BookList,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
