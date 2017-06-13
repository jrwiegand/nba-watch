<template>
  <div id="app">
    <form lpformnum="1">
      <fieldset>
        <legend>Player Search</legend>
        <div class="input-group">
          <input type="text" id="player" placeholder="Enter a name..." v-model="player">
        </div>
        <div class="input-group">
          <button type="submit" class="primary">
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </fieldset>
    </form>
  <div>
    {{player}}
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
