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

export async function getUserByCredentials(email: string, password: string) {
    try {
        const queryUser = await sql<User>`select * from users where users.email = ${email} and users.password = ${password}`
        if(queryUser.rows?.length > 0)
        {
            return queryUser.rows[0]
        }
        else
            return undefined
    }
    catch (error) {
        console.log(error)
        throw new Error("Failed to get user by credentials")
    }
}