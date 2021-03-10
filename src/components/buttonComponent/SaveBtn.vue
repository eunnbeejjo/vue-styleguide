<template>
  <div>
    <v-btn :outlined="myOutlined" :depressed="myDepressed" :rounded="myRounded" :color="'green darken-1'" :style="{color: myTextColor}">{{ btnContent }}</v-btn>
  </div>
</template>

<script>
export default {
  name: "SaveBtn",
  props: {
    myOutlined: false,
    myRounded: false,
    myDepressed: false,
    myColor: "",
    myTextColor: "",
    btnContent: "",
    selectBtn: "",
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>