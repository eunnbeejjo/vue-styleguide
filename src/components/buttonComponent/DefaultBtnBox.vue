<template>
  <v-card outlined elevation="3">
    <card-title-style card-title-content="Button Style" />
    <v-row justify="start" class="mx-2">
      <v-col cols="auto">
        <v-radio-group v-model="selectBtn">
          <v-row>
            <v-col class="py-1">
              <v-radio><template v-slot:label><btn-sample :my-depressed="true" :btn-content="btnContent+1"></btn-sample></template></v-radio>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="py-1">
              <v-radio><template v-slot:label><btn-sample :my-outlined="true" :btn-content="btnContent+2"></btn-sample></template></v-radio>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="py-1">
              <v-radio><template v-slot:label><btn-sample :my-depressed="true" :my-rounded="true" :btn-content="btnContent+3"></btn-sample></template></v-radio>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="py-1">
              <v-radio><template v-slot:label><btn-sample :my-rounded="true" :my-outlined="true" :btn-content="btnContent+4"></btn-sample></template></v-radio>
            </v-col>
          </v-row>
        </v-radio-group>
      </v-col>
      <v-col cols="auto" class="mt-5">
        <default-btn class="py-1" :btn-content="'DEFAULT'" :my-rounded="$store.state.btn.RoundStyle" :my-outlined="$store.state.btn.OutlineStyle" :my-depressed="$store.state.btn.DepressStyle" :my-text-color="$store.state.btn.TextColor"></default-btn>
        <save-btn class="py-1" :btn-content="'SAVE'" :my-rounded="$store.state.btn.RoundStyle" :my-outlined="$store.state.btn.OutlineStyle" :my-depressed="$store.state.btn.DepressStyle" :my-text-color="$store.state.btn.TextColor"></save-btn>
        <cancel-btn class="py-1" :btn-content="'CANCEL'" :my-rounded="$store.state.btn.RoundStyle" :my-outlined="$store.state.btn.OutlineStyle" :my-depressed="$store.state.btn.DepressStyle" :my-text-color="$store.state.btn.TextColor"></cancel-btn>
        <delete-btn class="py-1" :btn-content="'DELETE'" :my-rounded="$store.state.btn.RoundStyle" :my-outlined="$store.state.btn.OutlineStyle" :my-depressed="$store.state.btn.DepressStyle" :my-text-color="$store.state.btn.TextColor"></delete-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-textarea readonly auto-grow outlined class="mx-3" rows="1" label="사용법" value="<v-btn>Default</v-btn>"></v-textarea>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>

import BtnSample from "@/components/buttonComponent/BtnSample";
import DefaultBtn from "@/components/buttonComponent/DefaultBtn";
import SaveBtn from "@/components/buttonComponent/SaveBtn";
import CancelBtn from "@/components/buttonComponent/CancelBtn";
import DeleteBtn from "@/components/buttonComponent/DeleteBtn";
import cardTitleStyle from "@/components/cardComponent/cardTitleStyle";

export default {
  name: "DefaultBtnBox",
  components: {BtnSample, DefaultBtn, SaveBtn, CancelBtn, DeleteBtn, cardTitleStyle},
  props: {
    myTitle: "",
    btnContent: "",
    use: "",
    selectColor: "",
  },
  data () {
    return {
      selectBtn: 0,
    }
  },
  methods: {
    getBtnStyle() {
      switch (this.selectBtn) {
        case 0:
          console.log(11);
          this.$store.commit("modifyBtnRStyle", {RoundStyle: false});
          this.$store.commit("modifyBtnOStyle", {OutlineStyle: false});
          this.$store.commit("modifyBtnDStyle", {DepressStyle: true});
          this.$store.commit("modifyBtnTextColor", {TextColor: "#ffffff"});
          break;

        case 1:
          console.log(22);
          this.$store.commit("modifyBtnRStyle", {RoundStyle: false});
          this.$store.commit("modifyBtnOStyle", {OutlineStyle: true});
          this.$store.commit("modifyBtnColor", {Color: ""});
          break;

        case 2:
          console.log(33);
          this.$store.commit("modifyBtnRStyle", {RoundStyle: true});
          this.$store.commit("modifyBtnOStyle", {OutlineStyle: false});
          this.$store.commit("modifyBtnDStyle", {DepressStyle: true});
          this.$store.commit("modifyBtnColor", {Color: ""});
          this.$store.commit("modifyBtnTextColor", {TextColor: "#ffffff"});
          break;

        case 3:
          console.log(44);
          this.$store.commit("modifyBtnRStyle", {RoundStyle: true});
          this.$store.commit("modifyBtnOStyle", {OutlineStyle: true});
          this.$store.commit("modifyBtnColor", {Color: ""});
          break;
      }
    }
  },
  watch: {
    selectBtn(val){
      this.getBtnStyle();
    }
  }
}
</script>

<style scoped>

</style>