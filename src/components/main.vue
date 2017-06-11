<template>
  <div id="app" class="container">
    <div class="grid -top -center">
      <h1>Search for a player's fantasy stats</h1>
    </div>
    <div class="grid -center">
      <form class="form" id="form">
        <fieldset class="form-group">
          <label for="player">Player:</label>
          <input id="player" type="text" placeholder="type a name..." class="form-control">
        </fieldset>
        <fieldset class="form-group">
          <label for="scoreType">Scoring:</label>
          <input type="radio" name="scoreType" value="standard" checked> Standard
          <input type="radio" name="scoreType" value="ppr"> PPR
        </fieldset>
        <div class="form-actions">
          <button type="button" class="btn btn-primary btn-block">Submit</button>
        </div>
      </form>
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
