<template>
  <div class="space-y-6">
    <div class="bg-white rounded-lg shadow-sm p-6">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Séances d'entraînement</h1>
      <p class="text-gray-600">Découvrez nos créneaux d'entraînement adaptés à tous les niveaux.</p>
    </div>

    <!-- Sessions Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div 
        v-for="session in sessions" 
        :key="session.id"
        class="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
      >
        <div class="flex justify-between items-start mb-4">
          <div>
            <h3 class="text-xl font-semibold text-gray-900">{{ session.day }}</h3>
            <p class="text-lg text-blue-600 font-medium">{{ session.time }}</p>
          </div>
          <span 
            :class="[
              'px-3 py-1 rounded-full text-sm font-medium',
              getLevelBadgeClass(session.level)
            ]"
          >
            {{ session.level }}
          </span>
        </div>

        <div class="space-y-3">
          <div class="flex items-center text-gray-600">
            <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {{ session.court }}
          </div>

          <div class="flex items-center text-gray-600">
            <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Entraîneur: {{ session.coach }}
          </div>

          <div class="flex items-center text-gray-600">
            <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {{ session.participants }}/{{ session.maxParticipants }} participants
          </div>

          <!-- Availability Bar -->
          <div class="mt-4">
            <div class="flex justify-between text-sm text-gray-600 mb-1">
              <span>Places disponibles</span>
              <span>{{ session.maxParticipants - session.participants }} places</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div 
                :class="[
                  'h-2 rounded-full transition-all',
                  getAvailabilityColor(session.participants, session.maxParticipants)
                ]"
                :style="{ width: `${(session.participants / session.maxParticipants) * 100}%` }"
              ></div>
            </div>
          </div>

          <!-- Action Button -->
          <button 
            :disabled="session.participants >= session.maxParticipants"
            :class="[
              'w-full mt-4 py-2 px-4 rounded-lg font-medium transition-colors',
              session.participants >= session.maxParticipants
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            ]"
          >
            {{ session.participants >= session.maxParticipants ? 'Complet' : 'Réserver une place' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Info Box -->
    <div class="bg-blue-50 rounded-lg p-6">
      <div class="flex items-start">
        <svg class="h-6 w-6 text-blue-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div>
          <h3 class="text-lg font-medium text-blue-900 mb-2">Informations pratiques</h3>
          <ul class="text-blue-800 space-y-1">
            <li>• Apportez vos raquettes et chaussures de sport</li>
            <li>• Les volants sont fournis par le club</li>
            <li>• Arrivée 10 minutes avant le début de la séance</li>
            <li>• Annulation possible jusqu'à 2h avant la séance</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sessionsData } from '../data/sessions.js'

export default {
  name: 'Sessions',
  computed: {
    sessions() {
      return sessionsData
    }
  },
  methods: {
    getLevelBadgeClass(level) {
      if (level.includes('Débutant')) return 'bg-green-100 text-green-800'
      if (level.includes('Avancé')) return 'bg-red-100 text-red-800'
      if (level.includes('Jeunes')) return 'bg-purple-100 text-purple-800'
      return 'bg-blue-100 text-blue-800'
    },
    getAvailabilityColor(current, max) {
      const ratio = current / max
      if (ratio >= 0.9) return 'bg-red-500'
      if (ratio >= 0.7) return 'bg-yellow-500'
      return 'bg-green-500'
    }
  }
}
</script>