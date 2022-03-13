import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/HomePage";
import BootCamp from "../components/bootcamp/BootcampPage";
import BootCampDetail from "../components/bootcamp/BootcampDetailPage";
import BootCampProgram from "../components/bootcamp/BootcampProgramPage";
import Blog from "../components/blog/BlogPage";
import BlogDetail from "../components/blog/BlogDetailPage";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/kelas",
    name: "Kelas",
    component: BootCamp,
  },
  {
    path: "/kelas/:slug",
    name: "BootcampDetail",
    component: BootCampDetail,
  },
  {
    path: "/program/:slug",
    name: "BootcampProgram",
    component: BootCampProgram,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/blog/detail",
    name: "BlogDetail",
    component: BlogDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
