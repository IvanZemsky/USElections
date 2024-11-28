import { createRouter, createWebHashHistory } from "vue-router";
import ElectionsPage from "@/pages/ElectionsPage.vue";

export const router = createRouter({
   history: createWebHashHistory(),
   routes: [
      {path: '/', component: ElectionsPage}
   ]
})