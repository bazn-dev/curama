<template>
  <div class="auth-page">
    <AuthForm/>
  </div>
</template>

<script>
import AuthForm from '~/components/Auth/AuthForm'

  export default {
    layout: 'empty',
    components: {
      AuthForm
    }
  }
</script>

<style lang="scss" scoped>
  .auth-page {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    //background-color: #000000;
  }
</style>
