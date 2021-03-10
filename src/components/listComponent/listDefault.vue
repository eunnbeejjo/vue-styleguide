<template>
  <v-row>
    <v-col cols="auto">
      <v-switch v-model="twoLine" class="mx-5" label="Two-line"></v-switch>
      <v-switch v-model="threeLine" class="mx-5" label="Three-line"></v-switch>
      <v-switch v-model="rounded" class="mx-5" label="Rounded"></v-switch>
      <v-slider vertical v-model="elevation" min="0" max="10" class="px-10" thumb-label></v-slider>
    </v-col>
    <v-col>
      <v-card class="mx-5" max-width="400" tile :elevation="elevation">
        <v-list :rounded="rounded">
          <v-subheader>MENU</v-subheader>
          <v-divider></v-divider>
          <v-list-item-group v-model="item">
            <v-list-item v-for="item in items" :two-line="twoLine" :three-line="threeLine">
              <v-list-item-content>
                <v-list-item-title v-html="item.title"></v-list-item-title>
                <v-list-item-subtitle v-if="twoLine || threeLine" v-html="item.subtitle"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-group>
              <template v-slot:activator>
                <v-list-item-title>List Group</v-list-item-title>
              </template>
              <v-list-group sub-group>
                <template v-slot:activator>
                  <v-list-item-title>List sub group</v-list-item-title>
                </template>
                <v-list-item>
                  <v-list-item-title>Sub group Item</v-list-item-title>
                </v-list-item>
              </v-list-group>
            </v-list-group>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "listDefault",
  data: () => ({
    item: 5,
    items: [
      {
        title: 'Brunch this weekend?',
        subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
      },
      {
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
      },
      {
        title: 'Oui oui',
        subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
      },
      {
        title: 'Birthday gift',
        subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",
      },
      {
        title: 'Recipe to try',
        subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
      },
    ],
    twoLine: false,
    threeLine: false,
    rounded: false,
    elevation: 3,
  }),
}
</script>

<style scoped>

</style>