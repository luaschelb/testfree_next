import { sql } from '@vercel/postgres';
import { Build } from './definitions';

export async function fetchBuilds() {
  try {
    const data = await sql<Build>`SELECT * FROM builds`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch build data.');
  }
}