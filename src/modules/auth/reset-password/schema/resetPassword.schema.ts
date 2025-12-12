import z from "zod";

export const resetPasswordSchema = z
  .object({
    token: z.string().min(1, { message: "Token is required" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }),
    confirmPassword: z.string(),
    captcha: z.string().optional(),
    // captcha: z.string().refine((value) => value, {
    //   message: "Please complete the CAPTCHA",
    // }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],

    when(payload) {
      return resetPasswordSchema
        .pick({ password: true, confirmPassword: true })
        .safeParse(payload.value).success;
    },
  });
