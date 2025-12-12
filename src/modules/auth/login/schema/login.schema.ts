import z from "zod";

export const loginSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
  remember: z.boolean().optional(),
  // captcha: z.string().refine((value) => value.length > 0, {
  //   message: "Please complete the CAPTCHA",
  // }),
  captcha: z.string().optional(),
});
