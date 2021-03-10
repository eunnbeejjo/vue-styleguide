<template>
  <div>
    <v-card class="ma-5">
      <v-row class="pa-5" align="center">
        <v-item-group v-model="window" class="shrink" tag="v-flex" mandatory style="align-items: center">
          <v-item v-for="n in page" :key="`btn-${n}`" v-slot:default="{ active, toggle }">
            <v-row><v-btn :input-value="active" icon @click="toggle" class="mx-5">{{ n }}</v-btn></v-row>
          </v-item>
        </v-item-group>
        <v-window v-model="window" vertical>
          <v-window-item v-for="n in page" :key="`page-${n}`">
            <v-card class="pa-5" height="200" width="1000">
              <v-row class="fill-height" align="center" justify="center"><h1>PAGE {{ n }}</h1></v-row>
            </v-card>
          </v-window-item>
        </v-window>
      </v-row>
    </v-card>
    <v-card class="ma-5" height="800">
      <v-tabs v-model="tab" vertical>
        <v-tabs-slider color="green"></v-tabs-slider>
        <v-tab v-for="(item, i) in tabName" :key="item" :index="i" :href="`#tab-${i+1}`" @click="selectedTab = item.component" style="color: green;">{{ item.title }}</v-tab>
        <v-tabs-items v-model="tab">
          <v-tab-item v-for="n in 4" :key="n" :value="'tab-' + n" :transition="false" :reverse-transition="false">
            <p>tab content {{ n }}</p>
            <component :is="selectedTab" />
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
import MyCheckbox from "@/views/MyCheckbox";
import MyButtons from "@/views/MyButtons";
import MyList from "@/views/MyList";
import MyTable from "@/views/MyTable";

export default {
  name: "MyWindow",
  components: {MyCheckbox, MyButtons, MyList, MyTable,},
  data () {
    return {
      page: 3,
      window: 0,
      tab: null,
      transition: false,
      selectedTab: 'MyCheckbox',
      tabName: [
        {title:"checkbox", component:"MyCheckbox"},
        {title:"buttons", component:"MyButtons"},
        {title:"list", component:"MyList"},
        {title:"table", component:"MyTable"},
      ],
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>