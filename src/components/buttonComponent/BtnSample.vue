<template>
  <div>
    <v-btn :outlined="myOutlined" :rounded="myRounded" :depressed="myDepressed">{{ btnContent }}</v-btn>
  </div>
</template>

<script>
export default {
  name: "BtnSample",
  props: {
    myOutlined: false,
    myRounded: false,
    myDepressed: false,
    myColor: "",
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