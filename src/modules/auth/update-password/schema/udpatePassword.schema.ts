import z from "zod";

export const updatePasswordSchema = z
  .object({
    currentPassword: z
      .string()
      .min(1, { message: "Current password is required" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],

    when(payload) {
      return updatePasswordSchema
        .pick({ password: true, confirmPassword: true })
        .safeParse(payload.value).success;
    },
  });
