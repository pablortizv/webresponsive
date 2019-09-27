<template>
  <div id="app">
        <DemoProduct/>
  </div>
</template>

<script>
  import App2 from "./App2.vue";
  import DemoProduct from "./DemoProduct.vue";
  export default {
    name: 'app',
    components: {
      App2,
      DemoProduct
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
