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
