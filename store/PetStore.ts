import { create } from "zustand";

interface PetState {
  petId: number | null;
  petName: string | null;
  setPet: (id: number, name: string) => void;
  clearPet: () => void;
}

export const usePetStore = create<PetState>((set) => ({
  petId: null,
  petName: null,
  setPet: (id, name) => set({ petId: id, petName: name }),
  clearPet: () => set({ petId: null, petName: null }),
}));
