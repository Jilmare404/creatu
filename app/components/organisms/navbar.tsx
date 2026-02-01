'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/app/store/cartStore';
import { useState } from 'react';
import Cart from './Cart';

export default function Navbar() {
  const { getTotalItems } = useCartStore();
  const cartCount = getTotalItems();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-gray-800">
                Creatu
              </Link>
            </div>

            {/* Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition">
                Inicio
              </Link>
              <a href="#catalogo" className="text-gray-600 hover:text-gray-900 transition">
                Catálogo
              </a>
              <a href="#contacto" className="text-gray-600 hover:text-gray-900 transition">
                Contacto
              </a>
            </div>

            {/* Carrito */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-gray-100 rounded-full transition"
            >
              <ShoppingCart className="w-6 h-6 text-gray-700" />
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
    </>
  );
}
