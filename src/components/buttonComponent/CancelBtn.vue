<template>
  <div>
    <v-btn :outlined="myOutlined" :depressed="myDepressed" :rounded="myRounded" :color="'yellow darken-3'" :style="{color: myTextColor}">{{ btnContent }}</v-btn>
  </div>
</template>

<script>
export default {
  name: "CancelBtn",
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