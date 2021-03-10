<template>
  <div>
    <v-card class="ma-5 pb-5">
      <card-title-style card-title-content="My List Style 01" />
      <list-default />
    </v-card>
    <v-card class="ma-5 pb-5">
      <card-title-style card-title-content="My List Style 02" />
      <list-expansion-panel />
    </v-card>
  </div>
</template>

<script>
import CardTitleStyle from "@/components/cardComponent/cardTitleStyle";
import ListDefault from "@/components/listComponent/listDefault";
import ListExpansionPanel from "@/components/listComponent/listExpansionPanel";

export default {
  name: "MyList",
  components: {ListExpansionPanel, ListDefault, CardTitleStyle},
}
</script>

<style scoped>

</style>