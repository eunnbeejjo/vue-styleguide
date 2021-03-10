<template>
  <v-combobox v-model="select" :items="checkItems" label="선택해보시오" multiple class="pa-5 pb-0"></v-combobox>
</template>

<script>
export default {
  name: "checkboxCombo",
  data () {
    return {
      select: [],
      checkItems: [
        {text:"Daniel", color:"red", value:"Daniel"},
        {text:"Kevin", color:"blue", value:"Kevin"},
        {text:"Elena", color:"green", value:"Elena"},
        {text:"Veronica", color:"orange", value:"Veronica"},
      ],
    }
  },
}
</script>

<style scoped>

</style>