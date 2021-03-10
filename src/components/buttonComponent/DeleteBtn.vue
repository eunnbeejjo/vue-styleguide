<template>
  <div>
    <v-btn :outlined="myOutlined" :depressed="myDepressed" :rounded="myRounded" :color="'red darken-1'" :style="{color: myTextColor}" >{{ btnContent }}</v-btn>
  </div>
</template>

<script>
export default {
  name: "DeleteBtn",
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