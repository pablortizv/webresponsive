<template>
    <div class="row">
        <div class="header">
            <div class="texto-header text-white">
                <h5 class="h1" id="headerText"><span>&#160;</span></h5>
                <p class="h4 hidden" id="headerTextSecundary">Todos los días son de pago</p>
            </div>
        </div>
    </div>
</template>
<script>
let writgin = str =>{
    let arrFromStr = str.split('');
    let i = 0;
    let printStr = setInterval(()=>{
        document.getElementById('headerText').innerHTML += arrFromStr[i];
        i++;
        if (i === arrFromStr.length){
           clearInterval(printStr) 
            document.getElementById('headerTextSecundary').classList.add('visible');
            document.getElementById('headerTextSecundary').classList.remove('hidden')
        }
    }, 150)
}
writgin('Tu dinero en un abrir y cerrar de app' )
export default {
    
}
</script>
<style scoped>
.hidden{
    display: none
}
.visible{
    display: inline;
    animation-duration: 2s
}
.header{
    width: 100vw;
    height: 100vh;
    background-image: url("assets/Fondo_home.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
#headerText{
    position: relative;
}
#headerText span{
    width: 0;
    border: 1.5px solid #fff;
    position: absolute;
    right: 0;
    -webkit-animation: blink 1s step-end infinite;
    animation: blink 1s step-end infinite;
    animation-delay: .5s;
}
.texto-header{
    position: absolute;
    top:50vh;
    left: 30px;
}
#headerTextSecundary{
    -webkit-animation: blink 1s step-end infinite;
    animation: blink 4s step-end infinite;
}
@-webkit-keyframes show {
  0% { opacity: 0; } 50% { opacity: .50; } 100% { opacity: 100; }
}
@-webkit-keyframes blink {
  0% { opacity: 1.0; }
  50% { opacity: 0.0; }
  100% { opacity: 1.0; }
}
@keyframes blink {
  0% { opacity: 1.0; }
  50% { opacity: 0.0; }
  100% { opacity: 1.0; }
}
@media (min-width: 576px) {
    .header{
        background-position: 70% 20%;
    }
}
</style>
