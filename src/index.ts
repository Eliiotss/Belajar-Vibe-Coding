import { Elysia } from 'elysia';
import { healthRoutes } from './modules/health/health';

const port = Number(process.env.PORT) || 3000;

const app = new Elysia()
  .get('/', () => ({
    message: 'Welcome to Belajar Vibe Coding API!',
    stack: 'Bun + ElysiaJS + Drizzle ORM + MySQL',
  }))
  .use(healthRoutes)
  .listen(port);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
