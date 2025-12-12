import axios from "@/shared/lib/axios";
import { isAxiosError } from "axios";
import { updatePasswordSchema } from "../schema/udpatePassword.schema";
import { UpdatePasswordFormData } from "../types/updatePassword.type";

/**
 * Sends a login request to the server.
 * Validates the input data against the login schema.
 * @param inputData - The data for the login request.
 */

export async function updatePassword(inputData: UpdatePasswordFormData) {
  const validator = updatePasswordSchema.safeParse(inputData);

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
      currentPassword: inputData.currentPassword,
      password: inputData.password,
      confirmPassword: inputData.confirmPassword,
    };

    const res = await axios.patch("/auth/update-password", formattedData);
    return res.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response?.data;
    }
  }
}
