function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-bold p-4 bg-zinc-800 shadow-lg shadow-zinc-500/20 lg:px-20 xl:px-40">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl">
            JLT<span className="text-yellow-500">.</span>
          </h2>
        </div>
        <nav className="flex justify-between items-center">
          <a href="#hero">
            <div className="px-4">Home</div>
          </a>
          <a href="#portfolio">
            <div className="px-4">Portfolio</div>
          </a>
          <a href="#contact">
            <div className="px-4">Contact</div>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
