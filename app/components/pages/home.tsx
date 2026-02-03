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
import { ShoppingCart } from 'lucide-react';

const Home = () => {
  const productosDestacados = productos.filter(p => p.destacado);
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className='min-h-screen bg-white/94'>


      <div className='grid grid-cols-2'>
        <div className='text-red-500'>aaaaaaaaaaaaaaaaaa</div>
        <div className='h-65 md:h-screen bg-[#5dc1b9]'>
        </div>
        
      </div>

      <div className='sm:hidden grid grid-cols-2 gap-0'>
        <h2 className="font-bold text-gray-800 text-right pr-1">
          Productos
        </h2>
        <h2 className="font-bold text-white bg-[#5dc1b9] text-left pl-1">
          Destacados
        </h2>
      </div>

      {/* Productos Destacados - Carousel */}
      <section className="container mx-auto px-4 sm:py-10">
          <h2 className="sm:text-3xl  font-bold text-gray-800 text-center max-sm:hidden">
            Productos Destacados
          </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 }
          }}
          className=""
        >
          {productosDestacados.map((producto) => (
            <SwiperSlide key={producto.id} className="py-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full ">
                <Link href={`/producto/${producto.id}`} className="block">
                  <div className="relative h-30 sm:h-60 bg-gray-100">
                    <Image
                      src={producto.imagen}
                      alt={producto.nombre}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="pt-2 px-2 flex justify-center items-center gap-2 sm:gap-4">
                    <h3 className="sm:text-lg font-semibold text-gray-800">
                      {producto.nombre}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="sm:text-lg font-bold text-purple-600">
                        ${producto.precio.toLocaleString('es-CO')}
                      </span>
                    </div>
                    <button 
                      onClick={() => addItem(producto)}
                      className="bg-zinc-800/40 text-white p-2 rounded-full hover:bg-[#338b85] transition cursor-pointer">
                        <ShoppingCart className='size-5 sm:size-7'/>
                    </button>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <h3
                      className="bg-[#dfce3] text-gray-700 max-sm:text-sm sm:px-4 mb-2 rounded-lg"
                    >
                      Ver más
                    </h3>
                  </div>
                </Link>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Todos los productos
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
          {productos.map((producto) => (
            <div key={producto.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <Link href={`/producto/${producto.id}`} className="block">
                <div className="relative h-35 sm:h-60 bg-gray-100">
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
                  className="flex-1 bg-[#338b85] text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition cursor-pointer"
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