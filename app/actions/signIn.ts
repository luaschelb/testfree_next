'use server'
 
import { z } from 'zod'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getUserByCredentials } from '../lib/dtos/user'


const signInFormSchema = z.object({
    name: z.string().min(2, {message: "Must be at least 2 characters"}),
    email: z.string().email({message: "Invalid email"}),
    password: z.string().min(6, {message: "Be at least 6 characters long"})
})

export type FormState =
  | {
      errors?: {
        name?: string[]
        email?: string[]
        password?: string[]
      }
      message?: string
    }
  | undefined

export async function login(state: FormState, formData: FormData) {
  const cookieStore = await cookies()

  const authCookie = cookieStore.get("auth")
  if (authCookie) 
  {
    return undefined;
  }

  const validatedFields = signInFormSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
  });

  if (!validatedFields.success) {
      return {
          errors: validatedFields.error.flatten().fieldErrors,
      };
  }

  console.log(validatedFields.data)

  try{
    const queryUser = await getUserByCredentials(validatedFields.data.email, validatedFields.data.password)
    if(queryUser)
    {
      cookieStore.set({
        name: "auth",
        value: 'true'
      })
    }
    else
      return { message: "Incorrect credentials"}
  }
  catch (error) {
    console.error(error)
    throw new Error("Database Error")
  }

  redirect("/")
}