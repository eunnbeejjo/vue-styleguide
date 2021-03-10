<template>
  <v-card class="ma-5">
    <v-row>
      <v-col>
        <v-radio-group class="ma-3">
          <v-row>
            <v-col cols="auto">
              <v-radio><template v-slot:label><v-row><v-col cols="auto">
                <div style="width: 30px; height: 30px; background-color: #37474F; float:left;"></div>
                <div style="width: 30px; height: 30px; background-color: palevioletred; float:left;"></div>
                <div style="width: 30px; height: 30px; background-color: cadetblue; float:left;"></div>
              </v-col></v-row></template></v-radio>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto">
              <v-radio><template v-slot:label><v-row><v-col cols="auto">
                <div style="width: 30px; height: 30px; background-color: #37474F; float:left;"></div>
                <div style="width: 30px; height: 30px; background-color: palevioletred; float:left;"></div>
                <div style="width: 30px; height: 30px; background-color: cadetblue; float:left;"></div>
              </v-col></v-row></template></v-radio>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto">
              <v-radio><template v-slot:label><v-row><v-col cols="auto">
                <div style="width: 30px; height: 30px; background-color: #37474F; float:left;"></div>
                <div style="width: 30px; height: 30px; background-color: palevioletred; float:left;"></div>
                <div style="width: 30px; height: 30px; background-color: cadetblue; float:left;"></div>
              </v-col></v-row></template></v-radio>
            </v-col>
          </v-row>
        </v-radio-group>
      </v-col>
      <v-col>
        <div style="width: 100px; height: 100px; background-color: #37474F;"></div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "MyColour"
}
</script>

<style scoped>

</style>