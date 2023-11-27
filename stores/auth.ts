import { createJSONStorage, persist } from "zustand/middleware";

import { create } from "zustand";

interface AuthState {
  signUpRole: string;
  setSignUpRole: (role: string) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      signUpRole: "",
      setSignUpRole: (role: string) => set({ signUpRole: role }),
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({ signUpRole: state.signUpRole }),
    }
  )
);
