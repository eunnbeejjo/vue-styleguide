<template>
  <v-app>
    <app-bar/>

    <menu-bar/>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import '@/utils/eventbus';

import HelloWorld from './components/HelloWorld';
import MenuBar from "@/components/MenuBar";
import MyButtons from "@/views/MyButtons";
import MyRadio from "@/views/MyRadio";
import MyCheckbox from "@/views/MyCheckbox";
import MySelect from "@/views/MySelect";
import MyTable from "@/views/MyTable";
import MyColour from "@/views/MyColour";
import AppBar from "@/components/AppBar";
import VuePractice from "@/views/VuePractice";
import SmsPopup from "@/views/SmsPopup";

export default {
  name: 'App',
  components: {
    AppBar,
    MyRadio,
    MyButtons,
    MyCheckbox,
    MySelect,
    MenuBar,
    MyTable,
    MyColour,
    HelloWorld,
    VuePractice,
    SmsPopup,
  },
  data: () => ({}),
};
</script>
<style lang="scss">
.v-data-table--dense > .v-data-table__wrapper > table > tbody > tr > td, .v-data-table--dense > .v-data-table__wrapper > table > thead > tr > td, .v-data-table--dense > .v-data-table__wrapper > table > tfoot > tr > td{
  height: 20px;
}
</style>