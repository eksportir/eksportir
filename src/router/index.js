import { createRouter, createWebHistory } from "vue-router";

const routes = [
  
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/admin",
    name: "Administrator",
    component: () => import("../views/layouts/AdminPage.vue"),
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("../views/admin_page/Dashboard.vue"),
      },
    ],
  },
  {
    path: "/",
    name: "LandingPage",
    component: () => import("../views/layouts/LandingPage.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("../views/landing_page/Home.vue"),
      },
      {
        path: "contact",
        name: "Contact",
        component: () => import("../views/landing_page/Contact.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: "active",
  routes,
});

export default router;
