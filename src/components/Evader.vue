<template>
  <div>  
    <b-container class="evader-container">
      <b-row>
        <b-col cols="8">
          <b-card title="Evader" no-body class="overflow-hidden" fluid border-variant="primary">
            <b-row no-gutters>
              <b-col md="4">
                <b-img center src="../assets/evader.png" style="margin-top:10%;"></b-img>
              </b-col>
              <b-col md="8">
                <b-card-body title="Evader">
                  <b-card-text>

                    <div id="info" >
                      <b-button v-b-toggle.collapse-1 variant="primary">Näytä yleistietoa Emblemistä</b-button>
                      <b-collapse id="collapse-1" class="mt-2"><br>
                      <p>
                        Evader emblem on hieman erilainen, ja siihen kuuluu erilaisia etäisyysriippuvaisia asioita. Vaikka jokainen Emblem laskuri tällä sivulla onkin vain suuntaa antava, tämä on vähiten suuntaa antava. Vähän yleistietoa ennen kuin mihinkään muuhun siirrytään. Tähän emblemiin voi tienata pisteitä <b>kahdella</b> eri tavalla: <br><br>
                        1. Olemalla tappajan terror radiuksella ILMAN että tappaja löytää sinut. <br><br>
                        2. Olemalla tappajan takaa-ajamana.
                      </p>
                      
                      <div style="text-align:left;">
                        <b>Teknistä tietoa:</b>
                        <p>
                            5 sekuntia: pieni bufferi, jonka jälkeen peli varsinaisesti laskee sinun karanneen takaa-ajosta. Jos tappaja löytää sinut ja takaa-ajo jatkuu ennen kun tämä aika on kulunut, lasketaan se samaksi takaa-ajoksi.
                        </p>
                        <p>
                            15 sekuntia: takaa-ajon aikana, tämän intervallin välein pisteet päättyvät "pankkiin". Käsittääkseni tämä tarkoittaa sitä, että alle 15 sekuntia kestävät takaa-ajot eivät kerrytä Evader pisteitä.
                        </p>
                        <p>  
                            x2 kerroin: mikäli takaa-ajo päättyy siihen, että selviytyjä onnistuu hukkaamaan tappajan, kertyneet pisteet tuplataan.
                        </p>
                        <p>
                            Takaa-ajon kesto määrittää myös "pohja" pisteet. Mikäli takaa-ajo kestää alle 15 sekuntia, pohjapisteet ovat piste per sekunti.
                            Mikäli takaa-ajo kestää 15-30 sekuntia, pohjapisteet ovat 25p/s. 30-45s = 60p/s. 45-60 = 125p/s. 60+ = 250p/s.
                        </p> 
                      </div>
                      </b-collapse>
                    </div> <br>

                    <div id="TerrorRadius" class="border-bottom border-left" style="padding-left:10px;">
                      <br>
                      <p style="text-align:left;">
                      Kuinka monta sekuntia olet pelin aikana Terror Radiuksen sisällä eri etäisyyksillä ILMAN että tappaja huomaa sinut.
                      </p>
                      5 metrin sisällä tappajasta.
                      <b-form-spinbutton id="inTerrorRadius5" v-model="inTerrorRadius5" type="range" step="1" min="0" value="1" max="100"></b-form-spinbutton><br>
                      10 metrin sisällä tappajasta. 
                      <b-form-spinbutton id="inTerrorRadius10" v-model="inTerrorRadius10" type="range" step="1" min="0" value="1" max="100"></b-form-spinbutton><br>
                      20 metrin sisällä tappajasta. 
                      <b-form-spinbutton id="inTerrorRadius20" v-model="inTerrorRadius20" type="range" step="1" min="0" value="1" max="100"></b-form-spinbutton><br>
                      30 metrin sisällä tappajasta. 
                      <b-form-spinbutton id="inTerrorRadius30" v-model="inTerrorRadius30" type="range" step="1" min="0" value="1" max="100"></b-form-spinbutton><br>
                      45 metrin sisällä tappajasta.
                      <b-form-spinbutton id="inTerrorRadius45" v-model="inTerrorRadius45" type="range" step="1" min="0" value="1" max="100"></b-form-spinbutton><br>
                      64 metrin sisällä tappajasta.
                      <b-form-spinbutton id="inTerrorRadius64" v-model="inTerrorRadius64" type="range" step="1" min="0" value="1" max="500"></b-form-spinbutton><br>
                    </div> <br><br>

                    <div id="ChaseDuration" class="border-bottom border-left" style="padding-left:10px;">
                      <p style="text-align:left;">
                      Kuinka kauan takaa-ajo kestää
                      </p>

                      <b-form-select v-model="selected" :options="options"></b-form-select> <br><br>
                      <b-form-checkbox id="successfulEvasion" v-model="successfulEvasion">Pääsitkö karkuun ottamatta osumaa?</b-form-checkbox>
                      <br>

                    </div> <br><br>

                    <div id="ChaseDistance" class="border-bottom border-left" style="padding-left:10px;">
                      <br>
                      <p style="text-align:left;">
                      Kuinka monta sekuntia olet pelin aikana aktiivisessa takaa-ajossa?
                      </p>
                      5 metrin sisällä tappajasta.
                      <b-form-spinbutton id="inChaseRadius5" v-model="inChaseRadius5" type="range" step="1" min="0" value="1" max="100"></b-form-spinbutton><br>
                      10 metrin sisällä tappajasta. 
                      <b-form-spinbutton id="inChaseRadius10" v-model="inChaseRadius10" type="range" step="1" min="0" value="1" max="100"></b-form-spinbutton><br>
                      20 metrin sisällä tappajasta. 
                      <b-form-spinbutton id="inChaseRadius20" v-model="inChaseRadius20" type="range" step="1" min="0" value="1" max="100"></b-form-spinbutton><br>
                      30 metrin sisällä tappajasta. 
                      <b-form-spinbutton id="inChaseRadius30" v-model="inChaseRadius30" type="range" step="1" min="0" value="1" max="100"></b-form-spinbutton><br>
                      45 metrin sisällä tappajasta.
                      <b-form-spinbutton id="inChaseRadius45" v-model="inChaseRadius45" type="range" step="1" min="0" value="1" max="100"></b-form-spinbutton><br>
                      64 metrin sisällä tappajasta.
                      <b-form-spinbutton id="inChaseRadius60" v-model="inChaseRadius60" type="range" step="1" min="0" value="1" max="500"></b-form-spinbutton><br>
                    </div> <br><br>

                    <h2> {{getCombinedPoints().toFixed(2)}} </h2>

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
                  <h3 style="text-align:left;">Bronze: </h3><br>
                  <b-progress :value="combinedPoints" :max="bMax" variant="dark"></b-progress>
                  <h3 style="text-align:left;">Silver: </h3><br>
                  <b-progress :value="combinedPoints" :max="sMax" variant="secondary"></b-progress>
                  <h3 style="text-align:left;">Gold: </h3><br>
                  <b-progress :value="combinedPoints" :max="gMax" variant="warning"></b-progress>
                  <h3 style="text-align:left;">Iridescent: </h3><br>
                  <b-progress :value="combinedPoints" :max="iMax" variant="danger"></b-progress>
                  <br>
                  <h2>{{getCombinedPoints()}}</h2>
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
  name: 'Evader',
  props: {
    msg: String
  },
  data() {
    return {
      startingValue: 100, //Peli alkaa 100:lla Evader pisteellä.
      combinedPoints: 0,
      //Terror radiuksella X (inTerrorRadiusX) metrin sisällä tappajasta huomaamatta.
      inTerrorRadius5 : 0, 
      inTerrorRadius10 : 0,
      inTerrorRadius20 : 0,
      inTerrorRadius30 : 0,
      inTerrorRadius45 : 0,
      inTerrorRadius64 : 0,
      inChaseRadius5: 0,
      inChaseRadius10: 0,
      inChaseRadius20: 0,
      inChaseRadius30: 0,
      inChaseRadius45: 0,
      inChaseRadius60: 0,
      successfulEvasion: false,
      emblemRoute: "",

      selected: 1,
      options: [
        {value: 1, text:"0-15 sekuntia"},
        {value: 25, text:"15-30 sekuntia"},
        {value:60, text:"30-45 sekuntia"},
        {value: 125, text:"45-60 sekuntia"},
        {value:250, text: "60+ sekuntia"}
      ],

      bMax: 230,
      sMax: 380,
      gMax: 560,
      iMax: 880,

      inChase: 0,
      durationOptions: [
        {}
        ], //Pisteet tappajan VIIMEISESTÄ juoksuttamisesta
      hitDuringChase: 0, //Pisteet, jotka menettää jos tappaja osuu sinuun kesken takaa-ajon
      palletStun: 0 //Pisteet jotka saa, jos tappajan onnistuu stunnaamaan palletilla
    }
  }, methods: {
    getInTerrorRadiusPoints () {
      this.inTerrorRadiusPoints = 
      this.inTerrorRadius5* 6 + 
      this.inTerrorRadius10 * 2.2 +
      this.inTerrorRadius20 * 1.1 + 
      this.inTerrorRadius30 * 0.5 + 
      this.inTerrorRadius45 * 0.3 +
      this.inTerrorRadius64 * 0.1;

      return this.inTerrorRadiusPoints;
    },
    getInChaseRadiusPoints(){
      this.inChaseRadiusPoints = this.inChaseRadius5 * 1.2 +
      this.inChaseRadius10 * 0.6 +
      this.inChaseRadius20 * 0.6 +
      this.inChaseRadius30 * 0.3 +
      this.inChaseRadius45 * 0.3 +
      this.inChaseRadius60 * 0.1 + this.selected;

      if(this.successfulEvasion === true){
        return this.inChaseRadiusPoints * 2;
      } else {
        return this.inChaseRadiusPoints - 10;
      }
    },
    getCombinedPoints() {

      this.combinedPoints = this.startingValue + this.inChaseRadiusPoints + this.inTerrorRadiusPoints

      this.getInTerrorRadiusPoints()
      this.getInChaseRadiusPoints()

      if(this.successfulEvasion === true){
         this.inChaseRadiusPoints = this.inChaseRadiusPoints * 2;
      } else {
         this.inChaseRadiusPoints;
      }


      if (this.combinedPoints == 0) {
        this.emblemRoute = require('@/assets/evader_none.png')
      } 
      else if (this.combinedPoints >= 230 && this.combinedPoints < 380) {
        this.emblemRoute = require('@/assets/lightbringer_bronze.png')
      } 
      else if (this.combinedPoints >= 380 && this.combinedPoints < 560) {
        this.emblemRoute = require('@/assets/lightbringer_silver.png')
      }
      else if (this.combinedPoints >= 560 && this.combinedPoints < 880) {
        this.emblemRoute = require('@/assets/lightbringer_gold.png')
      }
      else if (this.combinedPoints >= 880) {
        this.emblemRoute = require('@/assets/lightbringer_iri.png')
      }

      return this.startingValue + this.inTerrorRadiusPoints + this.inChaseRadiusPoints;
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
