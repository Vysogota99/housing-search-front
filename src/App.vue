<template>
  <v-app class="app">
    <header-component/>
    <div class="content">
      <router-view>Router</router-view>
    </div>
    <!-- <v-footer>
      <span>&copy; 2020 HousingSearch</span>
    </v-footer> -->
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
.content{
}
app{
  display: flex;
  flex-direction: column;
  justify-content: start;
}
</style>
