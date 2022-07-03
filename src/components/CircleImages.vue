<template>
    <div class="circle-container">
        <img class="img-tecnologia" src="@/assets/img/profile.png" alt="imagen de perfil">
        <img class="img-tecnologia" src="@/assets/img/profile.png" alt="imagen de perfil">
        <img class="img-tecnologia" src="@/assets/img/profile.png" alt="imagen de perfil">
        <img class="img-tecnologia" src="@/assets/img/profile.png" alt="imagen de perfil">
        <img class="img-tecnologia" src="@/assets/img/profile.png" alt="imagen de perfil">
        <img class="img-tecnologia" src="@/assets/img/profile.png" alt="imagen de perfil">      
    </div>


</template>

<style scoped>
.circle-container{
    width: 400px;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    position: relative;
    background-color: red;
}
.circle-container img{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
}
</style>
