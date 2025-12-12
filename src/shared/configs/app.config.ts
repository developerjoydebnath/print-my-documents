
// this is a demo example of app config change it when you are working on your project
export const appConfig = {
  APP_URL: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",

  // api config
  API_URL: process.env.API_URL,
  PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:14001",
  ACCESS_TOKEN_KEY: process.env.ACCESS_TOKEN_KEY ?? "jwt_access_secret",
  REFRESH_TOKEN_KEY:
    process.env.REFRESH_TOKEN_KEY ?? "33e3ce507705cc543171a0c9",
  API_PREFIX: process.env.API_PREFIX,

  APP_NAME: "Elite Match Africa",
  APP_DESCRIPTION: "Connecting African talent with global opportunities.",
  API_BASE_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:14001/api",
  CLOUD_FLARE_CAPTCHA_SITE_KEY:
    process.env.NEXT_PUBLIC_CLOUDFARE_CAPTCHA_SITE_KEY || "",
  CLOUD_FLARE_CAPTCHA_SECRET_KEY:
    process.env.NEXT_PUBLIC_CLOUDFARE_CAPTCHA_SECRET_KEY || "",
  SUPPORT_EMAIL: "support@elitematchafrica.com",

  STRIPE_SUCCESS_URL:
    process.env.NEXT_PUBLIC_STRIPE_SUCCESS_URL ||
    "http://localhost:3000/subscriptions/success",
  STRIPE_FAILURE_URL:
    process.env.NEXT_PUBLIC_STRIPE_FAILURE_URL ||
    "http://localhost:3000/subscriptions/failure",
  DISABLE_DEVTOOL: process.env.NEXT_PUBLIC_DISABLE_DEVTOOL || true,
  SOCKET_URL: process.env.NEXT_PUBLIC_SOCKET_URL || "ws://localhost:14001",
};
