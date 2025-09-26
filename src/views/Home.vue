<template>
  <div class="space-y-8">
    <!-- Hero Section -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 text-center relative overflow-hidden">
      <!-- Decorative background shape -->
      <div class="absolute top-0 right-0 w-32 h-32 bg-blue-100 dark:bg-blue-900 rounded-bl-full opacity-50"></div>
      <div class="absolute bottom-0 left-0 w-24 h-24 bg-green-100 dark:bg-green-900 rounded-tr-full opacity-50"></div>
      
      <div class="relative z-10">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Bienvenue au Club de Badminton
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-6">
          Rejoignez notre communauté passionnée de badminton et développez vos compétences dans une ambiance conviviale.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link 
            to="/sessions" 
            class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors focus:ring-4 focus:ring-blue-300 focus:outline-none"
          >
            Voir les séances
          </router-link>
          <a 
            href="#contact" 
            class="bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-800 dark:text-white font-bold py-3 px-6 rounded-lg transition-colors focus:ring-4 focus:ring-gray-300 focus:outline-none"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </div>

    <!-- Key Figures -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <div class="text-center">
          <div class="text-3xl font-bold text-blue-600 mb-2">60+</div>
          <div class="text-gray-600 dark:text-gray-300">adhérents</div>
        </div>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <div class="text-center">
          <div class="text-3xl font-bold text-green-600 mb-2">4</div>
          <div class="text-gray-600 dark:text-gray-300">créneaux/sem.</div>
        </div>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <div class="text-center">
          <div class="text-3xl font-bold text-purple-600 mb-2">2</div>
          <div class="text-gray-600 dark:text-gray-300">encadrants</div>
        </div>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <div class="text-center">
          <div class="text-3xl font-bold text-orange-600 mb-2">15+</div>
          <div class="text-gray-600 dark:text-gray-300">années d'expérience</div>
        </div>
      </div>
    </div>

    <!-- Latest News Preview -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Dernières actualités</h2>
      <div v-if="latestNews.length > 0" class="space-y-4">
        <div 
          v-for="article in latestNews" 
          :key="article.id"
          class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border-l-4 border-blue-500 hover:shadow-md transition-shadow cursor-pointer"
          @click="$router.push('/news')"
        >
          <h3 class="font-semibold text-gray-900 dark:text-white mb-1">{{ article.title }}</h3>
          <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
            <span>{{ formatDate(article.date) }}</span>
            <span class="mx-2">•</span>
            <span>Par {{ article.author }}</span>
          </div>
          <p class="text-gray-700 dark:text-gray-300">{{ article.excerpt }}</p>
        </div>
        <router-link 
          to="/news"
          class="inline-block text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium focus:ring-4 focus:ring-blue-300 focus:outline-none rounded"
        >
          Voir toutes les actualités →
        </router-link>
      </div>
    </div>

    <!-- Upcoming Sessions Preview -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Prochaines séances</h2>
      <div v-if="upcomingSessions.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div 
          v-for="session in upcomingSessions" 
          :key="session.id"
          class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-4 border border-blue-200 dark:border-gray-600 hover:shadow-md transition-shadow cursor-pointer"
          @click="$router.push('/sessions')"
        >
          <div class="flex justify-between items-start mb-3">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ session.day }}</h3>
              <p class="text-blue-600 dark:text-blue-400 font-medium">{{ session.time }}</p>
            </div>
            <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2 py-1 rounded">
              {{ session.level }}
            </span>
          </div>
          <div class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <div class="flex items-center">
              <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {{ session.court }}
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {{ session.coach }}
              </div>
              <div class="text-xs">
                <span :class="session.participants >= session.maxParticipants ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'">
                  {{ session.participants }}/{{ session.maxParticipants }} places
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <router-link 
          to="/sessions"
          class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors focus:ring-4 focus:ring-blue-300 focus:outline-none"
        >
          Voir toutes les séances
        </router-link>
      </div>
    </div>

    <!-- Infos Pratiques -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Infos pratiques</h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="space-y-4">
          <div class="flex items-start">
            <svg class="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <h3 class="font-semibold text-gray-900 dark:text-white">Adresse du club</h3>
              <p class="text-gray-600 dark:text-gray-300">Gymnase Municipal<br>10 rue du Sport<br>75000 Paris</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <svg class="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 class="font-semibold text-gray-900 dark:text-white">Stationnement</h3>
              <p class="text-gray-600 dark:text-gray-300">Parking gratuit disponible<br>Accès par l'entrée principale</p>
            </div>
          </div>

          <div class="flex items-start">
            <svg class="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <div>
              <h3 class="font-semibold text-gray-900 dark:text-white">Équipement</h3>
              <p class="text-gray-600 dark:text-gray-300">Raquettes et chaussures de sport requises<br>Volants fournis par le club</p>
            </div>
          </div>
        </div>

        <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 flex items-center justify-center h-48">
          <div class="text-center text-gray-500 dark:text-gray-400">
            <svg class="h-12 w-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p class="text-sm">Plan d'accès interactif</p>
            <p class="text-xs">Gymnase Municipal, Paris</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Section -->
    <div id="contact" class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-lg shadow-sm p-6">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Contact</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="space-y-4">
          <div class="flex items-center">
            <svg class="h-5 w-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div>
              <p class="font-medium text-gray-900 dark:text-white">Email</p>
              <a href="mailto:contact@club-badminton.fr" class="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 focus:ring-4 focus:ring-blue-300 focus:outline-none rounded">
                contact@club-badminton.fr
              </a>
            </div>
          </div>

          <div class="flex items-center">
            <svg class="h-5 w-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div>
              <p class="font-medium text-gray-900 dark:text-white">Téléphone</p>
              <a href="tel:+33123456789" class="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 focus:ring-4 focus:ring-green-300 focus:outline-none rounded">
                01 23 45 67 89
              </a>
            </div>
          </div>
        </div>

        <div>
          <p class="font-medium text-gray-900 dark:text-white mb-3">Suivez-nous</p>
          <div class="flex space-x-4">
            <a href="#" class="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 focus:ring-4 focus:ring-blue-300 focus:outline-none rounded p-1" aria-label="Facebook">
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" class="text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300 focus:ring-4 focus:ring-pink-300 focus:outline-none rounded p-1" aria-label="Instagram">
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.33-1.297C4.198 14.81 3.708 13.659 3.708 12.362c0-1.297.49-2.448 1.297-3.33.881-.881 2.033-1.371 3.33-1.371 1.297 0 2.448.49 3.33 1.297.881.881 1.371 2.033 1.371 3.33 0 1.297-.49 2.448-1.297 3.33-.882.881-2.034 1.371-3.331 1.371zm7.554 1.23c-.392.392-.979.881-1.811.881-.832 0-1.419-.49-1.811-.881-.392-.392-.881-.979-.881-1.811s.49-1.419.881-1.811c.392-.392.979-.881 1.811-.881.832 0 1.419.49 1.811.881.392.392.881.979.881 1.811s-.489 1.419-.881 1.811z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { newsData } from '../data/news.js'
import { sessionsData } from '../data/sessions.js'

export default {
  name: 'Home',
  computed: {
    latestNews() {
      return newsData
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3)
    },
    upcomingSessions() {
      // For demo purposes, show first 2 sessions as "upcoming"
      // In a real app, this would filter by actual dates/times
      return sessionsData.slice(0, 2)
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