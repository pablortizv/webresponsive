<template>
<body>
  <head>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
    />
  </head>

  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="resource/images/Credito.png" alt="CREDITO AXS" />
        <div class="carousel-caption d-none d-md-block d-flex h-100 align-items-center">
          <h2 class="animated zoomInLeft text-white float-left">La mejor tasa del mercado!!!</h2>
        </div>
      </div>
      <div class="carousel-item">
        <div class="carousel-caption d-none d-md-block d-flex h-100 align-items-center">
          <h2 class="animated bounceInDown text-dark float-left">La mejor tasa del mercado!!!</h2>
        </div>
        <img class="d-block w-100" src="resource/images/Adelanto.png" alt="ADELANTO AXS" />
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</body>
</template>
<script>
export default {};
</script>
<style>
.carousel {
  width: auto;
  height: auto;
}
</style>