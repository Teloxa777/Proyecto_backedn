<template>
  
  <header class="bg-cover bg-center relative h-96 flex flex-col justify-center items-center" :style="{ backgroundImage: `url(${fondoPan})` }">
     <h1 class="text-4xl font-bold text-white mb-4 shadow-lg p-2 bg-opacity-50 bg-black rounded">Panadería Fresca</h1>
     <p class="text-lg text-white shadow-md p-2 bg-opacity-40 bg-black rounded">Los mejores panes directos del horno a tu casa.</p>
  </header>
</template>

<script>
import fondoPan from '@/assets/imagenes/fondo-pan.jpeg'

export default {
 data() {
   return {
     fondoPan
   }
 }
}
</script>

  