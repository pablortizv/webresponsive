<template>
  <div class="container-fluid">
    <nav-bar/>
    <Header/>
    <DemoProduct/>
    <producto/>
    <Body/>
    <axs-footer/>
  </div>
</template>

<script>
  import App2 from "./App2.vue";
  import DemoProduct from "./DemoProduct.vue";
  import Header from './Header.vue';
  import producto from './producto.vue';
  import Body from './Body.vue';
  import axsFooter from "./axsFooter.vue";
  import NavBar from './NavBar.vue';
  export default {
    name: 'app',
    components: {
      App2,
      DemoProduct,
      Header,
      producto,
      Body,
      axsFooter,
      Body,
      Header,
      NavBar,
    }
  }
</script>

<style>
.container-fluid{
  margin-top: 0;
}
</style>
