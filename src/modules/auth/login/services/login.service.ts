import axios from "@/shared/lib/axios";
import { isAxiosError } from "axios";
import { loginSchema } from "../schema/login.schema";
import { LoginFormData } from "../types/login.type";

/**
 * Sends a login request to the server.
 * Validates the input data against the login schema.
 * @param inputData - The data for the login request.
 */

export async function login(inputData: LoginFormData) {
  const validator = loginSchema.safeParse(inputData);

  if (!validator.success) {
    return {
      data: null,
      success: "failed",
      message: validator.error.issues.map((err) => err.message).join(", "),
    };
  }

  // Combine reservationDate and reservationTime into one Date
  try {
    const res = await axios.post("/auth/login", {
      ...validator.data,
    });
    return res.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response?.data;
    }
  }
}
