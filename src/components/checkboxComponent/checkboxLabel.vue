<template>
  <div>
    <v-row>
      <v-checkbox v-for="item in checkItems" v-model="checkboxContent" :label="item.text" :color="item.color" :value="item.value" class="mr-10"></v-checkbox>
    </v-row>
    <v-row>
      <p>CHECKED NAME!! {{ checkboxContent }}</p>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "checkboxLabel",
  data () {
    return {
      checkboxContent: [],
      checkItems: [
        {text:"Daniel", color:"red", value:"Daniel"},
        {text:"Kevin", color:"blue", value:"Kevin"},
        {text:"Elena", color:"green", value:"Elena"},
        {text:"Veronica", color:"orange", value:"Veronica"},
      ],
    }
  }
}
</script>

<style scoped>

</style>