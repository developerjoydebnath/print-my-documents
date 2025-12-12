import z from "zod";
import { resetPasswordSchema } from "../schema/resetPassword.schema";

export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;
