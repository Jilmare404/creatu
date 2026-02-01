'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { productos } from '@/app/data/productos';
import { useCartStore } from '@/app/store/cartStore';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home = () => {
  const productosDestacados = productos.filter(p => p.destacado);
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className='min-h-screen bg-zinc-200/30'>

      {/* Productos Destacados - Carousel */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Productos Destacados
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }
          }}
          className="pb-12"
        >
          {productosDestacados.map((producto) => (
            <SwiperSlide key={producto.id}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                <Link href={`/producto/${producto.id}`} className="block">
                  <div className="relative h-64 bg-gray-100">
                    <Image
                      src={producto.imagen}
                      alt={producto.nombre}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {producto.nombre}
                    </h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-2xl font-bold text-purple-600">
                        ${producto.precio.toLocaleString('es-CO')}
                      </span>
                    </div>
                  </div>
                </Link>

                <div className="px-4 pb-4 flex gap-2">
                  <button
                    onClick={() => addItem(producto)}
                    className="flex-1 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition"
                  >
                    Agregar
                  </button>
                  <Link
                    href={`/producto/${producto.id}`}
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
                  >
                    Ver más
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Todos los productos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productos.map((producto) => (
            <div key={producto.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <Link href={`/producto/${producto.id}`} className="block">
                <div className="relative h-64 bg-gray-100">
                  <Image
                    src={producto.imagen}
                    alt={producto.nombre}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {producto.nombre}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 hidden">
                    {producto.descripcion}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-purple-600">
                      ${producto.precio.toLocaleString('es-CO')}
                    </span>
                  </div>
                </div>
              </Link>

              <div className="px-6 pb-6 flex gap-2">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    addItem(producto);
                  }}
                  className="flex-1 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition"
                >
                  Agregar al carrito
                </button>
                <Link
                  href={`/producto/${producto.id}`}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
                >
                  Ver más
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;