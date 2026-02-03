import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { productos } from '@/app/data/productos';
import { notFound } from 'next/navigation';
import AddToCartButton from '@/app/components/molecules/AddToCartButton';
import { ArrowLeftIcon } from 'lucide-react';

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductoDetalle({ params }: Props) {
  const { id } = await params;
  const producto = productos.find((p) => p.id === parseInt(id));

  if (!producto) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white/94 py-12">
      <div className="container mx-auto px-4">
        {/* Botón volver */}
        <Link
          href="/"
          className="inline-flex items-center text-black mb-8 bg-zinc-800/10 rounded-md p-2"
        >  <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Volver a la página principal
        </Link>

        {/* Detalle del producto */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Imagen */}
            <div className="relative h-96 md:h-full bg-gray-100">
              <Image
                src={producto.imagen}
                alt={producto.nombre}
                fill
                className="object-cover"
              />
            </div>

            {/* Informaci�n */}
            <div className="p-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                {producto.nombre}
              </h1>

              <p className="text-gray-600 text-lg mb-6">
                {producto.descripcion}
              </p>

              <div className="mb-8">
                <span className="text-4xl font-bold text-purple-600">
                  ${producto.precio.toLocaleString('es-CO')}
                </span>
              </div>

              {/* Botones de acción */}
              <div className="space-y-4">
                <AddToCartButton producto={producto} />

                <a
                  href={`https://wa.me/593985569110?text=${encodeURIComponent(
                    `Hola! Estoy interesado en: ${producto.nombre} - $${producto.precio.toLocaleString('es-CO')}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition text-lg font-semibold text-center"
                >
                  Consultar por WhatsApp
                </a>
              </div>

              {/* Informaci�n adicional */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-2">Informaci�n del producto</h3>
                <ul className="text-gray-600 space-y-2">
                  <li> Disponible para entrega</li>
                  <li> Producto de alta calidad</li>
                  <li> Ideal para manualidades</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
