<template>
<v-card>
  <v-progress-linear color="light-blue" height="10" v-bind:value="countOfSeries/sumOfSeries*100" striped></v-progress-linear>
  <div class="counter">
      <v-btn @click="decreaseCountOfSeries()" class="mx-2" fab dark color="indigo">
      <v-icon dark>mdi-minus</v-icon>
    </v-btn>
    <h1>{{countOfSeries}}/{{sumOfSeries}}</h1>

    <v-btn @click="increaseCountOfSeries()" class="mx-2" fab dark color="indigo">
      <v-icon dark>mdi-plus</v-icon>
    </v-btn>
    </div>
    <div>
    <v-btn @click="countDownTimer()" class="mx-2" fab dark color="indigo">
      start
    </v-btn>
  {{ countDown }}
  </div>

</v-card>
  
</template>

<script>
  export default {
    data () {
      return {
        countOfSeries: 1,
        sumOfSeries: 10,
        countDown: 10
      }
    },
    methods: {
      decreaseCountOfSeries() {
        if (this.countOfSeries > 0) {
          this.countOfSeries --;
        }
      },
      increaseCountOfSeries() {
        if (this.countOfSeries < this.sumOfSeries ) {
          this.countOfSeries ++;
        }
      },
      countDownTimer() {
        if(this.countDown > 0) {
          setTimeout(() => {
           this.countDown -= 1
           this.countDownTimer()
          }, 1000);
        }
        else {
          this.countOfSeries ++;
        }
        
      }
    }
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
</style>