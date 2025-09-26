<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <!-- Header Navigation -->
    <header class="bg-blue-600 shadow-md">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <h1 class="text-white text-xl font-bold">Club de Badminton</h1>
          </div>
          
          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <router-link 
              v-for="route in navigationRoutes"
              :key="route.name"
              :to="route.path"
              :class="[
                'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                $route.name === route.name 
                  ? 'bg-blue-700 text-white' 
                  : 'text-blue-100 hover:bg-blue-500 hover:text-white'
              ]"
            >
              {{ route.label }}
            </router-link>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden flex items-center">
            <button 
              @click="mobileMenuOpen = !mobileMenuOpen"
              class="text-blue-100 hover:text-white focus:outline-none focus:text-white"
            >
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  v-if="!mobileMenuOpen"
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path 
                  v-else
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Navigation Menu -->
        <div v-if="mobileMenuOpen" class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <router-link 
              v-for="route in navigationRoutes"
              :key="route.name"
              :to="route.path"
              @click="mobileMenuOpen = false"
              :class="[
                'block px-3 py-2 rounded-md text-base font-medium transition-colors',
                $route.name === route.name 
                  ? 'bg-blue-700 text-white' 
                  : 'text-blue-100 hover:bg-blue-500 hover:text-white'
              ]"
            >
              {{ route.label }}
            </router-link>
          </div>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <router-view />
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white mt-12">
      <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <p class="text-gray-300">© 2024 Club de Badminton. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      mobileMenuOpen: false,
      navigationRoutes: [
        { name: 'Home', path: '/', label: 'Accueil' },
        { name: 'News', path: '/news', label: 'Actualités' },
        { name: 'Sessions', path: '/sessions', label: 'Séances' },
        { name: 'Admin', path: '/admin', label: 'Administration' }
      ]
    }
  }
}
</script>