<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Name of step 1</v-stepper-step>

      <v-divider></v-divider>

    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card class="mb-12" color="grey lighten-1" height="200px">
          <series-counter />

        </v-card>

        <v-btn color="primary" @click="e1 = 2">
          Další cvik
        </v-btn>

        <v-btn text>Prdím na to</v-btn>
      </v-stepper-content>


    </v-stepper-items>
  </v-stepper>
</template>


<script>
  import SeriesCounter from '../components/SeriesCounter.vue';

  export default {
    data() {
      return {
        title: 'cviceni1',
        finishedDate: '21.1.2019',
        open: true,
        exercises: [
          { 
            exerciseName: null,
            setCount: 1,
            repeatCount: 1,
            weight: 1,
            isCustom: true,
            series: [{seriesNumber:1,repeatCount:5,weight:15},{seriesNumber:2,repeatCount:5,weight:15},{seriesNumber:3,repeatCount:5,weight:15}]
          }
        ]
      }
    },
    components: {
      SeriesCounter,
    }
  }
</script>

<style lang="stylus" scoped>

</style>