<template>
  <v-app>
    <v-navigation-drawer
      fixed
      permanent
      mini-variant
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <v-icon class="black--text">{{ 'mdi-crosshairs-gps' }}</v-icon>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list dense nav>
        <v-tooltip
          v-for="item in navItems"
          :key="item.title"
          right
        >
          <template v-slot:activator="{ on, attrs }">
            <v-list-item
              link
              v-bind="attrs"
              v-on="on"
              @click="redirectTo(item.name)"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
          <span>{{ item.title }}</span>
        </v-tooltip>
      </v-list>
    </v-navigation-drawer>

    <section class="main-section">
      <v-app-bar flat elevate-on-scroll class="main-section__app-bar">
        <v-toolbar-title class="main-section__app-bar-title">{{ 'Planner' }}</v-toolbar-title>
      </v-app-bar>
      <nuxt/>
    </section>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        navItems: [
          { title: 'Dashboard', name: 'dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Интерфейс', name: 'interface', icon: 'mdi-desktop-mac-dashboard' },
          { title: 'База данных', name: 'database', icon: 'mdi-database' },
          { title: 'Диалоги', name: 'dialogs', icon: 'mdi-forum' },
          { title: 'API', name: 'api', icon: 'mdi-api' },
          { title: 'Функционал', name: 'functional', icon: 'mdi-code-tags' },
          { title: 'Интеграции', name: 'integrations', icon: 'mdi-source-pull' },
          { title: 'Виджеты', name: 'widgets', icon: 'mdi-widgets' },
          { title: 'Настройки', name: 'settings', icon: 'mdi-cog' },
        ],
        right: null,
      }
    },
    computed: {
      getTitle() {
        return this.navItems?.filter(item => item?.name === this.$route.name)[0]?.title;
      }
    },
    methods: {
      redirectTo (name) {
        this.$router.push({
          name: `modules-id-${name}`,
          params: {
            id: this.$route.params.id
          }
        });
      }
    }
  }
</script>

<style lang="scss">
  .main-section {
    width: calc(100% - 56px);
    margin-left: 56px;
    background-color: #f6f6f9;

    &__app-bar {
      height: 48px !important;
      background-color: #ffffff !important;
      border-bottom: 1px solid;
      border-color: rgba(0, 0, 0, 0.12) !important;
    }

    &__app-bar-title {
      font-size: 18px;
      font-weight: 500;
      color: #626366;
    }
  }
</style>
