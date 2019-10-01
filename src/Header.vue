<template>
    <div class="row">
        <div class="header col-12">
            <div class="row">
                <div class=" col-sm-8">
                    <div class="texto-header text-white">
                        <h5 class="h1" id="headerText"><span>&#160;</span></h5>
                        <p class="h4 hidden" id="headerTextSecundary">Tu dinero en un abrir y cerrar de app</p>
                    </div>
                </div>
                <div class=" col-sm-4 apps">
                    <img src="./assets/img/android.png" alt="">
                    <img src="./assets/img/ios.png" alt="">
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
    let writgin = str =>{
        let arrFromStr = str.split('');
        let i = 0;
        // if (window.innerWidth > 576) {
            let printStr = setInterval(()=>{
            document.getElementById('headerText').innerHTML += arrFromStr[i];
            i++;
            if (i === arrFromStr.length){
                clearInterval(printStr) 
                    document.getElementById('headerTextSecundary').classList.add('visible');
                    document.getElementById('headerTextSecundary').classList.remove('hidden')
                }
            }, 150) 
        // }
    }
    writgin('TODOS LOS DÍAS, SON DÍAS DE PAGO' )
    export default {}
</script>
<style>
.hidden{
    display: none
}
.visible{
    display: inline;
    transition: 1s
}
.header{
    height: 100vh;
    background-image: url("assets/img/Fondo_home.jpg");
    background-position: left;
    background-repeat: no-repeat;
    background-size: cover;
}
#headerText{
    position: relative;
    text-shadow: 3px 3px 5px gray;
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
    padding: 10px;
}
#headerTextSecundary{
    -webkit-animation: show 1s step-end;
    animation: show 1s step-end;
}
.apps{
    display: flex;
    justify-content: space-around;
    height: 100%;
}
.apps img{
    width: 40%;
    margin-top:calc(50vh)

}
@-webkit-keyframes show {
  0% { opacity: 0; } 25% { opacity: .25; }  50% { opacity: .5; } 75% { opacity: .75; }  100% { opacity: 1.0; }
}
@-webkit-keyframes blink {
  0% { opacity: 1.0; } 50% { opacity: 0.0; } 100% { opacity: 1.0; }
}
@keyframes blink {
  0% { opacity: 1.0; } 50% { opacity: 0.0; } 100% { opacity: 1.0; }
}
@media (max-width: 1024px) {
        #headerText span{
        display: none;
        }
        .header{
        background-position: center top;
    }
}
@media (max-width: 576px) {
    .header{
        background-position: center top;
    }
    #headerText span{
        display: none;
    }
    .apps img{
        width: 35%;
    }
    .texto-header{
        top: 8vh;
        left: 0;
        right: 0;
        margin: auto;
        width: 90%;
        position: relative;
        height: 42vh;
    }
}
</style>
