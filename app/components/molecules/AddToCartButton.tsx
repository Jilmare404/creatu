'use client';

import { useCartStore } from '@/app/store/cartStore';
import { Producto } from '@/app/data/productos';

interface AddToCartButtonProps {
  producto: Producto;
  className?: string;
}

export default function AddToCartButton({ producto, className = '' }: AddToCartButtonProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <button
      onClick={() => addItem(producto)}
      className={className || "w-full bg-purple-500 text-white py-3 px-6 rounded-lg hover:bg-purple-600 transition text-lg font-semibold"}
    >
      Agregar al carrito
    </button>
  );
}
