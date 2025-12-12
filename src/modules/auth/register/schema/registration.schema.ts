import z from "zod";

export const registrationSchema = z
  .object({
    firstName: z.string().min(1, { message: "First Name is required" }),
    lastName: z.string().min(1, { message: "Last Name is required" }),
    email: z.email(),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }),
    confirmPassword: z.string(),
    termsAndConditions: z.boolean().refine((value) => value, {
      message: "You must accept the terms and conditions",
    }),
    // captcha: z.string().refine((value) => value, {
    //   message: "Please complete the CAPTCHA",
    // }),
    captcha: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],

    when(payload) {
      return registrationSchema
        .pick({ password: true, confirmPassword: true })
        .safeParse(payload.value).success;
    },
  });
