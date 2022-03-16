<template>
  <v-card elevation="0" tile class="module-functional">
    <v-row
      class="module-functional__row"
      no-gutters
    >
      <v-col
        cols="12"
        sm="6"
        md="2"
        style="border-right: 1px solid rgba(0, 0, 0, 0.12);"
      >
        <v-layout
          justify-space-between
          align-center
          class="pa-2"
          style="border-bottom: 1px solid rgba(0, 0, 0, 0.12);"
        >
          <div class="subtitle-2">
            Project
          </div>
        </v-layout>
        <v-list-item-group>
          <v-list dense nav class="pa-0">
            <v-list-item>
              <v-list-item-title class="font-weight-bold">
                <v-icon small>folder</v-icon> src
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title class="font-weight-bold">App.vue</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title class="font-weight-bold">index.vue</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-list-item-group>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="6"
        style="border-right: 1px solid rgba(0, 0, 0, 0.12);"
      >
        <v-layout
          justify-space-between
          align-center
          class="pa-2"
          style="border-bottom: 1px solid rgba(0, 0, 0, 0.12);"
        >
          <v-tabs class="module-functional__code-tabs">
            <v-tab class="module-functional__code-tab">
              <div class="subtitle-2">
                App.vue
              </div>
            </v-tab>
            <v-tab class="module-functional__code-tab">
              <div class="subtitle-2">
                index.vue
              </div>
            </v-tab>
          </v-tabs>
        </v-layout>
        <CodeEditor
          width="100%"
          height="calc(100% - 39px)"
          border_radius="0"
          font_size="12px"
          z_index="3"
          :hide_header="true"
          :value="code"
          :autofocus="true"
          @update="updatedCode"
        ></CodeEditor>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <v-layout
          justify-space-between
          align-center
          class="pa-2"
          style="border-bottom: 1px solid rgba(0, 0, 0, 0.12);"
        >
          <div class="subtitle-2">
            Runner
          </div>
        </v-layout>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import CodeEditor from '../CodeEditor/CodeEditor';

export default {
  name: 'ModuleAPI',
  components: {
    CodeEditor
  },
  data() {
    return {
      code: ''
    }
  },
  methods: {
    updatedCode(value) {
      console.log('test', value);
      this.code = value;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/simple-code-editor.theme.css";
@import "../../assets/simple-code-editor.github-dark.min.css";

.module-functional__code-tabs::deep(.v-tabs-bar) {
  height: 39px !important;
}

.module-functional {
  height: 100%;

  &__row {
    height: 100%;
  }

  &__code {
    &-tabs {
      &::deep(.v-tabs-bar) {
        height: 39px !important;
      }
    }

    &-tab {
      padding: 0 5px;
      text-transform: none;
    }
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
