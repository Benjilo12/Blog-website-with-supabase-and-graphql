import { Link, NavLink } from "react-router";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    { path: "/", link: "Home" },
    { path: "/about", link: "About" },
    { path: "/blogs", link: "Blogs" },
    { path: "/addblog", link: "Add Blog" },
    { path: "/contact", link: "Contact" },
  ];

  return (
    <header className="bg-slate-800 fixed top-[-2] left-0 right-0 text-white">
      <nav className="py-4 px-4 max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link className=" flex gap-1" to="/">
            <img
              className="w-[50px] h-[50px] "
              src="/logo-light.png"
              alt="logo"
            />
            <p className="mt-1 text-white text-xl font-bold">
              Wild <span className="text-amber-400">Blogg</span>
            </p>
          </Link>
        </div>

        {/* navitem for lg devices */}
        <ul className="md:flex gap-12 text-lg hidden">
          {navItems.map(({ path, link }, index) => (
            <li className="font-bold" key={index}>
              <NavLink
                className={`text-bold({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""`}
                to={path}
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* menu icons */}
        <div className="text-white lg:flex gap-4 items-center hidden">
          <a href="/" className="text-blue-400">
            <FaFacebook />
          </a>
          <a href="/" className="text-black">
            <FaXTwitter />
          </a>
          <a href="/" className="text-green-600">
            <FaWhatsapp />
          </a>
          <button className="bg-orange-500 px-6 py-2 font-medium rounded cursor-pointer hover:bg-orange-200 transition-all duration-200 ease-in">
            Subscribe
          </button>
        </div>
        {/* 
        mobile menu btn, display mobile screen */}
        <div className="md:hidden">
          <button
            className="text-white  cursor-pointer
          "
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <IoMdClose className="w-7 h-7" />
            ) : (
              <GiHamburgerMenu className="w-7 h-7" />
            )}
          </button>
        </div>
      </nav>
      {/* 
      mobile menu item */}
      <div>
        {" "}
        <ul
          className={`md:hidden gap-12 text-lg block  space-y-4 px-4 py-6 mt-28 bg-white ${
            isMenuOpen
              ? "fixed top-0 left-0 w-full transition-all ease-out duration-150"
              : "hidden"
          }`}
        >
          {navItems.map(({ path, link }, index) => (
            <li className="font-bold" key={index}>
              <NavLink onClick={toggleMenu} className="text-black" to={path}>
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
