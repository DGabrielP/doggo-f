import { create } from "zustand";

interface UserState {
  userId: number | null;
  name: string | null;
  token: string | null; // Agregado el token
  setUser: (id: number, name: string, token: string) => void; // Ahora también guarda el token
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  userId: null,
  name: null,
  token: null,
  setUser: (id, name, token) => set({ userId: id, name: name, token: token }),
  logout: () => set({ userId: null, name: null, token: null }),
}));


