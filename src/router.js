import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import LogIn from "./components/LogIn.vue";
import SignUp from "./components/SignUp.vue";
import Home from "./components/Home.vue";
import Conditions from './components/Conditions.vue'
import PetAdoption from "./components/PetAdoption.vue";
import MyPets from "./components/MyPets.vue";
const routes = [
  {
    path: "/",
    name: "root",
    component: App,
  },
  {
    path: "/user/logIn",
    name: "logIn",
    component: LogIn,
  },
  {
    path: "/user/signUp",
    name: "signUp",
    component: SignUp,
  },
  {
    path: "/user/home",
    name: "home",
    component: MyPets,
  },
  {
    path: "/user/conditions",
    name: "conditions",
    component: Conditions,    
  },
  {
    path: "/user/adoption",
    name: "adoption",
    component: PetAdoption,
    props: true,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
