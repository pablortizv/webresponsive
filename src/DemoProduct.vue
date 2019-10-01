<template>
  <div class="container-fluid">
    <section class="container-fluid">
      <div class="row text-center">
        <div class="col">
          <h1 class="animated pulse w-auto" id="Product">Nuestros productos.</h1>
        </div>
      </div>
    </section>
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
      <div class="col-sm"></div>
    </div>
    <section class="carousel slide" data-ride="carousel" id="postsCarousel">
      <div class="container pt-0 mt-2">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="card-deck">
              <div class="card">
                <div class="card-img-top card-img-top-250">
                  <img class="img-fluid" src="http://i.imgur.com/EW5FgJM.png" alt="Carousel 1" />
                </div>
                <div class="card-body pt-2">
                  <h6 class="small text-wide p-b-2">Insight</h6>
                  <h2>
                    <a href>Why Stuff Happens Every Year.</a>
                  </h2>
                </div>
              </div>
              <div class="card">
                <div class="card-img-top card-img-top-250">
                  <img class="img-fluid" src="http://i.imgur.com/Hw7sWGU.png" alt="Carousel 2" />
                </div>
                <div class="card-body pt-2">
                  <h6 class="small text-wide p-b-2">Development</h6>
                  <h2>
                    <a href>How to Make Every Line Count.</a>
                  </h2>
                </div>
              </div>
              <div class="card">
                <div class="card-img-top card-img-top-250">
                  <img class="img-fluid" src="http://i.imgur.com/g27lAMl.png" alt="Carousel 3" />
                </div>
                <div class="card-body pt-2">
                  <h6 class="small text-wide p-b-2">Design</h6>
                  <h2>
                    <a href>Responsive is Essential.</a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="card-deck">
              <div class="card">
                <div class="card-img-top card-img-top-250">
                  <img
                    class="img-fluid"
                    src="//visualhunt.com/photos/l/1/office-student-work-study.jpg"
                    alt="Carousel 4"
                  />
                </div>
                <div class="card-body pt-2">
                  <h6 class="small text-wide p-b-2">Another</h6>
                  <h2>
                    <a href>Tagline or Call-to-action.</a>
                  </h2>
                </div>
              </div>
              <div class="card">
                <div class="card-img-top card-img-top-250">
                  <img
                    class="img-fluid"
                    src="http://visualhunt.com/photos/l/1/working-woman-technology-computer.jpg"
                    alt="Carousel 5"
                  />
                </div>
                <div class="card-body pt-2">
                  <h6 class="small text-wide p-b-2">
                    <span class="pull-xs-right">12.04</span> Category 1
                  </h6>
                  <h2>
                    <a href>This is a Blog Title.</a>
                  </h2>
                </div>
              </div>
              <div class="card">
                <div class="card-img-top card-img-top-250">
                  <img
                    class="img-fluid"
                    src="http://visualhunt.com/photos/l/1/people-office-team-collaboration.jpg"
                    alt="Carousel 6"
                  />
                </div>
                <div class="card-body pt-2">
                  <h6 class="small text-wide p-b-2">Category 3</h6>
                  <h2>
                    <a href>Catchy Title of a Blog Post.</a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-12 text-md-center lead">
            <a
              data-slide="prev"
              class="btn btn-secondary-outline"
              href="#postsCarousel"
              title="go back"
            >
              <i class="fa fa-lg fa-chevron-left"></i>
            </a>
            <a
              data-slide="next"
              class="btn btn-secondary-outline"
              href="#postsCarousel"
              title="more"
            >
              <i class="fa fa-lg fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style>
.carousel-item-prev,
.carousel-item-next,
.carousel-item.active {
  display: flex;
  width: 100%;
}

/* control image height */
.card-img-top-250 {
  max-height: 225px;
  overflow: hidden;
  padding-bottom: 10%;
}

/* smoother transitions */
.carousel-inner > .carousel-item.next.left,
.carousel-inner > .carousel-item.prev.right {
  transition: all 1s ease;
}

.pulse {
  animation-duration: 3s;
  animation-delay: 2s;
  animation-iteration-count: infinite;
}

@media screen and (min-width: 900px) {
  #Product {
    font-size: 50px;
  }
}
@media screen and (min-width: 1200px) {
  #Product {
    font-size: 85px;
  }
}
@media screen and (min-width: 1600px) {
  #Product {
    font-size: 100px;
  }
}
</style>