"use server";

import { appConfig } from "@/shared/configs/app.config";
import axios from "@/shared/lib/axios";
import { cookies } from "next/headers";

export async function logout() {
  try {
    const accessTokenKey = appConfig.ACCESS_TOKEN_KEY;
    const refreshTokenKey = appConfig.REFRESH_TOKEN_KEY;
    const sessionKey = "session";

    const cs = await cookies();
    const res = await axios.post("/auth/logout", null, {
      headers: {
        Cookie: cs.toString(),
      },
    });

    cs.delete(accessTokenKey);
    cs.delete(refreshTokenKey);
    cs.delete(sessionKey);

    return res.data;
  } catch (error) {}
}
