<template>
  <v-app class="app">
    <header-component/>
    <signup-component/>
  </v-app>
</template>

<script>
import SignupComponent from './components/SignupComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
export default {
  name: 'App',

  components: {
    SignupComponent,
    HeaderComponent,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
app{
  display: flex;
  flex-direction: column;
  justify-content: start;
}
</style>
