<template>
  <v-card width="400" class="pa-4">
    <v-card-title>Авторизуйся!</v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          type="text"
          label="Логин"
        ></v-text-field>
        <v-text-field
          type="password"
          label="Пароль"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-layout justify-center>
        <v-btn dark>Проверь</v-btn>
      </v-layout>
    </v-card-actions>
  </v-card>

</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

</style>
