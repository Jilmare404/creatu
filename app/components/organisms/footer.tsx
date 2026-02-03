export default function Footer() {
  return (
    <footer className="bg-[#005954] text-white mt-auto">
      <div className="container mx-auto px-4 py-8 flex justify-around items-center">
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className=" text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Creatu. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
