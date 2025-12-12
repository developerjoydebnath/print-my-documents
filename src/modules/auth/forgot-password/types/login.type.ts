import z from "zod";
import { forgotPasswordSchema } from "../schema/login.schema";

export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
