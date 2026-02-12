'use client';

import Link from 'next/link';
import { ShoppingCart, TextAlignJustify  } from 'lucide-react';
import { useCartStore } from '@/app/store/cartStore';
import { useCategoriaStore } from '@/app/store/categoriaStore';
import { useState } from 'react';
import Cart from './Cart';
import MenuLateral from './MenuLateral';

export default function Navbar() {
  const { getTotalItems } = useCartStore();
  const { setCategoriaSeleccionada } = useCategoriaStore();
  const cartCount = getTotalItems();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-[#005954] shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 sm:px-10 px-3">
            {/*Menu*/}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 hover:bg-zinc-800/40 rounded-full transition"
            >
              <TextAlignJustify className="w-6 h-6" />
            </button>
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold">
                Creatu
              </Link>
            </div>


            {/* Carrito */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-zinc-800/40 rounded-full transition"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <MenuLateral
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onCategoriaChange={setCategoriaSeleccionada}
      />
    </>
  );
}
