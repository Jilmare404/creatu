import { create } from 'zustand';

interface CategoriaStore {
  categoriaSeleccionada: string | null;
  setCategoriaSeleccionada: (categoria: string | null) => void;
}

export const useCategoriaStore = create<CategoriaStore>((set) => ({
  categoriaSeleccionada: null,
  setCategoriaSeleccionada: (categoria) => set({ categoriaSeleccionada: categoria }),
}));
