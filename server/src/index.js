import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

const allowedOrigins = ['http://localhost:5173'];

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error('Not allowed by CORS'));
    },
    methods: ['GET'],
    allowedHeaders: ['Content-Type'],
    optionsSuccessStatus: 204
  })
);

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

app.get('/api/news', async (req, res, next) => {
  try {
    const limitParam = parseInt(String(req.query.limit ?? ''), 10);
    const take = Number.isFinite(limitParam) && limitParam > 0 ? limitParam : undefined;

    const news = await prisma.news.findMany({
      where: { published: true },
      orderBy: { date: 'desc' },
      take
    });

    res.json(news);
  } catch (err) {
    next(err);
  }
});

app.get('/api/sessions', async (req, res, next) => {
  try {
    const limitParam = parseInt(String(req.query.limit ?? ''), 10);
    const take = Number.isFinite(limitParam) && limitParam > 0 ? limitParam : undefined;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const sessions = await prisma.session.findMany({
      where: { date: { gte: today } },
      orderBy: { date: 'asc' },
      take
    });

    res.json(sessions);
  } catch (err) {
    next(err);
  }
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

app.use((err, req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = Number(process.env.PORT) || 5174;
app.listen(PORT, () => {
  console.log(`API ready on http://localhost:${PORT}`);
});

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});
process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  process.exit(0);
});