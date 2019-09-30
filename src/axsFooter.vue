<template>

  <!-- Footer -->
  <footer>
    <div class="container-fluid">
      <div class="row ">
        <div class="col-xl-6 col-md-6 col-sm-12 mt-3">
          <h5 class="text-uppercase font-weight-bold">¿BUSCAS AXS?</h5>
          <p>Escríbenos a contacto@axs.lat o dinos si eres una empresa o un colaborador y nos contactaremos contigo lo antes posible.</p>

          <form action="">
            <input type="text" class="form-control" id="name" aria-describedby="nombre" placeholder="Nombre">
            <input type="email" class="form-control" id="email" aria-describedby="correoElectonico" placeholder="Correo Electrónico">
            <select class="form-control" id="option">
              <option selected disabled>Soy un </option>
              <option>Empleador</option>
              <option>Colaborador</option>
            </select>
            <input type="text" class="form-control" id="company" aria-describedby="empresa" placeholder="Empresa">
            <textarea class="form-control" id="message" rows="3" placeholder="Mensaje"></textarea>
            <button type="button" class="btn btn-primary btn-block">Enviar</button>
          </form>
        </div>
        <div class="col-xl-6 col-md-6 col-sm-12 mt-3">
          <img src="./assets/img/LogoAXS-white.png" class="img-fluid">
          <hr>

          <ul class="list-group list-group-horizontal">
            <li class="list-group-item"><a href=""><i class="fab fa-facebook fa-3x"></i></a></li>
            <li class="list-group-item"><a href=""><i class="fab fa-instagram fa-3x"></i></a></li>
            <li class="list-group-item"><a href=""><i class="fab fa-linkedin fa-3x"></i></a></li>
          </ul>
          <hr>
          <h6><a href="" class="avisosTerminos">Aviso de Privacidad</a></h6>
          <h6><a href="" class="avisosTerminos">Términos y Condiciones</a></h6>
          <h6><a href="" class="avisosTerminos">Español</a></h6>
        </div>
      </div>

    </div>
    <div class="row">
      <div class="col-xl-12 col-md-12">
        <div class="footer-copyright text-center py-3 f-own">©AXS 2019. AXS es un producto de
          <a href="https://mdbootstrap.com/education/bootstrap/" class="avisosTerminos"> AlphaCredit</a>
        </div>
      </div>
    </div>
  </footer>

</template>

<script>
    export default {
        name: "axsFooter"
    }
</script>

<style scoped>
  h5{
    color: #31b8c6 !important;
    text-shadow: #ffffffbd 1px 2px 1px;
    font-size: 2rem;
    letter-spacing: .5rem !important;
    text-align: center !important;
  }
input, select, textarea{
  margin-bottom: 2%;
}
button{
  margin-bottom: 5%;
}
  .f-own{
    background: #31b8c6;
  }
  .f-own-main{
    /*background: #4d4d4d;*/
  }
  p{
    color:white;
    letter-spacing: 1.3px;
  text-align: justify;
  }
  ul li{
    background: none;
    border: none;

  }
  i{
    color: white;
  }
  img{
    display: block;
    margin: 0 auto;
  }
  hr{
    border: 0;
    height: 1px;
    background: #333;
    background-image: linear-gradient(to right, #ccc, #333, #ccc);
  }
i:hover{
  font-size: 4rem;
  color: #31b8c6;
  transition: font-size 2s;
  transition: color 1s;
}
.avisosTerminos{
  text-decoration: none;
  color: white;
  letter-spacing: .3rem;
}
  .avisosTerminos:hover{
    text-shadow: black 3px 1px 3px;
  }
  h6{
    text-align: center;
  }
  .btn-primary{
    background-color: #31b8c6;
  }
  .btn-primary:hover{
    background-color: #31c8d8;
  }

  footer{
    /*overflow: hidden;
    position: absolute;
    bottom: 0;*/
    width: 100%;
    background: linear-gradient( rgba(77, 77, 77, 0.8), rgba(9, 10, 10, 0.9) ), url(./assets/img/footer.jpg);
    /*added after content*/
    position: absolute;
    left: 0;
    overflow: hidden;
  }
  .list-group-horizontal{
    /*margin: auto 0;
    display: inline-flex;*/
    display: flex;
    justify-content: center;
  }
</style>
