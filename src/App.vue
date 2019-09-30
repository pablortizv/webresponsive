<template>
  <dir class="container-fluid">
    <Header/>
    <DemoProduct/>
    <Body/>
    <h1>1</h1>
  </dir>
</template>

<script>
  import App2 from "./App2.vue";
  import DemoProduct from "./DemoProduct.vue";
  import Header from './Header.vue';
  import Body from './Body.vue';
  export default {
    name: 'app',
    components: {
      App2,
      DemoProduct,
      Header,
      Body
    }
  }
</script>

<style>
.container-fluid{
  margin-top: 0;
}
</style>
