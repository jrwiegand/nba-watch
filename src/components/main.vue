<template>
<div class="row" id="forms-input">
        <div class="col-sm">
          <div class="card fluid">
            <div class="section"><h3>Search for a player</h3></div>
            <div class="section row">
              <div class="col-sm-12 col-sm-last col-lg-4 col-md-normal">
              <form lpformnum="4">
              <fieldset>
                <legend>Aligned form (using grid)</legend>
                <div class="row responsive-label">
                  <div class="col-sm-12 col-md-3">
                    <label for="number">Number</label>
                  </div>
                  <div class="col-sm-12 col-md">
                    <input value="4" id="number" style="width:85%;" type="number">
                  </div>
                </div>
                <div class="row responsive-label">
                  <div class="col-sm-12 col-md-3">
                    <label for="disabled">Disabled</label>
                  </div>
                  <div class="col-sm-12 col-md">
                    <input disabled="" value="disabled" id="disabled" style="width:85%;">
                  </div>
                </div>
                <div class="row responsive-label">
                  <div class="col-sm-12 col-md-3">
                    <label for="readonly">Readonly</label>
                  </div>
                  <div class="col-sm-12 col-md">
                    <input readonly="" value="readonly" id="readonly" style="width:85%;">
                  </div>
                </div>
                <div class="row responsive-label">
                  <div class="col-sm-12 col-md-3">
                    <label for="select">Select</label>
                  </div>
                  <div class="col-sm-12 col-md">
                    <select id="select"> <option>Apples</option> <option>Oranges</option> </select>
                  </div>
                </div>
              </fieldset>
              </form>
              </div>
              </div>
              </div>
              </div>
              </div>
              </div>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      player: '',
      scoreType: ''
    }
  },
  watch () {
    return {
      startingZip: function () {
        if (this.player.length) {
          this.playerLookup()
        }
      }
    }
  },
  methods () {
    return {
      playerLookup: function () {
        // var app = this
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
