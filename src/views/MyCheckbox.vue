<template>
  <div class="ma-5">
    <v-card class="mb-5">
      <card-title-style card-title-content="Checkbox Style 01" />
      <v-row>
        <v-col>
          <v-radio-group v-model="selectCheckbox">
            <v-row class="px-3">
              <v-col cols="auto">
                <v-radio @click="selectedComponent = 'checkboxDefault'"><template v-slot:label>
                  <checkbox-default class="ml-5"/>
                </template></v-radio>
              </v-col>
            </v-row>
            <v-row class="px-3">
              <v-col cols="auto">
                <v-radio @click="selectedComponent = 'checkboxLabel'">
                  <template v-slot:label>
                    <checkbox-label class="ml-5" />
                  </template>
                  <p>CHECKED NAME!! {{ checkboxContent }}</p>
                </v-radio>
              </v-col>
            </v-row>
            <v-row class="px-3">
              <v-col cols="auto">
                <v-radio @click="selectedComponent = 'checkboxCombo'"><template v-slot:label>
                  <checkbox-combo />
                </template></v-radio>
              </v-col>
            </v-row>
            <v-row class="px-3">
              <v-col cols="auto">
                <v-radio @click="selectedComponent = 'checkboxComboChips'"><template v-slot:label>
                  <checkbox-combo-chips />
                </template></v-radio>
              </v-col>
            </v-row>
          </v-radio-group>
        </v-col>
        <v-col>
          <v-card class="ma-5 pa-5">
            <keep-alive>
              <current-check :is="selectedComponent" />
            </keep-alive>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import cardTitleStyle from "@/components/cardComponent/cardTitleStyle";
import CurrentCheck from "@/components/checkboxComponent/currentCheck";

import checkboxDefault from "@/components/checkboxComponent/checkboxDefault";
import checkboxLabel from "@/components/checkboxComponent/checkboxLabel";
import checkboxCombo from "@/components/checkboxComponent/checkboxCombo";
import checkboxComboChips from "@/components/checkboxComponent/checkboxComboChips";

export default {
  name: "MyCheckbox",
  props: {
  },
  components: {
    CurrentCheck,
    cardTitleStyle,
    checkboxDefault,
    checkboxLabel,
    checkboxCombo,
    checkboxComboChips,
  },
  data () {
    return {
      selectCheckbox: 0,
      checkboxContent: [],
      selectedComponent: 'checkboxDefault',
      select1: [],
      select2: [],
      checkItems: [
        {text:"Daniel", color:"red", value:"Daniel"},
        {text:"Kevin", color:"blue", value:"Kevin"},
        {text:"Elena", color:"green", value:"Elena"},
        {text:"Veronica", color:"orange", value:"Veronica"},
      ],
      items: [
        'Programming',
        'Design',
        'Vue',
        'Vuetify',
      ],
    }
  },
  methods: {
    getCheckboxStyle() {
      switch (this.selectCheckbox) {
        case 0:
          break;
        case 1:
          break;
        case 2:
          break;
        case 3:
          break;
      }
    }
  }
}
</script>

<style scoped>

</style>