<template>
    <div>
      <nav class="flex justify-around p-4 bg-gray-200">
        <router-link to="/">Inicio</router-link>
        <router-link to="/productos">Productos</router-link>
        <!-- ... otros enlaces ... -->
      </nav>
      <nav class="flex justify-around p-4">
        <a href="https://www.facebook.com" class="text-blue-600">
          <img id="face" src="@/assets/imagenes/facelogo.png" alt="Facebook Logo">
        </a>
        <a href="https://www.tiktok.com/es" class="text-blue-500">
          <img id="tik" src="@/assets/imagenes/tiktoklogo.png" alt="TikTok Logo">
        </a>
      </nav>
    </div>
  </template>
  