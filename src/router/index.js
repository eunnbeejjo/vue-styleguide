import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import MyButtons from "@/views/MyButtons";
import MyRadio from "@/views/MyRadio";
import MyCheckbox from "@/views/MyCheckbox";
import MySelect from "@/views/MySelect";
import MyTable from "@/views/MyTable";
import MyColour from "@/views/MyColour";
import MyList from "@/views/MyList";
import MyOverlay from "@/views/MyOverlay";
import MyWindow from "@/views/MyWindow";
import MyPagination from "@/views/MyPagination";
import VuePractice from "@/views/VuePractice";
import SmsPopup from "@/views/SmsPopup";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/my-buttons',
    name: 'MyButtons',
    component: MyButtons
  },
  {
    path: '/my-radio',
    name: 'MyRadio',
    component: MyRadio
  },
  {
    path: '/my-checkbox',
    name: 'MyCheckbox',
    component: MyCheckbox
  },
  {
    path: '/my-select',
    name: 'MySelect',
    component: MySelect
  },
  {
    path: '/my-table',
    name: 'MyTable',
    component: MyTable
  },
  {
    path: '/my-colour',
    name: 'MyColour',
    component: MyColour,
  },
  {
    path: '/my-list',
    name: 'MyList',
    component: MyList,
  },
  {
    path: '/my-overlay',
    name: 'MyOverlay',
    component: MyOverlay,
  },
  {
    path: '/my-window',
    name: 'MyWindow',
    component: MyWindow,
  },
  {
    path: '/my-pagination',
    name: 'MyPagination',
    component: MyPagination,
  },
  {
    path: '/vue-practice',
    name: 'VuePractice',
    component: VuePractice,
  },
  {
    path: '/sms-popup',
    name: 'SmsPopup',
    component: SmsPopup,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
