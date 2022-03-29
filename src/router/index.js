import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    // meta:["首页"],
    children: [
      { path: "",meta:["首页"], component: () => import("../views/homes/HomeIndex.vue") },
      { path: "2-1" ,meta:["文章列表"],component: () => import("../views/homes/HomePerson.vue") },
      { path: "2-2",meta:["多层级路由"],component: () => import("../views/homes/HomeShop.vue") },
    ]
  },
  {
    path: "/login",
    name: "MyLogin",
    component: () => import("../views/MyLogin.vue")
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});
// 权限管理 路由守卫
router.beforeEach(function (to, from, next) {
  // console.log(to,from)
  if (to.path === "/login") { //login 没有权限约束
    next()
  } else {
    let token = localStorage.getItem("token")
    if (!token) return next({ path: "/login" })
    if (token) return next()
  }
})

export default router;
