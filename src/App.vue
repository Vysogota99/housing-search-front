<template>
  <v-app class="app">
    <header-component/>
    <router-view>Router</router-view>
    <v-footer>
      <span>&copy; 2020 HousingSearch</span>
    </v-footer>
  </v-app>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
export default {
  name: 'App',

  components: {
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
