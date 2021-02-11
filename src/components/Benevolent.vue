<template>
  <div>  
    <b-container class="benevolent-container">
      <b-row>
        <b-col>
          <b-card title="Benevolent" no-body class="overflow-hidden" fluid border-variant="primary">
            <b-row no-gutters>
              <b-col md="4">
                <b-img center src="../assets/benevolent.png"></b-img>
              </b-col>
              <b-col md="8">
                <b-card-body title="Benevolent">
                  <b-card-text>
                    <div id="healingpoints" class="border-bottom">
                      <b-form-input id="healingpoints" v-model="healingPoints" type="range" min="0" max=""></b-form-input>
                      1: <br>
                      Pisteet: .<br><br>

                    </div><br>

                    <div id="repairs" class="border-bottom">
                      <b-form-input id="" type="range" min="0" max=""></b-form-input>
                      1: <br>
                      Pisteet: .<br><br>

                    </div><br>

                    <div id="repairs" class="border-bottom">
                      <b-form-input id="" type="range" min="0" max=""></b-form-input>
                      1: <br>
                      Pisteet: .<br><br>

                    </div><br>

                    <div id="repairs" class="border-bottom">
                      <b-form-input id="" type="range" min="0" max=""></b-form-input>
                      1: <br>
                      Pisteet: .<br><br>

                    </div><br>

                    <div id="repairs" class="border-bottom">
                      <b-form-input id="" type="range" min="0" max=""></b-form-input>
                      1: <br>
                      Pisteet: .<br><br>

                    </div><br>
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
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
      healingPoints: 0, //10 per täysi heal
      friendlyHooks: 0,
      unhooks: 0, //kaikille
      safeUnhook: 0, //vain unhookkaajalle
      unsafeHook: 0, //vain unhookkaajalle
      carryingHit: 0, //jos killer lyö sinua kantaessaan toista survivoria
      killergraspRescue: 0,
      killergraspRescueSabotage: 0
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
