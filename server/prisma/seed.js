import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function daysFromNow(n) {
  const d = new Date();
  d.setDate(d.getDate() + n);
  d.setHours(0, 0, 0, 0);
  return d;
}

async function main() {
  await prisma.session.deleteMany();
  await prisma.news.deleteMany();

  const newsData = [
    {
      title: 'Reprise des entraînements',
      body:
        "La saison redémarre ! Séances adaptées à tous les niveaux. " +
        "Pensez à votre bouteille d’eau et à vos chaussures propres.",
      author: 'Comité',
      date: daysFromNow(-5),
      published: true
    },
    {
      title: 'Tournoi interne – Inscriptions ouvertes',
      body:
        "Notre tournoi amical arrive ! Inscrivez-vous avant la fin du mois. " +
        "Tableaux par niveaux, lots à gagner et bonne ambiance garantie.",
      author: 'Alex',
      date: daysFromNow(-2),
      published: true
    },
    {
      title: 'Portes ouvertes',
      body:
        "Séance découverte pour les nouveaux. Matériel disponible sur place. " +
        "Venez avec des amis !",
      author: 'Comité',
      date: daysFromNow(-1),
      published: true
    }
  ];

  const sessionsData = [
    {
      date: daysFromNow(1),
      start: '19:00',
      end: '21:00',
      location: 'Gymnase A',
      level: 'Tous niveaux',
      coach: 'Sophie',
      slots: 24,
      available: 10
    },
    {
      date: daysFromNow(3),
      start: '18:30',
      end: '20:30',
      location: 'Gymnase B',
      level: 'Débutants / Intermédiaires',
      coach: 'Marc',
      slots: 20,
      available: 12
    },
    {
      date: daysFromNow(5),
      start: '20:00',
      end: '22:00',
      location: 'Gymnase A',
      level: 'Confirmés',
      coach: null,
      slots: 16,
      available: 7
    }
  ];

  await prisma.news.createMany({ data: newsData });
  await prisma.session.createMany({ data: sessionsData });

  console.log('Seed completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });