const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white px-8 py-4 shadow">
      <h1 className="text-2xl font-bold">John Doe</h1>
      <ul className="flex space-x-6">
        <li>
          <a href="#about" className="hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:underline">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
