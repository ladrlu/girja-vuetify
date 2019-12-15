<template>
  <div class="about">

    <h2>Vytvoř sestavu</h2>
        <v-btn @click="saveWorkout()" class="mx-2" dark color="indigo">
      {{btnText}}
    </v-btn>
    
        <router-link dark to="/runworkout"><v-btn dark color="indigo">Cvičit</v-btn></router-link>
   
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
        finishedDate: '',
        open: true,
        exercises: [],
        btnText: "Uložit sestavu"
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
      console.log(this.exercises)
    },
    saveWorkout() {
      let exercises = {
        exercises: this.exercises
      }
      this.$store.commit('add', exercises);
     console.log(this.$store.state.workout)
     this.btnText = "✔"
    }
  }
}
 

</script>

<style scoped>

.about {
  text-align: center;
}

h2 {
  margin: 20px 0;
  text-transform: uppercase;
}
a {
  color: white !important;
  text-decoration: none;
}
button {
  margin: 10px 30px 50px 30px;
}

</style>
