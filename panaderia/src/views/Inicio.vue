<template>
    <div class="container mx-auto">
      <Header />
      <Navbar />
      
      <!-- Contenido principal de la página -->
      <main>
        
      </main>
      
      <Footer />
    </div>
  </template>
  
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
        // Tus datos aquí (si es necesario)
      };
    },
    methods: {
      // Tus métodos aquí (si es necesario)
    }
  }
  </script>
  
  <style scoped>
  </style>
  