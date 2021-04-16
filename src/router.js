import { createRouter, createWebHistory } from "vue-router";
import About from "@/views/About/About.vue";
import NotFound from "@/views/NotFound/NotFound.vue";
const Books = () =>
  import(/* webpackChunkName: "books" */ "@/views/Books/Books.vue");
const BookDetail = () =>
  import(/* webpackChunkName: "books" */ "@/views/BookDetail/BookDetail.vue");
const BookList = () =>
  import(/* webpackChunkName: "books" */ "@/views/BookList/BookList.vue");
const BookEdit = () =>
  import(/* webpackChunkName: "books" */ "@/views/BookEdit/BookEdit.vue");

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
      {
        path: ":isbn/edit",
        name: "BookEdit",
        component: BookEdit,
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
