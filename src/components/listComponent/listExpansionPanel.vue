<template>
  <v-row class="mx-5">
    <v-col cols="auto">
      <v-switch label="accordion" v-model="accordion"></v-switch>
      <v-switch label="dark" v-model="dark"></v-switch>
      <v-switch label="focusable" v-model="focusable"></v-switch>
      <v-switch label="multiple" v-model="multiple"></v-switch>
      <v-switch label="tile" v-model="tile"></v-switch>
      <v-slider vertical min="0" max="10" v-model="elevation" thumb-label></v-slider>
    </v-col>
    <v-col cols="auto" max-width="400" align-self="center">
      <v-card class="mx-5" max-width="400" tile :elevation="elevation">
        <v-expansion-panels
            :accordion="accordion"
            :dark="dark"
            :focusable="focusable"
            :multiple="multiple"
            :tile="tile"
        >
          <v-expansion-panel v-for="(item, i) in 7" :key="i">
            <v-expansion-panel-header>Expansion Panel List</v-expansion-panel-header>
            <v-expansion-panel-content>
              오우아이아랴너어쟈쟈더기탸처게재뎌솣초탸이라제
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "listExpansionPanel",
  data () {
    return {
      accordion: true,
      dark: false,
      focusable: false,
      multiple: false,
      tile: false,
      elevation: 0,
    }
  },
}
</script>

<style scoped>

</style>