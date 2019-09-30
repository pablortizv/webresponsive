<template>
  <div class="container-fluid">
    <Header/>
    <DemoProduct/>
    <producto/>
    <Body/>

  </div>
</template>

<script>
  import App2 from "./App2.vue";
  import DemoProduct from "./DemoProduct.vue";
  import Header from './Header.vue';
  import producto from './producto.vue';
  import Body from './Body.vue';
  export default {
    name: 'app',
    components: {
      App2,
      DemoProduct,
      Header,
      producto,
      Body
    }
  }
</script>

<style>
.container-fluid{
  margin-top: 0;
}
</style>
