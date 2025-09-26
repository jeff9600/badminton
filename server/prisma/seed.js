import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// When Prisma is working, this would use:
// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Démarrage du seeding...')
  
  // Load seed data
  const newsData = JSON.parse(readFileSync(join(__dirname, '../data/news.json'), 'utf-8'))
  const sessionsData = JSON.parse(readFileSync(join(__dirname, '../data/sessions.json'), 'utf-8'))
  
  console.log(`📰 ${newsData.length} articles d'actualités à insérer`)
  console.log(`🏸 ${sessionsData.length} séances à insérer`)
  
  // When Prisma is working, this would be:
  // 
  // // Clear existing data
  // await prisma.session.deleteMany()
  // await prisma.news.deleteMany()
  // 
  // // Insert news
  // for (const article of newsData) {
  //   await prisma.news.create({
  //     data: {
  //       id: article.id,
  //       title: article.title,
  //       body: article.body,
  //       author: article.author,
  //       date: new Date(article.date),
  //       published: article.published,
  //       featured: article.featured,
  //       excerpt: article.excerpt
  //     }
  //   })
  // }
  // 
  // // Insert sessions
  // for (const session of sessionsData) {
  //   await prisma.session.create({
  //     data: {
  //       id: session.id,
  //       date: new Date(session.date),
  //       start: session.start,
  //       end: session.end,
  //       location: session.location,
  //       level: session.level,
  //       coach: session.coach,
  //       slots: session.slots,
  //       available: session.available
  //     }
  //   })
  // }
  
  console.log('✅ Seeding terminé avec succès!')
  console.log('📝 Note: Cette version utilise des fichiers JSON comme simulation de base de données')
}

main()
  .catch((e) => {
    console.error('❌ Erreur lors du seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    // When Prisma is working: await prisma.$disconnect()
  })