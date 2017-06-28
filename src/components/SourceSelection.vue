<template>
  <div class="sourceSelection">
    <div class="jumbotron">
      <h2>
        <span class="glyphicon glyphicon-list-alt"></span> News List
      </h2>
      <v-select v-model="selected" :options="options" placeholder="Select News Source..." label="name"></v-select>
      <div v-if="selected">
        <h6>{{selected.description}}</h6>
        <a :href="selected.url" class="btn btn-primary" target="_blank">Go to {{selected.name}} Website</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sourceSelection',
  data () {
    return {
      options: null,
      selected: null
    }
  },
  created: function () {
    this.$http.get('https://newsapi.org/v1/sources?language=en').then(response => {
      this.options = response.data.sources
    })
  }
}
</script>

<style scoped>

</style>
