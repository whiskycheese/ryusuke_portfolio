import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const innerHeight = window.innerHeight;
      if (scrollTop > innerHeight * 0.9) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} ${scrolled ? 'bg-white shadow-xl' : 'bg-transparent shadow-none'} w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-7 h-7 object-contain" />
          <p className="flex text-secondary text-[18px] font-bold cursor-pointer">
            Ryusuke &nbsp;
            <span className="sm:block hidden">| Portfolio</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              to={link.id}
              key={link.id}
              className={`${
                active === link.title
                  ? "opacity-100"
                  : "opacity-50"
              } text-secondary hover:opacity-100 text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu" 
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 green-blue-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex flex-col justify-end items-center gap-4">
              {navLinks.map((link) => (
                <li
                  to={link.id}
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-secondary"
                      : "text-white"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar;