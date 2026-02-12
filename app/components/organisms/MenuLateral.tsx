'use client';

import { X } from 'lucide-react';
import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";
import { useRouter, usePathname } from 'next/navigation';


interface MenuLateralProps {
  isOpen: boolean;
  onClose: () => void;
  onCategoriaChange?: (categoria: string | null) => void;
}

const categorias = [
  { nombre: 'Flores', slug: 'flores' },
  { nombre: 'Anime', slug: 'anime' },
  { nombre: 'Animales', slug: 'animales' },
];

export default function MenuLateral({ isOpen, onClose, onCategoriaChange }: MenuLateralProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleCategoriaClick = (categoria: string | null) => {
    onCategoriaChange?.(categoria);

    // Si no estamos en la página principal, redirigir
    if (pathname !== '/') {
      router.push('/');
    }

    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/30 z-40"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full md:w-86 w-full bg-white shadow-xl z-50 flex flex-col sm:rounded-r-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b bg-[#338b85] sm:rounded-tr-2xl">
          <h2 className="text-xl font-bold text-white pl-3">Menú</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-zinc-800/40 rounded-full transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Contenido */}
        <div className="flex-1 overflow-y-auto">
          <div className="space-y-6 p-8">
            {/* Categorías */}
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">
                Categorías
              </h3>
              <ul className="space-y-2">
                {categorias.map((categoria) => (
                  <li key={categoria.slug}>
                    <button
                      onClick={() => handleCategoriaClick(categoria.slug)}
                      className="w-full text-left px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
                    >
                      {categoria.nombre}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => handleCategoriaClick(null)}
                    className="w-full text-left px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
                  >
                    Todos los productos
                  </button>
                </li>
              </ul>
            </div>

            {/* Separador */}
            <hr className="border-gray-200" />

            {/* Otros enlaces */}
            <div>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://wa.me/593985569110?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition flex items-center gap-6"
                  >
                    Contacto
                    <FaWhatsapp className='bg-green-500 w-6 h-6 text-white rounded-md p-0.5'/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
