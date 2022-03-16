<template>
  <div class="module-database-page">
    <ModuleDatabaseCollections/>
  </div>
</template>

<script>
import ModuleDatabaseCollections from '@/components/ModuleDatabase/ModuleDatabaseCollections';

export default {
  layout: 'module',
  components: {
    ModuleDatabaseCollections
  },
  data () {
    return {

    }
  },
}
</script>

<style lang="scss" scoped>
  .module-database-page {
    height: calc(100vh - 48px);
  }
</style>
