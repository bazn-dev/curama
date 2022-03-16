<template>
  <div class="modules-page pa-4">
    <v-row>
      <v-col
        v-for="(module, index) in modules"
        :key="index"
        cols="12"
        md="4"
        sm="6"
      >
        <v-card
          elevation="2"
        >
          <v-card-subtitle>
            <v-icon size="60">{{ module.icon }}</v-icon>
          </v-card-subtitle>
          <v-card-title>{{ module.title }}</v-card-title>
          <v-card-text>{{ module.description }}</v-card-text>
          <v-card-actions class="px-4 pb-4">
            <v-btn outlined @click="send()">Настройка</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-layout justify-space-between wrap>

    </v-layout>
  </div>
</template>

<script>
import ModuleEmitter from '~/api/module/emitters';
import ModuleListeners from '~/api/module/listeners';

export default {
  mixins: [ModuleListeners, ModuleEmitter],
  data () {
    return {
      modules: [
        {
          icon: 'mdi-view-dashboard',
          title: 'Планировщик',
          description: 'Модуль, часто называемая сервисом операционной системы, которая запускает другие программы в зависимости от различных критериев.'
        },
        {
          icon: 'mdi-view-dashboard',
          title: 'Планировщик',
          description: 'Модуль, часто называемая сервисом операционной системы, которая запускает другие программы в зависимости от различных критериев.'
        },
        {
          icon: 'mdi-view-dashboard',
          title: 'Планировщик',
          description: 'Модуль, часто называемая сервисом операционной системы, которая запускает другие программы в зависимости от различных критериев.'
        },
        {
          icon: 'mdi-view-dashboard',
          title: 'Планировщик',
          description: 'Модуль, часто называемая сервисом операционной системы, которая запускает другие программы в зависимости от различных критериев.'
        }
      ],
      right: null,
    }
  },
  methods: {
    redirectTo (id) {
      this.$router.push({
        name: 'modules-id-dashboard',
        params: {
          id
        }
      });
    },
    send () {
      console.log(this.modules);
      this.getModules();
      this.redirectTo(1);
    }
  }
}
</script>

<style lang="scss" scoped>
  .modules-page {
    height: calc(100vh - 40px);
  }
</style>
