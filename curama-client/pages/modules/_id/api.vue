<template>
  <div class="module-api-page">
    <ModuleAPI/>
  </div>
</template>

<script>
import ModuleAPI from '@/components/ModuleAPI/index';

export default {
  layout: 'module',
  components: {
    ModuleAPI
  },
  data () {
    return {

    }
  },
}
</script>

<style lang="scss" scoped>
  .module-api-page {
    height: calc(100vh - 48px);
  }
</style>
