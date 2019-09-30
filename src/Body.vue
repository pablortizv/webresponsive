<template>
    <div class="container-fluid p-0">
        <div class="row mt-5 mb-3">
            <div class="col-md-12 text-center mb-4"><h1>Comparativa en el mercado</h1></div>
        </div>
        <div class="row">
            <div class="col-3 col-sm-3 col-md-3 text-center box">
                <div class="border_icon"><i class="far fa-clock fa-3x"></i></div>
                <h3>LOREM</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="col-3 col-sm-3 col-md-3 text-center box">
                <div class="border_icon"><i class="fas fa-archway fa-3x"></i></div>
                <h3>LOREM</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="col-3 col-sm-3 col-md-3 text-center box">
                <div class="border_icon"><i class="fas fa-hand-holding-usd fa-3x"></i></div>
                <h3>LOREM</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="col-3 col-sm-3 col-md-3 text-center box">
                <div class="border_icon"><i class="fas fa-stopwatch fa-3x"></i></div>
                <h3>LOREM</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-3 col-sm-3 col-md-3 text-center box">
                <div class="border_icon"><i class="fas fa-search-dollar fa-3x"></i></div>
                <h3>LOREM</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="col-3 col-sm-3 col-md-3 text-center box">
                <div class="border_icon"><i class="far fa-hand-pointer fa-3x"></i></div>
                <h3>LOREM</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="col-3 col-sm-3 col-md-3 text-center box">
                <div class="border_icon"><i class="fas fa-calculator fa-3x"></i></div>
                <h3>LOREM</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="col-3 col-sm-3 col-md-3 text-center box">
                <div class="border_icon"><i class="fas fa-wallet fa-3x"></i></div>
                <h3>LOREM</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
        <div class="row mt-4">
            <!-- TESTIMONIALS -->

            <div class="testimoniales">
                <img src="./assets/bg_testimonials.jpg">
                <div class="carousel_box"><center>
                    <carousel :autoplay="true" :nav="false" :items="1" :margin="20" :loop="true" :center="true" :dots="false" :autoplayHoverPause="true">

                        <div class="testimonio">
                            <h1>Testimonio 1</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Impedit nemo incidunt eos aspernatur, dicta alias excepturi 
                            nisi sunt numquam repellat voluptas ratione eaque optio mollitia 
                            autem cum? Odit, nisi beatae!
                            </p>
                            <span>Lorem ipsum, dolor sit</span>
                        </div>

                        <div class="testimonio">
                            <h1>Testimonio 2</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Impedit nemo incidunt eos aspernatur, dicta alias excepturi 
                            nisi sunt numquam repellat voluptas ratione eaque optio mollitia 
                            autem cum? Odit, nisi beatae!
                            </p>
                            <span>Lorem ipsum, dolor sit</span>
                        </div>

                        <div class="testimonio">
                            <h1>Testimonio 3</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Impedit nemo incidunt eos aspernatur, dicta alias excepturi 
                            nisi sunt numquam repellat voluptas ratione eaque optio mollitia 
                            autem cum? Odit, nisi beatae!
                            </p>
                            <span>Lorem ipsum, dolor sit</span>
                        </div>

                        <div class="testimonio">
                            <h1>Testimonio 4</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Impedit nemo incidunt eos aspernatur, dicta alias excepturi 
                            nisi sunt numquam repellat voluptas ratione eaque optio mollitia 
                            autem cum? Odit, nisi beatae!
                            </p>
                            <span>Lorem ipsum, dolor sit</span>
                        </div>

                    </carousel></center>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
    components: { carousel },
}
</script>

<style>

    .box{
        padding:20px;
    }

    .box i{
        color: rgb(14, 199, 255);
    }

    .box h3{
        font-weight: bold;
    }

    .box p{
        font-size: 16pt;
    }
    .box:hover{
        background: rgba(235, 235, 235, 0.2);
        box-shadow: 0 .5rem 1rem rgba(128, 128, 128, 0.15)!important;
        transition: all 0.5s ease-in;
        border-radius: 5px;
    }
    .border_icon{
        border: dashed 1.5px rgb(231, 231, 231);
        width: 100px;
        height: 100px;
        padding: 25px;
        border-radius: 100%;
        display: inline-flex;
        justify-content: center;
        align-self: center;
        margin-bottom: 15px;
    }
    .testimoniales{
        position: relative;
        display: inline-block;
        text-align: center;
        align-content: center;
        width: 100%;
        height: 450px;
        color: #fff;
        background: #000;
    }
    .carousel_box{
        position: absolute;
        width: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .testimoniales img{
        width: 100%;
        height: auto;
        opacity: 0.5;
    }
    @supports(object-fit: cover){
        .testimoniales img{
            height: 100%;
            object-fit: cover;
            object-position: top center;
        }
    }

    .testimonio{
        width: 60%;
    }

    .testimonio p{
        margin-left: 12px;
        font-style: italic;
        font-size: 16pt;
    }
    .testimonio h1:before{
        /*font-family: "Font Awesome 5 Free";
        content: "\f06c ";*/
        font-size: 14pt;
    }
    .testimonio span:before{
        content: "- ";
    }
    .testimonio p:before, .testimonio p:after {
        /*font-family: "Font Awesome 5 Free";
        content: "\f10d";*/
        position: absolute;
        font-size: 100px;
        line-height: 1;
        color: #999;
        font-style: normal;
    }

    .testimonio p:before {
        top: 65px;
        left: 5px;
    }
    .testimonio p:after {
        /*font-family: "Font Awesome 5 Free";
        content: "\f10e";*/
        bottom: -30px;
        margin-left: 15px;
    }
</style>