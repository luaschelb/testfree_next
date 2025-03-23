import { sql } from '@vercel/postgres';
import { Project } from './definitions';

export async function fetchProjects() {
  try {
    const data = await sql<Project>`SELECT * FROM projects`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch projects data.');
  }
}