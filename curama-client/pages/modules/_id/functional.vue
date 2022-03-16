<template>
  <div class="module-functional-page">
    <ModuleFunctional/>
  </div>
</template>

<script>
import ModuleFunctional from '@/components/ModuleFunctional/index';

export default {
  layout: 'module',
  components: {
    ModuleFunctional
  },
  data () {
    return {

    }
  },
}
</script>

<style lang="scss" scoped>
  .module-functional-page {
    height: calc(100vh - 48px);
  }
</style>
