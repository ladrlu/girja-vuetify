<template>
  
<v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      color="blue lighten-4"
    >
      <v-list rounded>
        <v-list-item link>
          <v-list-item-content>
            <router-link to="/"><v-list-item-title>Domů</v-list-item-title></router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <router-link to="/createworkout"><v-list-item-title>Vytvořit trénink</v-list-item-title></router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <router-link to="/runworkout"><v-list-item-title>Cvičit trénink</v-list-item-title></router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="blue"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Nejede to, ale jsme tu</v-toolbar-title>
    </v-app-bar>

    <v-content>
       <router-view></router-view>
    </v-content>

    <v-footer
      color="blue"
      app
    >
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
