'use server'

import { z } from "zod"

// Define the schema for project creation
const projectSchema = z.object({
    name: z.string().regex(/^[A-Za-z]+ [A-Za-z]+$/, { message: "Name must be in the format 'First Last'" }), // Corrected regex
    description: z.string().min(1, { message: "Description cannot be empty" }), // Adjusted description validation
})

// Assuming FormState is a valid type, and it's used for your state
import { FormState } from "./auth"

// The function to create the project, validating the form data
export async function createProject(state: FormState, formData: FormData) {
    const validatedFields = projectSchema.safeParse({
        name: formData.get("name"),
        description: formData.get("description"),
    })

    // If validation fails, return the errors
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    // If validation passes, you can proceed with the data
    console.log(validatedFields.data)

    // Here you would likely continue with creating the project, e.g., saving to the database
}
