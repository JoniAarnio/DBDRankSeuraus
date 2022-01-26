<template>
  <div>  
    <b-container class="benevolent-container">
      <b-row>
        <b-col cols="8">
          <b-card title="Benevolent" no-body class="overflow-hidden" fluid border-variant="primary">
            <b-row>
              <b-col md="4">
                <b-img center src="../assets/benevolent.png" style="margin-top:10%;"></b-img>
              </b-col>
              <b-col md="8">
                <!-- Tässä kolumnissa syötetään tiedot -->
                <b-card-body title="Benevolent">
                  <b-card-text>
                    <div id="healingpoints" class="border-bottom">
                      Aloittaa 35:stä pisteestä. <br><br>
                      Arvioitu muiden selviytyjien parantamisen määrä prosentteina. Huom. Jaettu parantaminen jakaa pisteet parantajien kesken. 
                      <b-form-input id="healingvalue" v-model="healingvalue" type="range" min="0" max="500" step="1" ></b-form-input>
                      Määrä: {{healingvalue}}%<br>
                      Pisteet: {{getHealingPoints()}}.<br><br>
                    </div>
                    
                    <br>

                    <div id="survivorhookpoints" class="border-bottom">
                      Kuinka monta kertaa selviytyjiä on laitettu koukkuun.
                      <b-form-input id="survivorHooks" v-model="survivorHooks" type="range" min="0" max="12" step="1"></b-form-input>
                      Määrä:  {{survivorHooks}}<br>
                      Pisteet: {{getSurvivorHookPoints()}} .<br><br>
                    </div>
                    
                    <br>

                    <div id="survivorsUnhookedGeneral" class="border-bottom">
                      Kuinka monta kertaa selviytyjiä ollaan nostettu koukuista pelin aikana.
                      <b-form-input id="survivorsUnhookedGeneral" v-model="survivorsUnhookedGeneral" type="range" min="0" max="12" step="1"></b-form-input>
                      Määrä: {{survivorsUnhookedGeneral}}<br>
                      Pisteet: {{getSurvivorsUnhookedGeneralPoints()}}.<br><br>
                    </div>
                      
                      <br>

                    <div id="survivorsUnhookedSelf" class="border-bottom">
                      Kuinka monta kertaa pelaaja itse nostaa toisia selviytyjiä koukuista.
                      <b-form-input id="survivorsUnhookedSelf" v-model="survivorsUnhookedSelf" type="range" min="0" max="6" step="1"></b-form-input>
                      Määrä: {{survivorsUnhookedSelf}}<br>
                      Pisteet: {{getSurvivorsUnhookedSelfPoints()}}.<br><br>
                    </div>
                    
                    <br>

                    <div id="unsafeUnhook" class="border-bottom">
                      Kuinka monta kertaa pelaajan pelastama selviytyjä menee takaisin maahan 10 sekunnin sisällä (Unsafe Unhook).
                      <b-form-input id="unsafeUnhook" v-model="unsafeUnhook" type="range" min="0" max="6" step="1"></b-form-input>
                      Määrä: {{unsafeUnhook}}<br>
                      Pisteet: {{getUnsafeUnhookPoints()}}.<br><br>
                    </div>
                    
                    <br>

                    <div id="hookHit" class="border-bottom">
                      Otetut osumat kun tappaja kantaa toista selviytyjää.
                      <b-form-input id="hookHit" v-model="hookHit" type="range" min="0" max="10" step="1"></b-form-input>
                      Määrä: {{hookHit}} <br>
                      Pisteet: {{getHookHitPoints()}}.<br><br>
                    </div>
                    
                    <br>

                    <div id="killerGraspSave" class="border-bottom">
                      Tappajan kantaman selviytyjän pelastaminen (esim. palletin pudottaminen tappajan päälle kun selviytyjä olkapäällä).
                      <b-form-input id="killerGraspSave" v-model="killerGraspSave" type="range" min="0" max="12" step="1"></b-form-input>
                      Määrä: {{killerGraspSave}} <br>
                      Pisteet: {{getKillerGraspSavePoints()}}.<br><br>
                    </div>
                    
                    <br>

                    <div id="killerGraspSaveSabotage" class="border-bottom">
                      Tappajan kantaman selviytyjän pelastaminen lähellä olevan koukun sabotoinnin avulla.
                      <b-form-input id="killerGraspSaveSabotage" v-model="killerGraspSaveSabotage" type="range" min="0" max="10" step="1"></b-form-input>
                      Määrä: {{killerGraspSaveSabotage}}<br>
                      Pisteet: {{getKillerGraspSaveSabotagePoints()}}.<br><br>
                    </div>

                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
          <b-col cols="4">
          <!-- Tähän kolumniin renderöidään tulokset -->
            <div>
              <b-card>
                <b-card-text>
                  <h1>Tulokset</h1>
                  <h3 style="text-align:left;">Bronze: </h3><br>
                  <b-progress :value="allPoints" :max="bMax" variant="dark"></b-progress>
                  <h3 style="text-align:left;">Silver: </h3><br>
                  <b-progress :value="allPoints" :max="sMax" variant="secondary"></b-progress>
                  <h3 style="text-align:left;">Gold: </h3><br>
                  <b-progress :value="allPoints" :max="gMax" variant="warning"></b-progress>
                  <h3 style="text-align:left;">Iridescent: </h3><br>
                  <b-progress :value="allPoints" :max="iMax" variant="danger"></b-progress>
                  <br>
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
  name: 'Benevolent',
  props: {
    msg: String
  },
  data() {
    return {
      startingValue: 35,
      healingvalue: 0, //10 per täysi heal
      survivorHooks: 0,
      survivorsUnhookedGeneral: 0, //kaikille
      survivorsUnhookedSelf: 0, //vain unhookkaajalle
      unsafeUnhook: 0, //vain unhookkaajalle
      hookHit: 0, //jos killer lyö sinua kantaessaan toista survivoria
      killerGraspSave: 0,
      killerGraspSaveSabotage: 0,
      bMax: 25,
      sMax: 45,
      gMax: 75,
      iMax: 100,
      emblemRoute: ''
    }
  },
  methods: {
    //Store ongelmia. Ei laske eri komponenttien pisteitä yhteen.
    storePoints(){
      this.combinedPoints = this.$store.state.points.combinedpoints + this.allPoints;
      return this.combinedPoints;
    },
    getHealingPoints() {
      this.healingPoints = this.healingvalue * 0.1;
      return this.healingPoints.toPrecision(2); //Palautetaan 2 desimaalin tarkkuudella. Vältetään numerolitanja.
    },
    getSurvivorHookPoints() {
      this.survivorHookPoints = this.survivorHooks * -10;
      return this.survivorHookPoints;
    },
     getSurvivorsUnhookedGeneralPoints() {
      this.survivorsUnhookedGeneralPoints = this.survivorsUnhookedGeneral * 10;
      return this.survivorsUnhookedGeneralPoints;
    },
    getSurvivorsUnhookedSelfPoints() {
      this.survivorsUnhookedSelfPoints = this.survivorsUnhookedSelf * 20;
      return this.survivorsUnhookedSelfPoints;
    },
    getUnsafeUnhookPoints(){
      this.unsafeUnhookPoints = this.unsafeUnhook * -30;
      return this.unsafeUnhookPoints;
    },
    getHookHitPoints() {
      this.hookHitPoints = this.hookHit * 10;
      return this.hookHitPoints;
    },
    getKillerGraspSavePoints() {
      this.killerGraspSavePoints = this.killerGraspSave * 30;
      return this.killerGraspSavePoints;
    },
    getKillerGraspSaveSabotagePoints() {
      this.killerGraspSaveSabotagePoints = this.killerGraspSaveSabotage * 10;
      return this.killerGraspSaveSabotagePoints;
    },
    getAllPoints() {

      this.allPoints = this.startingValue + this.healingPoints + 
      this.survivorHookPoints + this.survivorsUnhookedGeneralPoints + 
      this.survivorsUnhookedSelfPoints + this.unsafeUnhookPoints + 
      this.hookHitPoints + this.killerGraspSavePoints + 
      this.killerGraspSaveSabotagePoints;


      if (this.allPoints < 25) {
        this.emblemRoute = require('@/assets/benevolent_none.png')
      } 
      else if (this.allPoints >= 25 && this.allPoints < 35) {
        this.emblemRoute = require('@/assets/benevolent_bronze.png')
      } 
      else if (this.allPoints >= 35 && this.allPoints < 75) {
        this.emblemRoute = require('@/assets/benevolent_silver.png')
      }
      else if (this.allPoints >= 75 && this.allPoints < 100) {
        this.emblemRoute = require('@/assets/benevolent_gold.png')
      }
      else if (this.allPoints >= 100) {
        this.emblemRoute = require('@/assets/benevolent_iri.png')
      }

      return this.allPoints;
    } /**/

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
