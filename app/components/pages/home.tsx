import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { productos } from '@/app/data/productos';

const Home = () => {
  const productosDestacados = productos.slice(0, 6);

  return (
    <div className='min-h-screen bg-zinc-200/30'>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Creatu</h1>
          <p className="text-xl mb-8">Todo lo que necesitas para tus manualidades</p>
        </div>
      </section>

      {/* Catálogo */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Productos Destacados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productosDestacados.map((producto) => (
            <Link
              key={producto.id}
              href={`/producto/${producto.id}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 bg-gray-100">
                  <Image
                    src={producto.imagen}
                    alt={producto.nombre}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {producto.nombre}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {producto.descripcion}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-purple-600">
                      ${producto.precio.toLocaleString('es-CO')}
                    </span>
                    <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition">
                      Ver más
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;