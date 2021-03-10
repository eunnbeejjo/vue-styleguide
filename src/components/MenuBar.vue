<template>
  <v-navigation-drawer permanent v-model="drawer" :mini-variant.sync="mini" :clipped="clipped" app >
    <v-list-item>
      <v-list-item-icon><v-icon>mdi-diamond-stone</v-icon></v-list-item-icon>
      <v-list-item-title style="font-weight: bold">EUNNBEEJJO</v-list-item-title>
      <v-btn icon @click.stop="mini = !mini">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item v-for="list in menuList" link @click="menuClick(list.name)" active-class="blue">
        <v-list-item-icon>
          <v-icon>{{ list.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ list.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ list.subtitle }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "MenuBar",
  data() {
    return {
      drawer: true,
      mini: true,
      clipped: false,
      menuList: [
        {icon: "mdi-gesture-tap-button", title: "BUTTON", subtitle: "button", name: "MyButtons"},
        {icon: "mdi-radiobox-marked", title: "RADIO BUTTON", subtitle: "radio", name: "MyRadio"},
        {icon: "mdi-checkbox-marked", title: "CHECKBOX", subtitle: "checkbox", name: "MyCheckbox"},
        {icon: "mdi-form-select", title: "SELECT", subtitle: "select", name: "MySelect"},
        {icon: "mdi-table", title: "TABLE", subtitle: "table", name: "MyTable"},
        {icon: "mdi-palette", title: "COLOUR", subtitle: "colour", name: "MyColour"},
        {icon: "mdi-format-list-bulleted", title: "LIST", subtitle: "list", name: "MyList"},
        {icon: "mdi-layers", title: "OVERLAY", subtitle: "overlay", name: "MyOverlay"},
        {icon: "mdi-dock-window", title: "WINDOW", subtitle: "window", name: "MyWindow"},
        {icon: "mdi-numeric-9-plus-box-multiple-outline", title: "PAGINATION", subtitle: "pagination", name: "MyPagination"},
        {icon: "mdi-palette", title: "Vue Practice", subtitle: "vue practice", name: "VuePractice"},
        {icon: "mdi-layers", title: "SMS POPUP", subtitle: "sms pop-up", name: "SmsPopup"},
      ]
    }
  },
  methods: {
    menuClick(name) {
      this.$router.push({name : name});
    }
  }
}
</script>

<style scoped>

</style>