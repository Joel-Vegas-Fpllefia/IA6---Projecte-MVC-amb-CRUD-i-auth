export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-transparent">
      <div className="text-xl font-bold tracking-tighter text-white">
        VanLife <span className="block text-[10px] uppercase tracking-[3px] text-gray-400 font-light">Rentals</span>
      </div>
      
      <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300 uppercase tracking-widest">
        <a href="#" className="hover:text-cyan-400">Inici</a>
        <a href="#" className="hover:text-cyan-400">Catàleg</a>
        <a href="#" className="hover:text-cyan-400">Sobre nosaltres</a>
        <a href="#" className="hover:text-cyan-400">Contacte</a>
      </div>

      <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-all">
        Reserva ara
      </button>
    </nav>
  );
}