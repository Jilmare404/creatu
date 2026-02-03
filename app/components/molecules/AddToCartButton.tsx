'use client';

import { useCartStore } from '@/app/store/cartStore';
import { Producto } from '@/app/data/productos';

interface AddToCartButtonProps {
  producto: Producto;
  className?: string;
}

export default function AddToCartButton({ producto, className = '' }: AddToCartButtonProps) {
  const { addItem, items } = useCartStore();

  const cantidadEnCarrito = items.find(item => item.id === producto.id)?.cantidad || 0;

  return (
    <button
      onClick={() => addItem(producto)}
      className={className || "w-full bg-[#9ce0db] text-white py-3 px-6 rounded-lg hover:bg-purple-600 transition text-lg font-semibold"}
    >
      {cantidadEnCarrito > 0 ? `${cantidadEnCarrito} en carrito` : 'Agregar al carrito'}
    </button>
  );
}
