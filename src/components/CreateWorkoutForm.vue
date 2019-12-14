<template>
  <div>
    <v-card max-width="400" class="mx-auto">
      <v-container>
        <v-row dense>
          <v-col cols="12">
            <v-card color="#385F73" dark>
              <v-card-title class="headline">
                <v-select
                  :items="['TGU', 'dřep', 'swing']"
                  label="Vyber cvik"
                  solo
                ></v-select>
              </v-card-title>

              <v-card-subtitle>
                <v-row>
                  <v-col cols="12" md="3">
                    <v-text-field
                      type="number"
                      v-model="setCount"
                      label="Počet sérií"
                      required
                      @input="onSetCountInput"
                      
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="3">
                    <v-text-field
                      type="number"
                      v-model="repeatCount"
                      label="Počet opakování"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="3">
                    <v-text-field
                      type="number"
                      v-model="weight"
                      label="Váha"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="3">
                    <!-- <v-checkbox v-model="isCustom" /> -->

                    <v-switch v-model="isCustom" class="ma-2" label=""></v-switch>

                  </v-col>
                </v-row>

               <div v-if="isCustom">
                  <v-row v-for="n in series" 
                      :key="n.seriesNumber"
                      >
                  <v-col cols="12" md="3">
                    <v-text-field
                      type="number"
                      v-model="n.seriesNumber"
                      label="Série"
                      disabled="disabled"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="3">
                    <v-text-field
                      type="number"
                      v-model="n.repeatCount"
                      label="Počet opakování"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="3">
                    <v-text-field
                      type="number"
                      v-model="n.weight"
                      label="Váha"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
               </div>
              </v-card-subtitle>
            </v-card>
          </v-col>

        
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      setCount: 1,
      repeatCount: 1,
      weight: 1,
      isCustom: false,
      series: [],
    }
  },
  computed: {
      setCountComputed: {
    // getter
    get: function () {
      return this.setCount
    },
    // setter
    set: function (newValue) {
      newValue > 0 && (this.setCount = newValue)
    }
  }
  },
  methods: {
    limitNumber(value) {
      console.log(value);
      this.setCountComputed = 1;
      
    },
    createSeries(seriesNumber) {
      return {seriesNumber, 
              repeatCount: this.repeatCount, 
              weight: this.weight};
    },
    onSetCountInput(value) {
      if (this.series.length < value) {
        let count = value - this.series.length
        for (let i=1; i<=count; i++) {
          this.series.push(this.createSeries(this.series.length + i))
        }
      }
    }
  },
  
};
</script>

<style></style>
