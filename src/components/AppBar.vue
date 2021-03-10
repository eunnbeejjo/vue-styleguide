<template>
  <v-app-bar app color="#568EA6" dark height="100px">
    <div class="d-flex align-center">
      <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://image.flaticon.com/icons/svg/1775/1775407.svg"
          transition="scale-transition"
          width="60"
      />
      <a href="App.vue" style="text-decoration: none; color: #fff;">
      <div class="ttitle">
        스따일 가이드 뿅뿅
        <v-icon x-large>mdi-emoticon-kiss-outline</v-icon><v-icon x-large>mdi-emoticon-devil-outline</v-icon><v-icon x-large>mdi-emoticon-poop</v-icon><v-icon x-large>mdi-face-mask</v-icon>
      </div>
      </a>
    </div>

    <v-spacer></v-spacer>

    <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
    >
      <span class="mr-2">Latest Release</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar"
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Gugi&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Sunflower:wght@300;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap');
.ttitle {
  font-family: 'Do Hyeon', sans-serif;
  font-size: 36px;
  font-weight: 800;
}
</style>