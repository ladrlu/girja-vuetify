<template>
<v-card class="container" max-width="400">
  <v-stepper v-model="e1">
    <v-stepper-header>
      <div v-for="(exercise, index) in workout" :key="index">
        <v-stepper-step :complete="e1 > index+1" v-bind:step="index+1">{{exercise.exerciseName}}</v-stepper-step>
        <v-divider></v-divider>
      </div>


    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content v-for="(exercise, index) in workout" :key="index" v-bind:step="index+1">
        <v-card class="mb-12 content" color="grey lighten-5" height="200px">
             <div>počet opakování: {{ exercise.repeatCount}}</div>
             <div>váha: {{ exercise.weight}} kg</div>
          <div class="counter">
            <v-btn  @click="exercise.setCount > 0 ? exercise.setCount-- : exercise.setCount = 0" class="mx-2" fab dark color="indigo">
              <v-icon dark>mdi-minus</v-icon>
            </v-btn>
            
            <h1>{{ exercise.setCount}}</h1>
 
          </div>

        </v-card>

        <v-btn color="indigo" dark @click="e1 = e1+1">
          Další cvik
        </v-btn>

        <v-btn text><router-link to="/">Du dom</router-link></v-btn>

      </v-stepper-content>


    </v-stepper-items>
  </v-stepper>
  </v-card>
</template>


<script>
  import SeriesCounter from '../components/SeriesCounter.vue';
  export default {
    data() {
      return {
        e1: 1
      }
    },

    computed: {
      workout() {
        return this.$store.state.workout[0].exercises;
      }
    },
    methods: {
    decreaseCountOfSeries() {
        if (exercise.setCount > 0) {
          exercise.setCount--;
        }
      },
      
    },
  }
</script>

<style scoped>
.counter {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 30px 0;
  }
  a{
    text-decoration: none;
    color: white;

  }
  .content {
    padding: 15px;
  }
  .container {
    margin: 30px auto 0 auto;
  }
  button {
    color: white;
  }



</style> 