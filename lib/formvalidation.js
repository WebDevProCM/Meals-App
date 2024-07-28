import {z} from "zod";

const fileSize = 5 * 1024 * 1024;
const fileType = ['image/jpeg', 'image/jpg', 'image/png'];

export const mealFormValidation = z.object({
    _id: z.string().optional(),
    title: z.string().min(1).max(20).trim(),
    summary: z.string().min(1).max(50).trim(),
    instructions: z.string(),
    image: z.any().
        refine((file) => file?.size !== 0, "Please select a image ").
        refine((file) => file?.size <= fileSize, "Image Size should be less than 5mb ").
        refine((file) => fileType.includes(file.type), "Please Select a jpg/ Jpeg or png image ").optional()
})

export const loginSignFormValidation = z.object({
    name: z.string().min(6, "Username must have minimum 6 characters!")
        .max(12, "Username must be less than 12 characters!").trim().optional(),
    email: z.string().email().min(6).trim(),
    password: z.string().min(8, "Password must contain atleast 8 characters!").trim()
        .regex(/[a-zA-Z]/, "Password must contain atleast one letter!")
        .regex(/[0-9]/, "Password must contain atleast one number!")
        .regex(/[^a-zA-Z0-9]/, "Password must contain atleast one special characters eg.(!,@,#,$ etc.)")
})

export const profileUpdateValidation = z.object({
    _id: z.string().trim(),
    name: z.string().min(6, "Username must have minimum 6 characters!")
        .max(12, "Username must be less than 12 characters!").trim(),
    image: z.any().
        refine((file) => file?.size !== 0, "Please select a image ").
        refine((file) => file?.size <= fileSize, "Image Size should be less than 5mb ").
        refine((file) => fileType.includes(file.type), "Please Select a jpg/ Jpeg or png image ").optional(),
    password: z.string().min(8, "Password must contain atleast 8 characters!").trim()
        .regex(/[a-zA-Z]/, "Password must contain atleast one letter!")
        .regex(/[0-9]/, "Password must contain atleast one number!")
        .regex(/[^a-zA-Z0-9]/, "Password must contain atleast one special characters eg.(!,@,#,$ etc.)").optional(),

})