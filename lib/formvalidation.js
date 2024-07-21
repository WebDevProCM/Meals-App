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