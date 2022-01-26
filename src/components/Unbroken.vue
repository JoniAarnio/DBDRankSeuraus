<template>
  <div>  
    <b-container class="unbroken-container">
      <b-row>
        <b-col cols="8">
          <b-card title="Unbroken" no-body class="overflow-hidden" fluid border-variant="primary">
            <b-row no-gutters>
              <b-col md="4">
                <b-img center src="../assets/unbroken.png" style="margin-top:10%;"></b-img>
              </b-col>
              <b-col md="8">
                <b-card-body title="Unbroken">
                  <b-card-text>
                    <div id="info" >
                      <b-button v-b-toggle.collapse-1 variant="primary">Näytä yleistietoa Emblemistä</b-button>
                      <b-collapse id="collapse-1" class="mt-2"><br>
                      <p>
                        Toisin kuin muut Emblemit, 
                        mitä enemmän "Unbroken" pisteitä sinulla on, 
                        sitä huonomman Emblemin saat. Pisteet alkavat nollasta ja 
                        kasvavat kun menet maahan tai koukkuun. 
                      </p>
                      <p>
                        Iridescent Emblem vain mahdollista, jos karkaa ilman että on 
                        kertaakaan Dying Statessa. Kulta jos on Dying Statessa ollut mutta pääsee karkuun. Alemmat Emblemit 

                      </p>
                      </b-collapse>
                    </div> <br>

                    <div class="flex">
                      <b-row>
                        <b-form-checkbox id="kuolema" v-model="dead">Kuolitko?</b-form-checkbox>
                      </b-row>
                      <!-- Tämä b-row näkyvissa vain jos 'kuolema' checkbox EI ole valittuna -->
                      <b-row>
                        <b-form-checkbox v-if="dead === false" v-model="dyingState">Jouduitko dying stateen?</b-form-checkbox>
                      </b-row>
                      <!-- Tämä b-row näkyviin vain jos käyttäjä aktivoinut 'kuolema' checkboxin-->
                      <b-row v-if="dead === true">
                        Kuinka monta sekuntia hengissä? (jos yli 9 minuuttia eli 540 sekuntia, vedä palkki 600 sekuntiin)<br>
                        <b-form-input v-model="timeAlive" type="range" min="0" max ="600"></b-form-input><br>
                        Kesto: {{timeAlive}} sekuntia.
                      </b-row>

                      

                    </div>



                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col cols="4" >
          <!-- Tähän kolumniin renderöidään tulokset -->

            <div>
              <b-card>
                <b-card-text>
                  <h1>Tulokset</h1>

                  <h2>{{getAllPoints()}}</h2>
                  <br>
                  <b-img :src="emblemRoute" width="150%"></b-img>
                </b-card-text>
              </b-card>
            </div>
            
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'Unbroken',
  props: {
    msg: String
  },
  data(){
  return {
      allPoints: 0, //kaikki pisteet
      dyingState: false,
      dyingStatePoints: 0,
      timeAlive: 0,
      timeAlivePoints: 0,
      emblemRoute: '',
      dead: false,
      startingValue: 0,
      bMax: 899,
      sMax: 799,
      gMax: 699,
      iMax: 0
    }
  },
  methods: {/* 
    getTimeAlivePoints() {
      this.timeAlivePoints = this.timeAlive;
      return this.timeAlivePoints;
    },
    getDyingStatePoints(){
      if (this.dyingState == false)
      {
        this.dyingStatePoints = 0,
        this.timeAlivePoints = 0;
      } else {
        this.dyingStatePoints = 1;
      }
    },
    getAllPoints() {
      if (dead == false && dyingState == false) {
        this.allPoints = 0;
      } 
      else if (dead == false && dyingState == true) {
          this.allPoints = 1;
        }
      
    } */
    /* getDyingStatePoints(){
      if (this.dyingState == false){
        this.dyingStatePoints = 0;
      }
      else {
        this.dyingStatePoints = 1;
      }

      return this.dyingStatePoints;
    },
    getTimeAlivePoints(){
      if(this.dead == true){
        this.timeAlivePoints = this.timeAlive;
      } else {
        this.timeAlivePoints = 0;
      }
      return this.timeAlivePoints
    }, */

    getTimeAlivePoints(){
        if(this.timeAlive < 300){
          this.timeAlivePoints = 999;
        } else if (this.timeAlive >= 300 && this.timeAlive < 540) {
          this.timeAlivePoints = 899;
        } else if (this.timeAlive >= 540) {
          this.timeAlivePoints = 799;
        } 
        return this.timeAlivePoints;
    },

    getAllPoints(){
      if(this.dead === false && this.dyingState === true) {
        this.dyingStatePoints = 1;
      } else if(this.dead == false && this.dyingState == false) {
        this.dyingStatePoints = 0;
        this.timeAlivePoints = 0;
      } else if(this.dead == true && this.timeAlive < 300){
        this.dyingStatePoints = 1;
        this.timeAlivePoints = 999;
      } else if(this.dead == true && this.timeAlive >= 300 && this.timeAlive < 540){
        this.dyingStatePoints = 1;
        this.timeAlivePoints = 899;
      } else if(this.dead == true && this.timeAlive >= 540){
        this.dyingStatePoints = 1;
        this.timeAlivePoints = 799;
      }

      if (this.allPoints == 0) {
        this.emblemRoute = require('@/assets/unbroken_iri.png')
      } 
      else if (this.allPoints >= 0 && this.allPoints < 799) {
        this.emblemRoute = require('@/assets/unbroken_gold.png')
      } 
      else if (this.allPoints >= 799 && this.allPoints < 899) {
        this.emblemRoute = require('@/assets/unbroken_silver.png')
      }
      else if (this.allPoints >= 899 && this.allPoints < 999) {
        this.emblemRoute = require('@/assets/unbroken_bronze.png')
      }
      else if (this.allPoints >= 270) {
        this.emblemRoute = require('@/assets/unbroken_none.png')
      }


      this.allPoints = + this.dyingStatePoints + this.timeAlivePoints;
      return this.allPoints;

    }
    
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
