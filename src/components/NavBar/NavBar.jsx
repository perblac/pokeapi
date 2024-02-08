import { Link } from "react-router-dom";
import logo from "../../assets/images/pokeball.svg";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (windowWidth > 400 && window.innerWidth <= 400)
        setIsMobileMenuOpen(false);
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className="bg-gray-800 text-white p-5 flex justify-between font-sans mb-10">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Logo React" className="w-16 h-16 mx-4" />
          </Link>
          <span className="text-3xl font-bold">Pokeapi</span>
        </div>
        <nav className="flex items-center">
          {windowWidth < 400 ? (
            <>
              <div className="flex flex-col items-center">
                <button
                  onClick={handleMenuToggle}
                  className="outline outline-1 rounded-lg p-2 w-12 ml-auto"
                >
                  {isMobileMenuOpen ? (
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                  ) : (
                    <i className="fa-solid fa-ellipsis"></i>
                  )}
                </button>
                {isMobileMenuOpen && (
                  <ul className="flex flex-col items-center gap-4 mt-4">
                    <li className=" ml-auto">
                      <Link
                        to="/"
                        className="hover:text-gray-400 hover:outline hover:outline-1 rounded-lg p-2 mb-4"
                      >
                        Home
                      </Link>
                    </li>
                    <li className=" ml-auto">
                      <Link
                        to="about"
                        className="hover:text-gray-400 hover:outline hover:outline-1 rounded-lg p-2 mb-4 text-nowrap"
                      >
                        Acerca de
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </>
          ) : (
            <>
              <ul className="flex space-x-10 mx-10 items-center">
                <li>
                  <Link
                    to="/"
                    className="hover:text-gray-400 hover:outline hover:outline-1 rounded-lg p-4"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="about"
                    className="hover:text-gray-400 hover:outline hover:outline-1 rounded-lg p-4 text-nowrap"
                  >
                    Acerca de
                  </Link>
                </li>
              </ul>
            </>
          )}
        </nav>
      </header>
    </>
  );
};

export default NavBar;
