import z from "zod";
import { updatePasswordSchema } from "../schema/udpatePassword.schema";

export type UpdatePasswordFormData = z.infer<typeof updatePasswordSchema>;
