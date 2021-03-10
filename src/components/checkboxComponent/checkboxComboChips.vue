<template>
  <v-combobox v-model="select" :items="items" label="췹스 안에 나타날 것이야" multiple chips class="pa-5 pb-0">
    <template v-slot:selection="data">
      <v-chip :key="JSON.stringify(data.item)" v-bind="data.attrs" :input-value="data.selected" :disabled="data.disabled" @click:close="data.parent.selectItem(data.item)">
        {{ data.item }}
      </v-chip>
    </template>
  </v-combobox>
</template>

<script>
export default {
  name: "checkboxComboChips",
  data () {
    return {
      select: [],
      items: [
        'Programming',
        'Design',
        'Vue',
        'Vuetify',
      ],
    }
  },
}
</script>

<style scoped>

</style>