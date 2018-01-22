<template>
  <div class="sourceSelection">
    <div class="jumbotron">
      <h2>
        <span class="glyphicon glyphicon-list-alt"></span> News List
      </h2>
      <v-select v-model="selected" v-bind:options="options" placeholder="Select News Source..." label="name"></v-select>
      <p>Source selected: {{ selected }}</p>
      <div v-if="selected">
        <h6>{{selected.description}}</h6>
        <a v-bind:href="selected.url" class="btn btn-primary" target="_blank">Go to {{ selected.name }} Website</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sourceSelection',
  data () {
    return {
      options: [],
      selected: null
    }
  },
  created: function () {
    var key = '226135efd44c4df8a142d9eefff2377e'
    var url = 'https://newsapi.org/v2/sources?language=en&apiKey=' + key
    this.$http.get(url).then(response => {
      this.options = response.data.sources
    })
  }
}
</script>

<style scoped>

</style>
