<template>
  <div class="about">

    <h2>Vytvoř workout</h2>

    <create-workout-form 
      v-for="index in exercises.length +1" 
      :key="index" 
      v-on:erase="eraseExercise($event)"
      v-on:save="saveExercise($event)"
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
        exercises: []
      }
    },
  components: {
    CreateWorkoutForm
  },
  methods: {

    eraseExercise(data) {
/*      let arr = [];
     for( var i = 0; i < this.exercises.length; i++ ) {
       console.log(this.exerciseId);
       if (this.exercises[i].exerciseId != data) {
         arr.push(this.exercises[i]);
        
       };
     } 
     this.exercises = this.exercises.filter(exercise => exercise.exerciseId !== data) */
    },
    saveExercise(event) {
      this.exercises.push(event);
    }
  }
}
 

</script>
