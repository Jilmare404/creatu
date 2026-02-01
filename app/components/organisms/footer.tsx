export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Informacion */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Creatu</h3>
            <p className="text-gray-400 text-sm">
              Tu tienda de materiales para manualidades
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Inicio</a></li>
              <li><a href="#catalogo" className="hover:text-white transition">Cat�logo</a></li>
              <li><a href="#contacto" className="hover:text-white transition">Contacto</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>WhatsApp: +57 300 123 4567</li>
              <li>Email: info@creatu.com</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Creatu. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
