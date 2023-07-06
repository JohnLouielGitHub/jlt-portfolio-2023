function Header() {
  return (
    <header className="fixed inset-0 font-bold p-4">
      <div className="flex justify-between items-center">
        <div>
          <h2>JLT</h2>
        </div>
        <nav className="flex justify-between items-center">
          <a href="">
            <div className="px-4">Home</div>
          </a>
          <a href="">
            <div className="px-4">Portfolio</div>
          </a>
          <a href="">
            <div className="px-4">Contact</div>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
