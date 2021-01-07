<template>
  <div>  
    <b-container class="lightbringer-container">
      <b-row>
        <!-- <b-col> -->
          <b-card title="Lightbringer" no-body class="overflow-hidden" fluid border-variant="primary">
            <b-row no-gutters>
              <b-col md="4">
                <b-img center align-h="center" src="../assets/lightbringer.png" ></b-img>
              </b-col>
              <b-col md="8">
                <b-card-body title="Lightbringer">
                  <b-card-text >
                    <div id="repairs" class="border-bottom">
                      Arvioitu generaattorien yksin korjauksen määrä prosentteina. Huom. Kahdestaan tehty generaattori 0%-100% jakaa pisteet tasan.
                      <b-form-input id="repairvalue" v-model="repairvalue" type="range" min="0" max="500"></b-form-input>
                      Määrä: {{repairvalue}}% <br>
                      Pisteet: {{getRepairPoints()}}.<br><br>

                    </div><br>

                    <div id="gens" class="border-bottom">
                      Valmistuneet generaattorit (kaikki, ei vain itse korjatut).
                      <b-form-input id="gens" v-model="gens" type="range" min="0" max="5"></b-form-input>
                      Määrä: {{gens}} <br>
                      Pisteet: {{getGenPoints()}}<br><br>
                    </div><br>

                    <div id="gates" class="border-bottom">
                    Avatut Exit Gatet (kaikki, ei vain itse avatut).
                      <b-form-input id="gates" v-model="gates" type="range" min="0" max="2"></b-form-input>
                        Määrä: {{gates}} <br>
                        Pisteet: {{getGatePoints()}}<br><br>
                    </div><br>

                    <div id="dulltotem" class="border-bottom">
                    Puhdistetut Dull Totemit.
                    <b-form-input id="dulltotems" v-model="dullTotems" type="range" min="0" max="5"></b-form-input>
                        Määrä: {{dullTotems}} <br>
                        Pisteet: {{getDullTotemPoints()}}<br><br>
                    </div>

                    <div id="hextotem" class="border-bottom">
                      Puhdistetut Hex Totemit.
                      <b-form-input id="hextotems" v-model="hexTotems" type="range" min="0" max="4"></b-form-input>
                        Määrä: {{hexTotems}} <br>
                        Pisteet: {{getHexTotemPoints()}}<br><br>
                    </div>

                    <h2>{{getAllPoints()}}</h2>
                      
                    <!-- <div id="">
                      
                    </div> -->
  
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        <!-- </b-col> -->
      </b-row>

    </b-container>
  </div>
</template>

<script>

export default {
  name: 'Lightbringer',
  props: {
    msg: String
  },
  data() {
    return {
      repairvalue: 0,
      repairPoints: 0,
      gens: 0,
      genPoints: 0,
      gates: 0,
      gatePoints: 0,
      dullTotems: 0,
      dullTotemPoints: 0,
      hexTotems: 0,
      hexTotemPoints: 0,
      emblems: [
        {}
      ]
    }
  },
  methods: {
    getRepairPoints() {
      this.repairPoints = Number(this.repairvalue); //Miksi tämä vaatii Number() funktion? En tiedä.
      return this.repairPoints;
    },
    getGenPoints() {
      this.genPoints = this.gens * 5;
      return this.genPoints;
    },
    getGatePoints() {
      this.gatePoints = this.gates * 15;
      return this.gatePoints;
    },
    getDullTotemPoints() {
      this.dullTotemPoints = this.dullTotems * 20;
      return this.dullTotemPoints;
    },
    getHexTotemPoints() {
      this.hexTotemPoints = this.hexTotems * 50;
      return this.hexTotemPoints;
    },
    getAllPoints() {
      this.allPoints = this.repairPoints + this.genPoints + this.gatePoints + this.dullTotemPoints + this.hexTotemPoints;
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
