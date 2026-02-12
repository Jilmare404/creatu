'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { productos } from '@/app/data/productos';
import { notFound, useParams } from 'next/navigation';
import AddToCartButton from '@/app/components/molecules/AddToCartButton';
import { ChevronLeft } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ProductoDetalle() {
  const params = useParams();
  const id = params.id as string;
  const producto = productos.find((p) => p.id === parseInt(id));

  if (!producto) {
    notFound();
  }

  // Simular múltiples imágenes usando la misma imagen
  const imagenes = [producto.imagen, producto.imagen, producto.imagen, producto.imagen];

  return (
    <div className="min-h-screen bg-white/94 sm:py-4 w-full">
      <div className="sm:px-4 w-full">
        {/* Botón volver */}
        <Link
          href="/"
          className="fixed top-20 left-4 inline-flex items-center justify-center text-black bg-white/90 backdrop-blur-sm rounded-md p-2 shadow-lg hover:bg-white hover:scale-110 transition-all z-10"
        >
          <ChevronLeft className="w-5 h-5" />
        </Link>

        {/* Detalle del producto */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden sm:m-6 ">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Carrusel de Imágenes con efecto Cards */}
            <div className="flex-1 flex items-center justify-center p-6">
              <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards, Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                className="w-full max-w-md h-96"
              >
                {imagenes.map((imagen, index) => (
                  <SwiperSlide key={index} className="rounded-xl overflow-hidden bg-white shadow-2xl">
                    <div className="relative w-full h-full">
                      <Image
                        src={imagen}
                        alt={`${producto.nombre} - ${index + 1}`}
                        fill
                        className="object-contain p-1 rounded-2xl"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Información */}
            <div className="flex-1 p-8">
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
