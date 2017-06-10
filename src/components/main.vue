<template>
  <div class="main">
    <h4>Search for a player</h4>
    <form>
      <div>
        <div>
          <input type="text" placeholder="Julio Jones" v-model="player">
        </div>
      </div>
      <div>
        <button id="submit-form">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      player: ''
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
