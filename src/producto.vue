<template>
      <!------------------------------------------------------------------------------------------->
          <div class="features-icons text-center">
              <div class="row degrade" style= "padding: 3rem;">
               <h1 class="letras">En AXS adelantamos tus ingresos ya trabajados, o te otorgamos un crédito mayor a largo plazo.</h1>
            <div class="col-lg-4">
          <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div class="features-icons-icon d-flex">
              <i class="icon-speedometer m-auto text-primary"></i>
            </div>
            <h3 style="font-weight: bold;">Inmediato</h3>
            <p class="lead mb-0">Tu dinero rápido, sencillo y seguro en un abrir y cerrar de app.</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div class="features-icons-icon d-flex">
              <i class="icon-equalizer m-auto text-primary"></i>
            </div>
            <h3 style="font-weight: bold;">A tu medida</h3>
            <p class="lead mb-0">Completamente accesible, sin filas ni papeleo. Olvidate de las instituciones financieras tradicionales.</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="features-icons-item mx-auto mb-0 mb-lg-3">
            <div class="features-icons-icon d-flex">
              <i class="icon-lock m-auto text-primary"></i>
            </div>
            <h3 style="font-weight: bold;">Seguro</h3>
            <p class="lead mb-0">Para nosotros lo más importante son cuentas claras y amistades largas.</p>
          </div>
        </div>
      </div>
    <!--<div class="pie"></div> -->
      </div>
      <!------------------------------------------------------------------------------------------->
    
</template>

<script>
import { Icon, InlineIcon } from '@iconify/react';
import speedometerIcon from '@iconify/icons-simple-line-icons/speedometer';
export default {
    
}
</script>

<style>

.pie{
background: linear-gradient(to top, #3f3f3f,#17a2b8);
padding: 20px;

}
.degrade{
background: linear-gradient(to bottom, #3f3f3f, #17a2b8,white, white);
}
.container::after{
  background: inherit;
  content: "";
    z-index: -1;
    bottom: 0;
    top: 0;
    transform-origin: left bottom;
    transform: skewY(6deg);
}
.letras{
    
  
  background: linear-gradient(to top, white, white);
  -webkit-background-clip: text;  
  -webkit-text-fill-color: transparent;  
}
</style>