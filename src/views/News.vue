<template>
  <div class="space-y-6">
    <div class="bg-white rounded-lg shadow-sm p-6">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Actualités</h1>
      <p class="text-gray-600">Suivez toutes les actualités de notre club de badminton.</p>
    </div>

    <!-- Featured News -->
    <div v-if="featuredNews" class="bg-white rounded-lg shadow-sm overflow-hidden">
      <div class="p-6">
        <div class="flex items-center mb-2">
          <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            À la une
          </span>
        </div>
        <h2 class="text-2xl font-bold text-gray-900 mb-2">{{ featuredNews.title }}</h2>
        <div class="text-gray-500 text-sm mb-4">
          Par {{ featuredNews.author }} • {{ formatDate(featuredNews.date) }}
        </div>
        <p class="text-gray-700 leading-relaxed">{{ featuredNews.content }}</p>
      </div>
    </div>

    <!-- All News -->
    <div class="space-y-6">
      <div 
        v-for="article in regularNews" 
        :key="article.id"
        class="bg-white rounded-lg shadow-sm p-6"
      >
        <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ article.title }}</h3>
        <div class="text-gray-500 text-sm mb-3">
          Par {{ article.author }} • {{ formatDate(article.date) }}
        </div>
        <p class="text-gray-700 leading-relaxed">{{ article.content }}</p>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="allNews.length === 0" class="bg-white rounded-lg shadow-sm p-12 text-center">
      <div class="text-gray-400 mb-4">
        <svg class="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      </div>
      <h3 class="text-lg font-medium text-gray-900 mb-2">Aucune actualité</h3>
      <p class="text-gray-500">Il n'y a pas encore d'actualités à afficher.</p>
    </div>
  </div>
</template>

<script>
import { newsData } from '../data/news.js'

export default {
  name: 'News',
  computed: {
    allNews() {
      return newsData.sort((a, b) => new Date(b.date) - new Date(a.date))
    },
    featuredNews() {
      return this.allNews.find(article => article.featured)
    },
    regularNews() {
      return this.allNews.filter(article => !article.featured)
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