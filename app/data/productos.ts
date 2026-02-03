export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
  imagen: string;
  categorias: string[];
  destacado?: boolean;
}

export const productos: Producto[] = [
  // FLORES
  {
    id: 1,
    nombre: "Rosa Roja",
    precio: 5,
    descripcion: "Hermosa rosa roja de papel crepé hecha a mano",
    imagen: "/productos/gato.png",
    categorias: ["flores"],
    destacado: true
  },
  {
    id: 2,
    nombre: "Orquídea",
    precio: 8,
    descripcion: "Delicada orquídea decorativa en foami",
    imagen: "/productos/gato.png",
    categorias: ["flores"],
    destacado: true
  },
  {
    id: 3,
    nombre: "Girasol",
    precio: 6,
    descripcion: "Alegre girasol de tela para decoración",
    imagen: "/productos/gato.png",
    categorias: ["flores"],
    destacado: false
  },
  {
    id: 4,
    nombre: "Tulipán",
    precio: 5,
    descripcion: "Elegante tulipán en diversos colores",
    imagen: "/productos/gato.png",
    categorias: ["flores"],
    destacado: false
  },
  {
    id: 5,
    nombre: "Lirio",
    precio: 7,
    descripcion: "Lirio blanco con detalles realistas",
    imagen: "/productos/gato.png",
    categorias: ["flores"],
    destacado: true
  },
  {
    id: 6,
    nombre: "Margarita",
    precio: 4,
    descripcion: "Margarita simple y encantadora",
    imagen: "/productos/gato.png",
    categorias: ["flores"],
    destacado: false
  },
  {
    id: 7,
    nombre: "Clave de Sol",
    precio: 6,
    descripcion: "Clavel rosado de papel tissue",
    imagen: "/productos/gato.png",
    categorias: ["flores"],
    destacado: false
  },
  {
    id: 8,
    nombre: "Lavanda",
    precio: 5,
    descripcion: "Ramita de lavanda aromática decorativa",
    imagen: "/productos/gato.png",
    categorias: ["flores"],
    destacado: false
  },
  {
    id: 9,
    nombre: "Hortensia",
    precio: 9,
    descripcion: "Arreglo de hortensias azules",
    imagen: "/productos/gato.png",
    categorias: ["flores"],
    destacado: false
  },
  {
    id: 10,
    nombre: "Cerezo",
    precio: 7,
    descripcion: "Flores de cerezo japonés en rama",
    imagen: "/productos/gato.png",
    categorias: ["flores"],
    destacado: false
  },

  // ANIME
  {
    id: 11,
    nombre: "Goku",
    precio: 12,
    descripcion: "Figura de Goku Super Saiyan en porcelana fría",
    imagen: "/productos/gato.png",
    categorias: ["anime"],
    destacado: true
  },
  {
    id: 12,
    nombre: "Luffy",
    precio: 12,
    descripcion: "Monkey D. Luffy con sombrero de paja",
    imagen: "/productos/gato.png",
    categorias: ["anime"],
    destacado: true
  },
  {
    id: 13,
    nombre: "Naruto",
    precio: 11,
    descripcion: "Naruto Uzumaki con headband de Konoha",
    imagen: "/productos/gato.png",
    categorias: ["anime"],
    destacado: false
  },
  {
    id: 14,
    nombre: "Pikachu",
    precio: 10,
    descripcion: "Adorable Pikachu de fieltro",
    imagen: "/productos/gato.png",
    categorias: ["anime"],
    destacado: false
  },
  {
    id: 15,
    nombre: "Sailor Moon",
    precio: 13,
    descripcion: "Sailor Moon con cetro lunar",
    imagen: "/productos/gato.png",
    categorias: ["anime"],
    destacado: false
  },
  {
    id: 16,
    nombre: "Totoro",
    precio: 11,
    descripcion: "Mi vecino Totoro en peluche artesanal",
    imagen: "/productos/gato.png",
    categorias: ["anime"],
    destacado: false
  },
  {
    id: 17,
    nombre: "Eren Yeager",
    precio: 12,
    descripcion: "Eren de Attack on Titan con equipo 3D",
    imagen: "/productos/gato.png",
    categorias: ["anime"],
    destacado: false
  },
  {
    id: 18,
    nombre: "All Might",
    precio: 13,
    descripcion: "All Might de My Hero Academia",
    imagen: "/productos/gato.png",
    categorias: ["anime"],
    destacado: false
  },
  {
    id: 19,
    nombre: "Tanjiro",
    precio: 12,
    descripcion: "Tanjiro Kamado de Demon Slayer",
    imagen: "/productos/gato.png",
    categorias: ["anime"],
    destacado: false
  },
  {
    id: 20,
    nombre: "Ash Ketchum",
    precio: 11,
    descripcion: "Ash con su gorra clásica de Pokémon",
    imagen: "/productos/gato.png",
    categorias: ["anime"],
    destacado: false
  },

  // ANIMALES
  {
    id: 21,
    nombre: "Gato",
    precio: 8,
    descripcion: "Gatito tierno en amigurumi tejido",
    imagen: "/productos/gato.png",
    categorias: ["animales"],
    destacado: true
  },
  {
    id: 22,
    nombre: "Perro",
    precio: 8,
    descripcion: "Perrito Golden Retriever en fieltro",
    imagen: "/productos/gato.png",
    categorias: ["animales"],
    destacado: false
  },
  {
    id: 23,
    nombre: "Conejo",
    precio: 7,
    descripcion: "Conejito esponjoso con orejas largas",
    imagen: "/productos/gato.png",
    categorias: ["animales"],
    destacado: false
  },
  {
    id: 24,
    nombre: "Oso Panda",
    precio: 9,
    descripcion: "Panda bebé de porcelana fría",
    imagen: "/productos/gato.png",
    categorias: ["animales"],
    destacado: false
  },
  {
    id: 25,
    nombre: "Búho",
    precio: 8,
    descripcion: "Búho sabio con ojos grandes",
    imagen: "/productos/gato.png",
    categorias: ["animales"],
    destacado: false
  },
  {
    id: 26,
    nombre: "Zorro",
    precio: 9,
    descripcion: "Zorrito naranja de fieltro",
    imagen: "/productos/gato.png",
    categorias: ["animales"],
    destacado: false
  },
  {
    id: 27,
    nombre: "Pingüino",
    precio: 7,
    descripcion: "Pingüino con bufanda tejida",
    imagen: "/productos/gato.png",
    categorias: ["animales"],
    destacado: false
  },
  {
    id: 28,
    nombre: "Elefante",
    precio: 10,
    descripcion: "Elefante bebé en tela suave",
    imagen: "/productos/gato.png",
    categorias: ["animales"],
    destacado: false
  },
  {
    id: 29,
    nombre: "Koala",
    precio: 8,
    descripcion: "Koala abrazando eucalipto",
    imagen: "/productos/gato.png",
    categorias: ["animales"],
    destacado: false
  },
  {
    id: 30,
    nombre: "Tortuga",
    precio: 7,
    descripcion: "Tortuga marina decorativa",
    imagen: "/productos/gato.png",
    categorias: ["animales"],
    destacado: false
  }
];
