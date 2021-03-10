<template>
  <v-col cols="">
    <v-card outlined elevation="3">
      <v-card-title class="" style="font-weight: bold; font-size: large; background-color: aliceblue;">취소 버튼</v-card-title>
      <v-radio-group justify="center" class="ml-5">
        <v-row justify="center">
          <v-col cols="3">
            <cancel-btn @click="changeButton" :changed-btn1="cancel" :changed-btn2="cancel" :changed-btn3="cancel"></cancel-btn>
          </v-col>
          <v-col cols="1" align-self="center">
            <v-btn>CANCEL</v-btn>
          </v-col>
        </v-row>
      </v-radio-group>
      <v-list-item-subtitle class="ml-5 mb-5">취소 버튼</v-list-item-subtitle>
      <v-textarea readonly auto-grow outlined class="mx-3" rows="1" label="사용법" value="<v-btn outlined color='indigo' text='text'>Cancel</v-btn>"></v-textarea>
    </v-card>
  </v-col>
</template>

<script>
import CancelBtn from "@/components/buttonComponent/CancelBtn";
export default {
  name: "cancelBtnBox",
  components: {CancelBtn},
  data() {
    return {
      cancel: "CANCELll",
    }
  },
  methods: {
    changeButton() {
      this.$emit("changeBtn", "cancel")
    }
  }
}
</script>

<style scoped>

</style>