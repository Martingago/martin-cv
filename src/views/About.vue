<template>
    <div class="about-me-section">
        <div class="about-me-info">
            <Textosimple></Textosimple>
            <Image></Image>
        </div>
        <BarraDatos></BarraDatos>
    </div>
</template>

<script setup>

import Textosimple from '@/components/Textosimple.vue';
import BarraDatos from '@/components/BarraDatos.vue';
import Image from '@/components/ImageElement.vue';
</script>

<style scoped>
.about-me-section{
    display: grid;
    grid-template-rows: 1fr auto;
}
.about-me-info{
    margin: auto;
    max-width: 95vw;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(310px,1fr));
    align-items: center;
}
  
</style>