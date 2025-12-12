import axios from "@/shared/lib/axios";
import { isAxiosError } from "axios";
import { registrationSchema } from "../schema/registration.schema";
import { RegistrationFormData } from "../types/registration.type";

/**
 * Sends a login request to the server.
 * Validates the input data against the login schema.
 * @param inputData - The data for the login request.
 */

export async function register(inputData: RegistrationFormData) {
  const validator = registrationSchema.safeParse(inputData);

  if (!validator.success) {
    return {
      data: null,
      success: "failed",
      message: validator.error.issues.map((err) => err.message).join(", "),
    };
  }

  // Combine reservationDate and reservationTime into one Date
  try {
    const formattedData = {
      firstName: inputData.firstName,
      lastName: inputData.lastName,
      email: inputData.email,
      password: inputData.password,
      confirmPassword: inputData.confirmPassword,
    };

    const res = await axios.post("/auth/register", formattedData);
    return res.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response?.data;
    }
  }
}
