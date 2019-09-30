<template>
  <div>
    <div id="carouselExampleIndicators" class="carousel slide row" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="resource/images/Credito.png" alt="CREDITO AXS" />
          <!--<div class="carousel-caption d-none d-md-block d-flex h-100 align-items-center">
          <h1 class="animated zoomInLeft text-white float-left">La mejor tasa del mercado!!!</h1>
          </div>-->
        </div>
        <div class="carousel-item">
          <!-- <div class="carousel-caption d-none d-md-block d-flex h-100 align-items-center">
          <h1 class="animated bounceInDown text-dark float-left">La mejor tasa del mercado!!!</h1>
          </div>-->
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
    <div class="row">
      <div class="col-sm"></div>
      <div class="col-sm">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe
            class="embed-responsive-item"
            src="https://www.youtube.com/embed/cBusDEvg9Tw"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="col-sm">
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.carousel {
  width: auto;
  height: auto;
}

.col-sm {
  padding: 0%;
}
</style>