<template>
  <div class="about">

    <h2>Přidej cvik</h2>
      <v-btn @click="exercises.push(createExercise())" class="mx-2" fab dark color="indigo">
      <v-icon dark>mdi-plus</v-icon>
    </v-btn>

    <create-workout-form 
      v-for="(exercise, index) in exercises" 
      :key="index" 
      v-bind:exerciseName="exercise.exerciseName"
      v-bind:setCount="exercise.setCount"
      v-bind:repeatCount="exercise.repeatCount"
      v-bind:weight="exercise.weight"
      v-bind:isCustom="exercise.isCustom"
      v-bind:series="exercise.series"
      v-bind:time="exercise.time"
     />
    
  </div>
</template>

<script>

import CreateWorkoutForm from '@/components/CreateWorkoutForm.vue';
export default {
    data() {
      return {
        title: '',
        finishedDate: '',
        open: true,
        exercises: [this.createExercise()]
      }
    },
  components: {
    CreateWorkoutForm
  },
  methods: {
    createExercise() {
      return {
          exerciseName: "",
          setCount: 1,
          repeatCount: 1,
          weight: 1,
          isCustom: false,
          time: 0,
          series: []
      }
    }
  }
 
}
</script>
