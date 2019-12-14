<template>
  
<v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title> <router-link to="@/views/Homepage.vue">Domů</router-link> </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title><router-link to="@/views/CreateWorkout.vue">Vytvořit trénink</router-link></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title><router-link to="@/views/RunWorkout.vue">Cvičit trénink</router-link></v-list-item-title>
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
