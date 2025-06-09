import { sql } from '@vercel/postgres';
import { User } from '@/app/lib/definitions';

export async function getUsers() {
    try {
        const data = await sql<User>`SELECT * FROM users`
        if (data !== undefined)
            return data.rows.map((i) => { return new User(i.id, i.name, i.email, i.password, i.role)})
        return undefined;
    }
    catch (error) {
        console.error("Error: ", error);
        throw new Error("Failed to fetch user")
    }
}
