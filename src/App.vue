<template>
  <dir class="container-fluid">
    <Header/>
    <DemoProduct/>
  </dir>
</template>

<script>
  import App2 from "./App2.vue";
  import DemoProduct from "./DemoProduct.vue";
  import Header from './Header.vue';
  export default {
    name: 'app',
    components: {
      App2,
      DemoProduct,
      Header
    }
  }
</script>

<style>
.container-fluid{
  margin-top: 0;
}
</style>
