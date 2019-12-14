<template>
  
<v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      color="blue-grey lighten-4"
    >
      <v-list rounded>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title> <router-link to="/">Domů</router-link> </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title><router-link to="/createWorkout">Vytvořit trénink</router-link></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title><router-link to="/runWorkout">Cvičit trénink</router-link></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="blue-grey"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Tady skončil můj život</v-toolbar-title>
    </v-app-bar>

    <v-content>
       <router-view></router-view>
    </v-content>

    <v-footer
      color="blue-grey"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    //
     drawer: null, 
  }),
};
</script>

<style scoped>

a {
  text-decoration: none;
  color: black;
}

</style>
