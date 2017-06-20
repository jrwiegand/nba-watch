<template>
  <div>
    <div>
      <h3>Search for a player</h3>
    </div>
    <div>
      <form>
        <div>
          <div>
            <input type="text" id="player" placeholder="Enter a name..." v-model="player">
            <input type="submit" value="Submit">
          </div>
        </div>
      </form>
    </div>
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
h1, h2 {
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
