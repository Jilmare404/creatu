import { create } from 'zustand';
import { Producto } from '@/app/data/productos';

export interface CartItem extends Producto {
  cantidad: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (producto: Producto) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, cantidad: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addItem: (producto) => {
    set((state) => {
      const existingItem = state.items.find((item) => item.id === producto.id);

      if (existingItem) {
        // Si ya existe, incrementar cantidad
        return {
          items: state.items.map((item) =>
            item.id === producto.id
              ? { ...item, cantidad: item.cantidad + 1 }
              : item
          ),
        };
      } else {
        // Si no existe, agregar nuevo
        return {
          items: [...state.items, { ...producto, cantidad: 1 }],
        };
      }
    });
  },

  removeItem: (id) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }));
  },

  updateQuantity: (id, cantidad) => {
    if (cantidad <= 0) {
      get().removeItem(id);
      return;
    }

    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, cantidad } : item
      ),
    }));
  },

  clearCart: () => {
    set({ items: [] });
  },

  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.cantidad, 0);
  },

  getTotalPrice: () => {
    return get().items.reduce((total, item) => total + item.precio * item.cantidad, 0);
  },
}));
