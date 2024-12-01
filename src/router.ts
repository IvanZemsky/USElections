import { createRouter, createWebHashHistory } from "vue-router";
import ElectionsPage from "@/pages/ElectionsPage.vue";
import StatePage from "./pages/StatePage.vue";

export const router = createRouter({
   history: createWebHashHistory(),
   routes: [
      {path: '/', component: ElectionsPage},
      {path: '/:state', component: StatePage}
   ]
})