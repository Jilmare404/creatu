'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { productos } from '@/app/data/productos';
import { useCartStore } from '@/app/store/cartStore';
import { useCategoriaStore } from '@/app/store/categoriaStore';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ShoppingCart, Plus   } from 'lucide-react';

const Home = () => {
  const { categoriaSeleccionada, setCategoriaSeleccionada } = useCategoriaStore();

  const productosDestacados = productos.filter(p => p.destacado);
  const productosFiltrados = categoriaSeleccionada
    ? productos.filter(p => p.categorias.includes(categoriaSeleccionada))
    : productos;

  const addItem = useCartStore((state) => state.addItem);
  const items = useCartStore((state) => state.items);

  return (
    <div className='min-h-screen bg-white'>


      <div className='grid grid-cols-2 '>
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
      <section className="container mx-auto px-2 sm:py-10">
          <h2 className="sm:text-3xl  font-bold text-gray-800 text-center max-sm:hidden">
            Productos Destacados
          </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 }
          }}
          className=""
        >
          {productosDestacados.map((producto) => (
            <SwiperSlide key={producto.id} className="py-8">
              <div className="rounded-md overflow-hidden hover:shadow-xl/20 transition-shadow duration-300 h-full">
                <Link href={`/producto/${producto.id}`} className="block ">
                  <div className="relative h-40 sm:h-60 sm:p-2 ">
                    <Image
                      src={producto.imagen}
                      alt={producto.nombre}
                      fill
                      className="p-2 rounded-xl hover:scale-106 transition-transform duration-300"
                    />
                  </div>
                </Link>
                <div className='flex justify-between items-center m-2 tracking-tight leading-none'>
                  <div className='flex flex-col'>
                    <div className="px-2 flex justify-center items-center gap-2">
                      <h3 className="sm:text-lg text-gray-800">
                        {producto.nombre}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="sm:text-lg font-bold text-black">
                          ${producto.precio.toFixed(2)}
                        </span>
                      </div>
                    </div>

                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addItem(producto);
                    }}
                    className={`text-white p-1.5 rounded-full transition-all duration-200 cursor-pointer active:scale-90 ${
                      items.find(item => item.id === producto.id)
                        ? 'bg-[#338b85] animate-pulse'
                        : 'bg-zinc-800/40 hover:bg-[#338b85]'
                    }`}>
                      {items.find(item => item.id === producto.id) ? (
                        <ShoppingCart className='size-5 sm:size-7'/>
                      ) : (
                        <Plus className='size-5 sm:size-7'/>
                      )}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      
      <div className='w-full p-5 sm:mb-10 mb-6 flex items-center bg-zinc-800/10'>
        <div className='flex items-center gap-4 w-full justify-center text-white text-sm sm:text-xl'>
          <h3
            onClick={() => setCategoriaSeleccionada('flores')}
            className={`p-1.5 rounded-md font-semibold w-35 text-center cursor-pointer transition ${
              categoriaSeleccionada === 'flores' ? 'bg-[#338b85] scale-110' : 'bg-[#5dc1b9] hover:bg-[#338b85]'
            }`}
          >
            Flores
          </h3>
          <h3
            onClick={() => setCategoriaSeleccionada('anime')}
            className={`p-1.5 rounded-md font-semibold w-35 text-center cursor-pointer transition ${
              categoriaSeleccionada === 'anime' ? 'bg-[#338b85] scale-110' : 'bg-[#5dc1b9] hover:bg-[#338b85]'
            }`}
          >
            Anime
          </h3>
          <h3
            onClick={() => setCategoriaSeleccionada('animales')}
            className={`p-1.5 rounded-md font-semibold w-35 text-center cursor-pointer transition ${
              categoriaSeleccionada === 'animales' ? 'bg-[#338b85] scale-110' : 'bg-[#5dc1b9] hover:bg-[#338b85]'
            }`}
          >
            Animales
          </h3>
          <h3
            onClick={() => setCategoriaSeleccionada(null)}
            className={`p-1.5 rounded-md font-semibold w-35 text-center cursor-pointer transition ${
              categoriaSeleccionada === null ? 'bg-[#338b85] scale-110' : 'bg-[#5dc1b9] hover:bg-[#338b85]'
            }`}
          >
            Todos
          </h3>
        </div>
      </div>

      <h2 className="sm:text-3xl text-xl font-bold text-gray-800 text-center bg-white">
        {categoriaSeleccionada ? categoriaSeleccionada.charAt(0).toUpperCase() + categoriaSeleccionada.slice(1) : 'Todos los productos'}
      </h2>
      <section className="container mx-auto px-2 py-4 sm:p-6 bg-white">

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {productosFiltrados.map((producto) => (
            <div key={producto.id} className="bg-white rounded-md overflow-hidden hover:shadow-xl/20 transition-shadow duration-300 h-full">
              <Link href={`/producto/${producto.id}`} className="block ">
                <div className="relative h-40 sm:h-60 p-2">
                  <Image
                    src={producto.imagen}
                    alt={producto.nombre}
                    fill
                    className="rounded-xl p-2 hover:scale-106 transition-transform duration-300"
                  />
                </div>
              </Link>
              <div className='flex justify-between items-center m-2 tracking-tight leading-none'>
                <div className='flex flex-col'>
                  <div className="px-2 flex justify-center items-center gap-2">
                    <h3 className="sm:text-lg text-gray-800">
                      {producto.nombre}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="sm:text-lg font-bold text-black">
                        ${producto.precio.toFixed(2)}
                      </span>
                    </div>
                  </div>

                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addItem(producto);
                  }}
                  className={`text-white p-1.5 rounded-full transition-all duration-200 cursor-pointer active:scale-90 ${
                    items.find(item => item.id === producto.id)
                      ? 'bg-[#338b85] animate-pulse'
                      : 'bg-zinc-800/40 hover:bg-[#338b85]'
                  }`}>
                    {items.find(item => item.id === producto.id) ? (
                      <ShoppingCart className='size-5 sm:size-7'/>
                    ) : (
                      <Plus className='size-5 sm:size-7'/>
                    )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;