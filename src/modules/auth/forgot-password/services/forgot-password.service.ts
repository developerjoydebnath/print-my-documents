import axios from "@/shared/lib/axios";
import { isAxiosError } from "axios";
import { forgotPasswordSchema } from "../schema/login.schema";
import { ForgotPasswordFormData } from "../types/login.type";

/**
 * Sends a forgot password request to the server.
 * Validates the input data against the forgot password schema.
 * @param inputData - The data for the forgot password request.
 */

export async function forgotPassword(inputData: ForgotPasswordFormData) {
  const validator = forgotPasswordSchema.safeParse(inputData);

  if (!validator.success) {
    return {
      data: null,
      success: "failed",
      message: validator.error.issues.map((err) => err.message).join(", "),
    };
  }

  // Combine reservationDate and reservationTime into one Date
  try {
    const res = await axios.post("/auth/forgot-password", {
      ...validator.data,
    });
    return res.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response?.data;
    }
  }
}
