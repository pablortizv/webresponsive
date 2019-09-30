<template>
  <dir class="container-fluid">
    <Header/>
    <DemoProduct/>
    <Body/>
    <axs-footer></axs-footer>
  </dir>


</template>

<script>
  import App2 from "./App2.vue";
  import DemoProduct from "./DemoProduct.vue";
  import Header from './Header.vue';
  import Body from './Body.vue';
  import axsFooter from "./axsFooter";
  export default {
    name: 'app',
    components: {
      App2,
      DemoProduct,
      Header,
      Body,
        axsFooter

    }
  }
</script>

<style>
.container-fluid{
  margin-top: 0;
}
</style>
