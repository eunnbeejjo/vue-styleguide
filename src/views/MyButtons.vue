<template>
  <v-container fluid class="pa-5">
    <v-row>
      <v-col cols="">
        <default-btn-box my-title="Button Style" btn-content="BUTTON" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DefaultBtnBox from "@/components/buttonComponent/DefaultBtnBox";
export default {
  name: "MyButtons",
  components: {DefaultBtnBox},
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>