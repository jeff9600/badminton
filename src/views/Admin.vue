<template>
  <div class="space-y-6">
    <div class="bg-white rounded-lg shadow-sm p-6">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Administration</h1>
      <p class="text-gray-600">Panneau d'administration du club de badminton.</p>
    </div>

    <!-- Admin Dashboard -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Stats Cards -->
      <div class="bg-white rounded-lg shadow-sm p-6">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <svg class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
          </div>
          <div class="ml-4">
            <div class="text-2xl font-bold text-gray-900">{{ totalMembers }}</div>
            <div class="text-gray-600">Membres total</div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-sm p-6">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <svg class="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div class="ml-4">
            <div class="text-2xl font-bold text-gray-900">{{ totalSessions }}</div>
            <div class="text-gray-600">Séances actives</div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-sm p-6">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <svg class="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          <div class="ml-4">
            <div class="text-2xl font-bold text-gray-900">{{ totalNews }}</div>
            <div class="text-gray-600">Articles publiés</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="bg-white rounded-lg shadow-sm p-6">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Actions rapides</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <button class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center">
          <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Ajouter article
        </button>
        <button class="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center">
          <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Nouvelle séance
        </button>
        <button class="bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center">
          <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          Gérer membres
        </button>
        <button class="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center">
          <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Rapports
        </button>
      </div>
    </div>

    <!-- Recent Activity -->
    <div class="bg-white rounded-lg shadow-sm p-6">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Activité récente</h2>
      <div class="space-y-4">
        <div v-for="activity in recentActivity" :key="activity.id" class="flex items-start space-x-3">
          <div class="flex-shrink-0">
            <div :class="['w-2 h-2 rounded-full mt-2', activity.color]"></div>
          </div>
          <div class="flex-1">
            <p class="text-gray-900">{{ activity.description }}</p>
            <p class="text-sm text-gray-500">{{ activity.time }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Settings Preview -->
    <div class="bg-white rounded-lg shadow-sm p-6">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Configuration</h2>
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <div>
            <div class="font-medium text-gray-900">Notifications par email</div>
            <div class="text-sm text-gray-500">Recevoir les notifications importantes</div>
          </div>
          <button class="bg-blue-600 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out">
            <span class="translate-x-5 inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
          </button>
        </div>
        <div class="flex items-center justify-between">
          <div>
            <div class="font-medium text-gray-900">Inscriptions automatiques</div>
            <div class="text-sm text-gray-500">Permettre l'inscription en ligne</div>
          </div>
          <button class="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out">
            <span class="translate-x-0 inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { newsData } from '../data/news.js'
import { sessionsData } from '../data/sessions.js'

export default {
  name: 'Admin',
  computed: {
    totalMembers() {
      return sessionsData.reduce((total, session) => total + session.participants, 0)
    },
    totalSessions() {
      return sessionsData.length
    },
    totalNews() {
      return newsData.length
    }
  },
  data() {
    return {
      recentActivity: [
        {
          id: 1,
          description: 'Nouvel article publié: "Tournoi de fin d\'année"',
          time: 'Il y a 2 heures',
          color: 'bg-blue-500'
        },
        {
          id: 2,
          description: 'Marie Dubois s\'est inscrite à la séance du mercredi',
          time: 'Il y a 4 heures',
          color: 'bg-green-500'
        },
        {
          id: 3,
          description: 'Nouveau créneau d\'entraînement ajouté',
          time: 'Il y a 1 jour',
          color: 'bg-purple-500'
        }
      ]
    }
  }
}
</script>