"use server"

import { z } from "zod"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

type FormData = z.infer<typeof formSchema>

export async function sendContactEmail(formData: FormData) {
  try {
    // Validate form data
    const validatedFields = formSchema.safeParse(formData)

    if (!validatedFields.success) {
      return { success: false, error: "Invalid form data. Please check your inputs." }
    }

    // In production, you would integrate with an email service like Resend, SendGrid, or AWS SES
    console.log("Contact form submission:", validatedFields.data)

    // Simulate a small delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    return { success: true }
  } catch (error) {
    console.error("Error processing contact form:", error)
    return { success: false, error: "Failed to send message. Please try again later." }
  }
}
