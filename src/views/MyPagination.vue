<template>
<div class="my-5">
  <v-pagination v-model="page" :length="30" :total-visible="7" color="blue-grey darken-2"></v-pagination>
  <v-pagination circle v-model="page" :length="30" :total-visible="7" color="blue-grey darken-2"></v-pagination>
  <v-pagination dark v-model="page" :length="30" :total-visible="7" color="white" class="color: #000000"></v-pagination>
  <v-pagination dark circle v-model="page" :length="30" :total-visible="7" color="white" class="color: #000000"></v-pagination>
</div>
</template>

<script>
export default {
  name: "MyPagination",
  data () {
    return {
      page: 1,
    }
  }
}
</script>

<style scoped>

</style>