import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    workouts: [
      {
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
    ]

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
