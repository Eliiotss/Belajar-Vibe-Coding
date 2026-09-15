import { Elysia } from 'elysia';
import { poolConnection } from '../../db';

export const healthRoutes = new Elysia({ prefix: '/health' }).get('/', async () => {
  let dbStatus = 'disconnected';
  try {
    const connection = await poolConnection.getConnection();
    await connection.ping();
    connection.release();
    dbStatus = 'connected';
  } catch (error) {
    dbStatus = `error: ${error instanceof Error ? error.message : 'Unknown error'}`;
  }

  return {
    status: 'ok',
    timestamp: new Date().toISOString(),
    database: dbStatus,
  };
});
