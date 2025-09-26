<template>
  <div class="space-y-8">
    <!-- Hero Section -->
    <div class="bg-white rounded-lg shadow-sm p-8 text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">
        Bienvenue au Club de Badminton
      </h1>
      <p class="text-xl text-gray-600 mb-6">
        Rejoignez notre communauté passionnée de badminton et développez vos compétences dans une ambiance conviviale.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <router-link 
          to="/sessions" 
          class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
          Voir les séances
        </router-link>
        <router-link 
          to="/news" 
          class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg transition-colors"
        >
          Actualités
        </router-link>
      </div>
    </div>

    <!-- Quick Info Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white rounded-lg shadow-sm p-6">
        <div class="text-center">
          <div class="text-3xl font-bold text-blue-600 mb-2">4</div>
          <div class="text-gray-600">Séances par semaine</div>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-sm p-6">
        <div class="text-center">
          <div class="text-3xl font-bold text-green-600 mb-2">45+</div>
          <div class="text-gray-600">Membres actifs</div>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-sm p-6">
        <div class="text-center">
          <div class="text-3xl font-bold text-purple-600 mb-2">3</div>
          <div class="text-gray-600">Entraîneurs qualifiés</div>
        </div>
      </div>
    </div>

    <!-- Latest News Preview -->
    <div class="bg-white rounded-lg shadow-sm p-6">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Dernières actualités</h2>
      <div v-if="latestNews.length > 0" class="space-y-4">
        <div 
          v-for="article in latestNews" 
          :key="article.id"
          class="border-l-4 border-blue-500 pl-4"
        >
          <h3 class="font-semibold text-gray-900">{{ article.title }}</h3>
          <p class="text-gray-600 text-sm">{{ formatDate(article.date) }}</p>
          <p class="text-gray-700 mt-1">{{ article.excerpt }}</p>
        </div>
        <router-link 
          to="/news"
          class="inline-block text-blue-600 hover:text-blue-700 font-medium"
        >
          Voir toutes les actualités →
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { newsData } from '../data/news.js'

export default {
  name: 'Home',
  computed: {
    latestNews() {
      return newsData
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3)
    }
  },
  methods: {
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(dateString).toLocaleDateString('fr-FR', options)
    }
  }
}
</script>