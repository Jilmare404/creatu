'use client';

import { useCartStore } from '@/app/store/cartStore';
import Image from 'next/image';
import { ChevronLeft, Minus, Plus, Trash2 } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";


interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const { items, removeItem, updateQuantity, clearCart, getTotalPrice } = useCartStore();

  const generarMensajeWhatsApp = () => {
    let mensaje = '¡Hola! Quiero hacer un pedido:\n\n';

    items.forEach(item => {
      mensaje += `- ${item.cantidad}x ${item.nombre} ($${item.precio.toFixed(2)})\n`;
    });

    mensaje += `\nTotal: $${getTotalPrice().toFixed(2)}\n\n¿Está disponible?`;

    return encodeURIComponent(mensaje);
  };

  const whatsappLink = `https://wa.me/593985569110?text=${generarMensajeWhatsApp()}`;

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/30 z-40"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full md:w-86 bg-[#338b85] shadow-xl z-50 flex flex-col sm:rounded-l-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b text-white">
          <button
            onClick={onClose}
            className="p-2 hover:bg-zinc-800/40 rounded-full transition cursor-pointer"
          >
            <ChevronLeft  className="w-6 h-6" />
          </button>
          <h2 className="text-xl font-bold ">Mi carrito</h2>
          <button
            onClick={clearCart}
            className="p-2 hover:bg-zinc-800/40 rounded-full transition cursor-pointer"
          >
            <Trash2  className="w-6 h-6" />
          </button>
        </div>

        {/* Contenido */}
        <div className="flex-1 overflow-y-auto p-2  bg-white/94">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <p>Tu carrito está vacío</p>
            </div>
          ) : (
            <div className="space-y-2">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 bg-gray-50 p-2 rounded-lg">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image
                      src={item.imagen}
                      alt={item.nombre}
                      fill
                      className="object-cover "
                    />
                  </div>

                  <div className="flex flex-col justify-between py-2 w-full pr-2">
                    <div className='flex gap-2 justify-between'>
                      <h3 className="text-black/70">{item.nombre}</h3>
                      <p className=" text-black">
                        ${item.precio.toFixed(2)}
                      </p>
                    </div>

                    <div className="flex">
                      <div className='flex items-center gap-2 text-gray-700/50 bg-[#338b85] p-1 rounded-md  bg-white/94'>
                        <button
                          onClick={() => updateQuantity(item.id, item.cantidad - 1)}
                          className="p-1 hover:bg-gray-200 rounded"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-semibold">{item.cantidad}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.cantidad + 1)}
                          className="p-1 hover:bg-gray-200 rounded"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto p-1 hover:bg-red-100 text-red-500 rounded"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-4 flex justify-around items-center">
            <div className="flex justify-between items-center flex flex-col">
              <span>Total:</span>
              <span className="text-white">
                ${getTotalPrice().toFixed(2)}
              </span>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 text-white text-center p-3 rounded-lg hover:bg-green-600 transition"
            >
              Pagar
              <FaWhatsapp className="w-6 h-6"/>
            </a>
          </div>
        )}
      </div>
    </>
  );
}
