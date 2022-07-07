<template>
    <div class="about-me-section">
        <div class="about-me-info">
            <Textosimple></Textosimple>
            <CircleImages></CircleImages>
        </div>
        <BarraDatos></BarraDatos>
    </div>
</template>

<script setup>
import Textosimple from '@/components/Textosimple.vue';
import BarraDatos from '@/components/BarraDatos.vue';
import CircleImages from '@/components/CircleImages.vue';
require("@/assets/css/secciones/about.css")
</script>

