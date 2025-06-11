'use server'
 
import { z } from 'zod'

const signUpFormSchema = z.object({
    name: z.string().min(2, {message: "Must be at least 2 characters"}),
    email: z.string().email({message: "Invalid email"}),
    password: z
        .string()
        .min(6, {message: "Be at least 6 characters long"})
        .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
        .regex(/[0-9]/, { message: 'Contain at least one number.' })
        .regex(/[^a-zA-Z0-9]/, {
            message: 'Contain at least one special character.',
        })
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

export async function signup(state: FormState, formData : FormData) {
    const validatedFields = signUpFormSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
    })

    if (!validatedFields.success) {
        return {
        errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    console.log(validatedFields.data)
}