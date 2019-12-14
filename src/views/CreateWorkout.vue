<template>
  <div class="about">

    <h2>Přidej cvik</h2>
      <v-btn @click="exercises.push(createExercise())" class="mx-2" fab dark color="indigo">
      <v-icon dark>mdi-plus</v-icon>
    </v-btn>

    <create-workout-form 
      v-for="index in exercises.length +1" 
      :key="index" 
      v-on:erase="eraseExercise($event)"
      v-on:save="saveExercise($event)"
     />
    
  </div>
</template>

<script>
let exerciseId = 1;

import CreateWorkoutForm from '@/components/CreateWorkoutForm.vue';
export default {
    data() {
      return {
        title: '',
        finishedDate: '',
        open: true,
        exercises: []
      }
    },
  components: {
    CreateWorkoutForm
  },
  methods: {
    createExercise() {
      return {
          exerciseId: exerciseId++,
          exerciseName: "",
          setCount: 1,
          repeatCount: 1,
          weight: 1,
          isCustom: false,
          time: 0,
          series: []
      }
    },
    eraseExercise(data) {
     /* let arr = [];
     for( var i = 0; i < this.exercises.length; i++ ) {
       console.log(this.exerciseId);
       if (this.exercises[i].exerciseId != data) {
         arr.push(this.exercises[i]);
        
       };
     } */
     this.exercises = this.exercises.filter(exercise => exercise.exerciseId !== data)
    },
    saveExercise(event) {
      this.exercises.push(event);
    }
  }
}
 

</script>
