import axios from "@/shared/lib/axios";
import { isAxiosError } from "axios";
import { resetPasswordSchema } from "../schema/resetPassword.schema";
import { ResetPasswordFormData } from "../types/resetPassword.type";

/**
 * Sends a login request to the server.
 * Validates the input data against the login schema.
 * @param inputData - The data for the login request.
 */

export async function resetPassword(inputData: ResetPasswordFormData) {
  const validator = resetPasswordSchema.safeParse(inputData);

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
      token: inputData.token,
      password: inputData.password,
      confirmPassword: inputData.confirmPassword,
    };

    const res = await axios.post("/auth/reset-password", formattedData);
    return res.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response?.data;
    }
  }
}
