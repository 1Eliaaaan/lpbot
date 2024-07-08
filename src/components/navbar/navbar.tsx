

const Navbar: React.FC = () => {
    return (
      <nav className="bg-secondary fixed w-full z-50 top-0 left-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <img src="./../src/assets/peepoDJ.webp" className="h-8 mr-3" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">LP Bot</span>
          </a>
          <div className="flex items-center ml-auto space-x-4">
            <button className="text-white bg-primary hover:bg-tertiary focus:ring-4 focus:outline-none focus:ring-quaternary font-medium rounded-lg text-sm px-4 py-2 text-center">
              Iniciar Sesión
            </button>
            <button className="text-white bg-primary hover:bg-tertiary focus:ring-4 focus:outline-none focus:ring-quaternary font-medium rounded-lg text-sm px-4 py-2 text-center">
              Idioma
            </button>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  