'use client';

import { useCartStore } from '@/app/store/cartStore';
import Image from 'next/image';
import { X, Minus, Plus, Trash2 } from 'lucide-react';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const { items, removeItem, updateQuantity, clearCart, getTotalPrice } = useCartStore();

  const generarMensajeWhatsApp = () => {
    let mensaje = '¡Hola! Quiero hacer un pedido:\n\n';

    items.forEach(item => {
      mensaje += `- ${item.cantidad}x ${item.nombre} ($${item.precio.toLocaleString('es-CO')} c/u)\n`;
    });

    mensaje += `\nTotal: $${getTotalPrice().toLocaleString('es-CO')}\n\n¿Está disponible?`;

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
      <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b">
          <h2 className="text-xl font-bold text-gray-800">Carrito de Compras</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Contenido */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <p>Tu carrito está vacío</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 bg-gray-50 p-4 rounded-lg">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image
                      src={item.imagen}
                      alt={item.nombre}
                      fill
                      className="object-cover rounded"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{item.nombre}</h3>
                    <p className="text-purple-600 font-bold">
                      ${item.precio.toLocaleString('es-CO')}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
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
          <div className="border-t p-4 space-y-4">
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Total:</span>
              <span className="text-purple-600">
                ${getTotalPrice().toLocaleString('es-CO')}
              </span>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 text-white text-center py-3 rounded-lg hover:bg-green-600 transition font-semibold"
            >
              Enviar pedido por WhatsApp
            </a>

            <button
              onClick={clearCart}
              className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              Vaciar carrito
            </button>
          </div>
        )}
      </div>
    </>
  );
}
