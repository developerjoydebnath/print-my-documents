import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { Auth } from "../models/auth.model";

type AuthStore = {
  auth: Auth | null;
  updateAuth: (authData: Record<string, any>) => void;
};

export const useAuthStore = create<AuthStore>()(
  immer((set) => ({
    auth: null,

    updateAuth: (authData: Record<string, any>) => {
      set((state) => {
        state.auth = new Auth(authData);
      });
    },
  })),
);
