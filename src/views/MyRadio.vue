<template>
  <div>
    <v-radio-group v-model="radios" :mandatory="false">
      <v-radio label="indigo" color="indigo" value="indigo"></v-radio>
      <v-radio label="orange" color="orange" value="orange"></v-radio>
    </v-radio-group>
  </div>
</template>

<script>
export default {
  name: "MyRadio"
}
</script>

<style scoped>

</style>