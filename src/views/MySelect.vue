<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="auto">
          <v-select :items="items" label="Standard" dense style="width: 100px;"></v-select>
        </v-col>
        <v-col cols="auto">
          <v-select :items="items" label="Solo" solo dense style="width: 110px;"></v-select>
        </v-col>
        <v-col cols="auto">
          <v-select :items="items" label="Outlined" outlined dense style="width: 110px;"></v-select>
        </v-col>
        <v-col cols="auto">
          <v-select :items="items" label="Filled" filled dense style="width: 110px;"></v-select>
        </v-col>
      </v-row>
    </v-container>
    <v-footer>
      <v-select :items="items" label="Reverse" reverse style="width: 110px;"></v-select>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "MySelect",
  data: () => ({
    items: ['Seoul', 'Apple', 'Coffee', 'Vue'],
  }),
}
</script>

<style scoped>

</style>