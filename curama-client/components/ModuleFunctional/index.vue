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
        <v-list dense nav class="pa-0">
          <v-list-item-group>
            <v-list-item class="mb-0">
              <v-list-item-title class="align-center font-weight-bold">
                <v-icon small>folder</v-icon> src
              </v-list-item-title>
            </v-list-item>
            <v-list-item class="mb-0">
              <v-list-item-title class="align-center font-weight-bold">
                <v-icon small>description</v-icon> App.vue
              </v-list-item-title>
            </v-list-item>
            <v-list-item class="mb-0">
              <v-list-item-title class="align-center font-weight-bold">
                <v-icon small>description</v-icon> index.vue
              </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
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
          style="border-bottom: 1px solid rgba(0, 0, 0, 0.12);"
        >
          <v-tabs
            class="module-functional__code-tabs"
            height="38"
          >
            <v-tab class="module-functional__code-tab">
              <v-icon small>description</v-icon>
              <div class="caption font-weight-medium">
                App.vue
              </div>
              <v-icon small>close</v-icon>
            </v-tab>
            <v-tab class="module-functional__code-tab">
              <v-icon small>description</v-icon>
              <div class="caption font-weight-medium">
                index.vue
              </div>
              <v-icon small>close</v-icon>
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
          <div>
            <div class="subtitle-2">
              Runner
            </div>
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
      justify-content: space-between;
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
