import { Link } from "react-router-dom";

const whiteBorder =
  "drop-shadow(4px 4px 2px #ffffff3f) drop-shadow(-3px -3px 2px #ffffff3f) drop-shadow(4px -3px 2px #ffffff3f) drop-shadow(-3px 4px #ffffff3f)";

const Footer = () => {
  return (
    <>
      <footer className="fixed bottom-0 z-0 bg-gray-800 text-white px-5 py-1 flex justify-between font-sans w-full">
        <div className="flex items-center">&copy; DWec 2024</div>
        <div>
          <Link to="https://github.com/perblac/pokeapi">
            <i
              className="fa-brands fa-square-github text-3xl"
              onMouseEnter={(e) => {
                e.target.style.filter = whiteBorder;
              }}
              onMouseLeave={(e) => e.target.style.filter = ''}
            ></i>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
