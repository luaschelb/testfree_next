'use server'

import { z } from "zod"
import { FormState } from "./signIn"

const projectSchema = z.object({
    name: z.string().regex(/^[A-Za-z]+ [A-Za-z]+$/, { message: "Name must be in the format 'First Last'" }),
    description: z.string().min(1, { message: "Description cannot be empty" }),
})

export async function createProject(state: FormState, formData: FormData) {
    const validatedFields = projectSchema.safeParse({
        name: formData.get("name"),
        description: formData.get("description"),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    console.log(validatedFields.data)
}
