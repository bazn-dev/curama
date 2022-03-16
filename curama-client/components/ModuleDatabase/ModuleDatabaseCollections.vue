<template>
  <v-card elevation="0" tile class="module-database-collections">
    <v-row
      class="module-database-collections__row"
      no-gutters
    >
      <v-col
        cols="12"
        sm="6"
        md="3"
        style="border-right: 1px solid rgba(0, 0, 0, 0.12);"
      >
        <v-layout justify-space-between align-center class="pa-2">
          <div class="subtitle-2">
            Collections
          </div>
          <v-btn x-small outlined>new</v-btn>
        </v-layout>
        <v-list-item-group>
          <v-list dense nav class="pa-0">
            <v-list-item>
              <v-list-item-title class="font-weight-bold">price</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-list-item-group>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="9"
        class="pa-2"
      >
        <v-layout justify-space-between align-center class="mb-3">
          <div class="subtitle-2">
            Test Collections
          </div>
          <v-layout justify-end>
            <v-btn x-small class="mr-2">new index</v-btn>
            <v-btn x-small>settings</v-btn>
          </v-layout>
        </v-layout>

        <v-expansion-panels>
          <v-expansion-panel
            v-for="(item,i) in 5"
            :key="i"
          >
            <v-expansion-panel-header
              hide-actions
              class="py-0 px-2"
            >
              <v-layout justify-space-between align-center>
                <div>
                  ObjectId('fsdf8u8du83euj93')
                </div>
                <v-layout justify-end>
                  <v-btn x-small text fab class="mr-2">
                    <v-icon small>edit</v-icon>
                  </v-btn>
                  <v-btn x-small text fab>
                    <v-icon small>delete</v-icon>
                  </v-btn>
                </v-layout>
              </v-layout>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div class="module-database-collections__code-wrapper">
                <code>
                 {
                    "ref": Ref(Collection("price"), "304207683407315010"),
                    "ts": 1626373904520000,
                    "data": {
                      "title": "Title"
                    }
                 }
                </code>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'ModuleDatabaseCollections'
}
</script>

<style lang="scss" scoped>
  .module-database-collections {
    height: 100%;

    &__row {
      height: 100%;
    }

    &__code-wrapper {
      background: #eeeff3;
      padding: 5px;

      code {
        background-color: transparent;
        color: blue;
      }
    }
  }

</style>
