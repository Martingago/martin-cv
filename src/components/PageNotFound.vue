<template>
    <div class="section-error-404">
        <div class="error-404">
            <p class="error"> ERROR <br> 404 </p>
            <p class="text">La página que buscas debe de encontrarse en otro universo </p>
            <router-link class="btn" to="/inicio">Volver al inicio</router-link>
        </div>
    </div>
</template>

<style scoped>
.section-error-404 {
    width: 100%;
    height: 100%;
    display: grid;
    margin: auto;
}

.error-404 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.error-404 .error {
    text-align: center;
    font-size: clamp(3rem, 8vw, 6rem);
    line-height: clamp(3rem, 8vw, 4.5rem);
    background-color: var(--colortransparencia);
    border-radius: 10px;
    padding: 1rem 2rem;
    margin: 2rem;
}

.error-404 .text {
    font-size: clamp(1.5rem, 2vw, 2rem);
    line-height: clamp(1.5rem, 2vw, 2rem);
    text-align: center;
    text-transform: uppercase;
    margin: 1rem;
}
.btn{
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: center;
    text-decoration: none;
    padding: .25rem 1rem;
    border-radius: 3px;
    border: 1px solid black;
    color: black;
    cursor: pointer;
    background-color: white;
    box-shadow: 1px 1px 4px gray;
}

.btn:hover {
    animation: bounce-7 2.4s infinite;
}

@keyframes bounce-7 {
    0% {
        transform: scale(1, 1)
    }

    10% {
        transform: scale(1.1, .9)
    }

    30% {
        transform: scale(.9, 1.1);
    }

    50% {
        transform: scale(1.05, .95)
    }

    57% {
        transform: scale(1, 1);
    }

    64% {
        transform: scale(1, 1)
    }

    100% {
        transform: scale(1, 1)
    }
}

.image{
    margin: auto;
}


</style>