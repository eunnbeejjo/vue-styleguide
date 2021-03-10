<template>
  <span>

      <v-checkbox v-for="item in checkItems" :label="item.text" :color="item.color" :value="item.value" class="mr-10 d-inline-block">wer</v-checkbox>

  </span>
</template>

<script>
export default {
  name: "checkboxDefault",
  checkboxContent: [],
  data () {
    return {
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