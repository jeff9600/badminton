import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { readFileSync } from 'fs'

// Load environment variables
dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const PORT = process.env.PORT || 5174

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  methods: ['GET']
}))
app.use(express.json())

// Load seed data (simulating database)
const newsData = JSON.parse(readFileSync(join(__dirname, '../data/news.json'), 'utf-8'))
const sessionsData = JSON.parse(readFileSync(join(__dirname, '../data/sessions.json'), 'utf-8'))

// Routes
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  })
})

app.get('/api/news', (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || newsData.length
    const sortedNews = newsData
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, limit)
    res.json(sortedNews)
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des actualités' })
  }
})

app.get('/api/sessions', (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || sessionsData.length
    const now = new Date()
    
    // Filter future sessions and sort by date
    const upcomingSessions = sessionsData
      .filter(session => new Date(session.date) >= now)
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .slice(0, limit)
    
    res.json(upcomingSessions)
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des séances' })
  }
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route non trouvée' })
})

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Error:', error)
  res.status(500).json({ error: 'Erreur interne du serveur' })
})

app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`)
  console.log(`📊 API disponible sur http://localhost:${PORT}/api`)
})