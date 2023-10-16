<template>
  <div class="bg-off-white min-h-screen">
    <Header />
    <Navbar />


    <!-- Contenido principal de la página -->
    <main class="py-8 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
      <hr class="border-t-2 border-brown mb-8">
      
      <section id="Pro-Destacados" class="mb-12">
        <h2 class="text-2xl font-bold text-green mb-6 text-center">Nuestros Productos Destacados</h2>
        <hr class="border-t-2 border-brown mb-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="producto in productos" :key="producto.id" class="bg-white p-4 rounded shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
            <img :src="producto.imagen" :alt="producto.nombre" class="w-full h-48 object-cover rounded mb-3">
            <div class="mt-2 text-center">
              <button class="text-sm bg-red text-white px-4 py-2 rounded-full hover:bg-opacity-80 transition duration-300">Comprar ahora</button>
            </div>
            <span class="tooltip text-sm text-gray-600 mt-2 block text-center">{{ producto.nombre }}</span>
          </div>
        </div>
      </section>

      <section id="porque" class="mb-12 px-4">
        <hr class="border-t-2 border-brown mb-8">
        <div id="argumentos" class="flex flex-col md:flex-row items-center mb-4">
          <div class="md:w-1/2 mb-6 md:mb-0 md:pr-6">
            <h2 class="text-2xl font-bold text-green mb-4">¿Por qué elegirnos?</h2>
            <p class="mt-4 mb-4 text-brown">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam delectus dicta nisi soluta facilis veniam ea mollitia ad, consequuntur deleniti.
            </p>
            <a href="/productos.html" class="inline-block cta-button text-white bg-green px-4 py-2 rounded hover:bg-green-dark transition duration-300">Haz tu pedido ahora</a>
          </div>
          <div id="image" class="md:w-1/2">
            <img src="/assets/imagenes/pastel1.jpeg" alt="" class="w-full h-64 object-cover rounded">
          </div>
        </div>
      </section>

      <section class="contacto mb-12 px-4">
    <h3 id="cont" class="text-2xl font-bold text-green mb-6 text-center">Contact</h3>
    <hr class="border-t-2 border-brown mb-8">
    <form action="https://formspree.io/f/mlekqyav" method="POST" class="mb-4 mx-auto w-3/4">
        <label class="block mb-4 text-brown">
            Your email:
            <input type="email" name="email" class="border p-2 rounded-lg mt-1 w-full">
        </label>
        <label class="block mb-4 text-brown">
            Your message:
            <textarea name="message" class="border p-2 rounded-lg mt-1 w-full"></textarea>
        </label>
        <div class="text-center">
            <button type="submit" class="bg-green text-white px-4 py-2 rounded-lg hover:bg-green-dark transition duration-300">Send</button>
        </div>
    </form>
    <nav id="social-media" class="mt-4 flex justify-center space-x-4">
        <a href="https://www.facebook.com" class="mx-2">
            <img id="face" src="@/assets/imagenes/facelogo.png" alt="Facebook Logo" class="w-8 h-8 rounded-full">
        </a>
        <a href="https://www.tiktok.com/es" class="mx-2">
            <img id="tik" src="@/assets/imagenes/tiktoklogo.png" alt="TikTok Logo" class="w-8 h-8 rounded-full">
        </a>
    </nav>
</section>

    </main>
    
    <Footer />
  </div>
  <!--<router-view></router-view> -->
</template>


<!-- ... Resto del componente ... -->


<script>
// Importar componentes
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Inicio',
  components: {
    Header,
    Navbar,
    Footer
  },
  data() {
    return {
      productos: [
        { id: 1, nombre: 'Pan1', imagen: '@/assets/imagenes/pastel.png' },
        { id: 2, nombre: 'Pan2', imagen: '@/assets/imagenes/pastel.png' }
        // ... agregar los demás productos ...
      ]
    };
  },
  methods: {
    // Tus métodos aquí (si es necesario)
  }
}
</script>

<style scoped>
/* Tus estilos adicionales si los necesitas */
</style>
