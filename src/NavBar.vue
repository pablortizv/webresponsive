<template>
    <nav id="navBar" class="navbar navbar-expand-md bgColorNav navbar-dark fixed-top transparentBG">
        <a class="navbar-brand" href="#">Lorem ipsun</a>
        <button class="navbar-toggler order-first" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
            </ul>
            <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" href="#">Es</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
        </ul>
        </div>
    </nav>
</template>
<script>
    window.addEventListener("scroll",()=>{
        var target = document.getElementById('navBar');
        var vpw = window.innerHeight
        if(window.pageYOffset > vpw){
            target.classList.remove('transparentBG')
        }
        else if(window.pageYOffset < vpw){
        target.classList.add('transparentBG')
        }
    },false);
export default {}
</script>
<style>
.bgColorNav{
    background-color: #02ADBE;
    opacity: .9;
    transition: 1.5s;
}.transparentBG{
    background-color: transparent !important;
    
}.navbar-nav{
    padding-left: 10px
}
.navbar-dark .navbar-nav .nav-link {
    color: rgba(255,255,255,.9);
}
@media (max-width: 576px) {
    .transparentBG .navbar-nav{
        background-color: #02ADBE;
        opacity: .9;
    }
}
</style>