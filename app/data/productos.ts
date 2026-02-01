export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
  imagen: string;
  destacado?: boolean;
}

export const productos: Producto[] = [
  {
    id: 1,
    nombre: "Pintura Acrílica Set",
    precio: 25,
    descripcion: "Set de 12 colores de pintura acrílica de alta calidad para tus proyectos",
    imagen: "/productos/gato.png",
    destacado: true
  },
  {
    id: 2,
    nombre: "Tijeras de Precisión",
    precio: 15,
    descripcion: "Tijeras profesionales ideales para cortes precisos en papel y tela",
    imagen: "/productos/gato.png",
    destacado: true
  },
  {
    id: 3,
    nombre: "Pegamento Universal",
    precio: 8,
    descripcion: "Pegamento fuerte para todo tipo de manualidades y materiales",
    imagen: "/productos/gato.png",
    destacado: true
  },
  {
    id: 4,
    nombre: "Papel Decorativo x50",
    precio: 18,
    descripcion: "Pack de 50 hojas de papel decorado con diferentes diseños y colores",
    imagen: "/productos/gato.png",
    destacado: true
  },
  {
    id: 5,
    nombre: "Pinceles Profesionales",
    precio: 22,
    descripcion: "Set de 10 pinceles de diferentes tamaños para pintura y detallado",
    imagen: "/productos/gato.png",
    destacado: true
  },
  {
    id: 6,
    nombre: "Cinta Adhesiva Washi",
    precio: 12,
    descripcion: "Set de 8 rollos de cinta washi con diseños coloridos y divertidos",
    imagen: "/productos/gato.png",
    destacado: false
  },
  {
    id: 7,
    nombre: "Marcadores Permanentes",
    precio: 16,
    descripcion: "Pack de 12 marcadores permanentes de colores vibrantes",
    imagen: "/productos/gato.png",
    destacado: false
  },
  {
    id: 8,
    nombre: "Foami de Colores",
    precio: 10,
    descripcion: "20 láminas de foami en colores variados para manualidades",
    imagen: "/productos/gato.png",
    destacado: false
  },
  {
    id: 9,
    nombre: "Pistola de Silicona",
    precio: 20,
    descripcion: "Pistola de silicona caliente con 10 barras incluidas",
    imagen: "/productos/gato.png",
    destacado: false
  },
  {
    id: 10,
    nombre: "Kit de Lentejuelas",
    precio: 14,
    descripcion: "Caja organizadora con lentejuelas de múltiples colores y tamaños",
    imagen: "/productos/gato.png",
    destacado: false
  }
];
