import * as z from "zod"; 
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
export const SignUpSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Please enter a valid email"),
    password: z
      .string()
      .regex(
        passwordRegex,
        "Password must include uppercase, lowercase, number & special character"
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
  
//   export const ProjectFormSchema = z.object({
//   name: z.string().min(1),
//   description: z.string().min(10),

//   thumbnail: z.instanceof(File),
//   image1: z.instanceof(File),
//   image2: z.instanceof(File),
//   image3: z.instanceof(File),

//   githubRepoLink: z.string().url().optional(),
//   liveDemoLink: z.string().url().optional(),

//   iconLists: z.array(z.string()),
// });

export const ProjectFormSchema = z.object({
  name: z.string().min(1, "Project name is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  thumbnail: z.string().min(1, "Thumbnail is required"),
  image1: z.string().min(1, "Image 1 is required"),
  image2: z.string().min(1, "Image 2 is required"),
  image3: z.string().min(1, "Image 3 is required"),
  githubRepoLink: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  liveDemoLink: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  iconLists: z.array(z.string()).min(1, "At least one icon is required"),
})