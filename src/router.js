import { createRouter, createWebHistory } from "vue-router";
import BookList from "@/views/BookList/BookList.vue";
import About from "@/views/About/About.vue";
import NotFound from "@/views/NotFound/NotFound.vue";
import BookDetail from "@/views/BookDetail/BookDetail.vue";
import Books from "@/views/Books/Books.vue";

const routes = [
  {
    path: "/",
    redirect: "/books",
  },
  {
    path: "/books",
    component: Books,
    children: [
      {
        path: "",
        name: "Books",
        component: BookList,
      },
      {
        path: ":isbn",
        name: "BookDetail",
        component: BookDetail,
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    component: About,
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
