<template>
  <div>
    <v-row>
      <v-card elevation="5" width="60%" class="ma-5 pa-3" color="grey lighten-4">
        <v-card-title>
          Nutrition
          <v-spacer></v-spacer>
          <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
        </v-card-title>
        <v-data-table dense :headers="headers" :items="desserts" :search="search" hide-default-footer></v-data-table>
      </v-card>
    </v-row>
    <v-row>
      <v-card elevation="5" width="60%" class="ma-5 pa-3" color="grey lighten-4">
        <v-card-title>
          Nutrition
        </v-card-title>
        <v-data-table dense :headers="headers" :items="desserts" :search="search" :item-class="rowColor" hide-default-footer></v-data-table>
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: true,
          value: 'name',
          class: ["cyan", "darken-4", "white--text"],
        },
        { text: 'Calories', value: 'calories', class: ["cyan", "darken-4", "white--text"], sortable: true, },
        { text: 'Fat (g)', value: 'fat', class: ["cyan", "darken-4", "white--text"], sortable: false, },
        { text: 'Carbs (g)', value: 'carbs', class: ["cyan", "darken-4", "white--text"], sortable: false, },
        { text: 'Protein (g)', value: 'protein', class: ["cyan", "darken-4", "white--text"], sortable: false, },
        { text: 'Iron (%)', value: 'iron', class: ["cyan", "darken-4", "white--text"], sortable: false, },
      ],
      desserts: [
        { name: 'Frozen Yogurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0, iron: '1%', },
        { name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3, iron: '1%', },
        { name: 'Eclair', calories: 262, fat: 16.0, carbs: 23, protein: 6.0, iron: '7%', },
        { name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3, iron: '8%', },
        { name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9, iron: '16%', },
        { name: 'Jelly bean', calories: 375, fat: 0.0, carbs: 94, protein: 0.0, iron: '0%', },
        { name: 'Lollipop', calories: 392, fat: 0.2, carbs: 98, protein: 0, iron: '2%', },
        { name: 'Honeycomb', calories: 408, fat: 3.2, carbs: 87, protein: 6.5, iron: '45%', },
        { name: 'Donut', calories: 452, fat: 25.0, carbs: 51, protein: 4.9, iron: '22%', },
        { name: 'KitKat', calories: 518, fat: 26.0, carbs: 65, protein: 7, iron: '6%', },
      ],
    }
  },
  methods: {
    rowColor: function (item) {
      if(item.fat>10 && item.carbs>50)
        return 'style-3'
      else if(item.fat>10)
        return 'style-1'
      else if(item.carbs>50)
        return 'style-2'
      else if(item.name==='Frozen Yogurt')
        return 'style-4'
    }
  }
}
</script>

<style>
.style-1 { color: blue; }
.style-2 { color: green; }
.style-3 { color: red; background-color: yellow; }
.style-4 { background-color: palevioletred; }
.theme--light.v-data-table > .v-data-table__wrapper > table > tbody > tr.style-4:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper) { background: purple; color: white; }
</style>