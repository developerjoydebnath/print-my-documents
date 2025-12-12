import z from "zod";
import { registrationSchema } from "../schema/registration.schema";

export type RegistrationFormData = z.infer<typeof registrationSchema>;
