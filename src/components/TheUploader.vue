<template>
  <input type="file" name="cargar-img" id="cargar-img" accept="image/*" @change="configurarSubida">
</template>

<script setup>

const emits = defineEmits(
  ['emitirFichero']
);
const configurarSubida = (e) => {
    if(e.target.files.length >0){
      emits('emitirFichero', e.target.files[0])
    }
}
</script>