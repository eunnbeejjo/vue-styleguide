<template>
  <div>
    <v-row class="ma-5" style="position: relative;">
      <v-col>
        <v-card>
          <card-title-style card-title-content="Overlay Absolute" />
          <v-sheet class="pa-5">
            <v-row justify="center"><v-btn @click="overlay=!overlay">CLICK!!</v-btn></v-row>
            <v-overlay :value="overlay" :absolute="absolute">
              <v-btn @click="overlay=false">CLOSE!!</v-btn>
            </v-overlay>
          </v-sheet>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <card-title-style card-title-content="Overlay Calendar" />
          <v-sheet class="pa-5">
            <v-row justify="center"><v-btn @click="overlay1=!overlay">CLICK!!</v-btn></v-row>
            <v-overlay :value="overlay1">
                <v-row justify="end">
                  <v-icon @click="overlay1=false" light style="background-color: white">mdi-close</v-icon>
                </v-row>
                <v-row class="pa-2">
                  <v-date-picker v-model="date" absolute light></v-date-picker>
                </v-row>
            </v-overlay>
          </v-sheet>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <card-title-style card-title-content="Overlay" />
          <v-sheet class="pa-5">
            <v-row justify="center"><v-btn @click="overlay2=!overlay">CLICK!!</v-btn></v-row>
          </v-sheet>
        </v-card>
      </v-col>
    </v-row>
    <v-overlay :value="overlay2" :absolute="absolute">
      <v-btn @click="overlay2=false" light>CLOSE!!!</v-btn>
    </v-overlay>
  </div>
</template>

<script>
import CardTitleStyle from "@/components/cardComponent/cardTitleStyle";
export default {
  name: "MyOverlay",
  components: {CardTitleStyle},
  data() {
    return {
      overlay: false,
      overlay1: false,
      overlay2: false,
      absolute: true,
      date: new Date().toISOString().substr(0,10),
    }
  }
}
</script>

<style scoped>

</style>