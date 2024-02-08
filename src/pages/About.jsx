import { Link } from "react-router-dom";
import foto from "../assets/images/foto.jpg";

const About = () => {
  return (
    <>
      <div className="container p-5 mt-10 mx-auto flex flex-col justify-center items-center">
        <img src={foto} alt="" className="rounded-xl w-1/5 shadow-sm shadow-black" />
        <p className="p-2 md:p-4 mt-2 text-lg font-semibold font-sans text-pretty">
          ¡Hola! Soy Rubén Perblac, un aprendiz de programador muy esforzado y
          trabajador.
        </p>
        <Link to="https://github.com/perblac" className="hover:underline mt-10">
          <i className="fa-brands fa-square-github"></i> Mi GitHub
        </Link>
        <Link to="mailto:yhana.kromx@gmail.com" className="hover:underline mt-2 mb-10">
          <i className="fa-solid fa-at"></i> Contacta conmigo
        </Link>
      </div>
    </>
  );
};

export default About;
