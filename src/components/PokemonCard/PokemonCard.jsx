import { useState } from "react";
import getColors from "../../helpers/getColors";

const whiteBorder = {
  filter:
    "drop-shadow(2px 2px #ffffff) drop-shadow(-1px -1px #ffffff) drop-shadow(1px -1px #ffffff) drop-shadow(-1px 1px #ffffff)",
};

const PokemonCard = ({ pokemon, handleDelete, openModal }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const {bgColor, bgHardColor } = getColors(pokemon.type);

  function handleClickDelete() {
    setIsDeleting(true);
    setTimeout(() => {
      handleDelete(pokemon.id);
    }, 1000);
  }

  function handleClickImg() {
    openModal(pokemon);
  }

  return (
    <>
      <div className={`rounded-lg ${bgColor} p-1 m-4 shadow-black shadow-md hover:shadow-lg hover:shadow-black transform perspective ${
              isDeleting ? "rotateY-180 scale-0" : "rotateY-0 scale-100"
            }
    transition-transform duration-500 ease-in-out`}>
        <div className={`rounded-lg bg-white p-1`}>
          <div
            className={`${bgHardColor} max-w-xs min-w-32 rounded-lg overflow-hidden flex flex-col justify-center items-center`}
          >
            <div className="flex flex-col w-full">
              <div className="flex flex-col w-full cursor-pointer" onClick={handleClickImg}>

              <img
                src={pokemon.image}
                alt={pokemon.name}
                className="w-32 h-32 min-h-32 mx-auto mt-4"
              />
              <div className="p-4 flex flex-col items-center">
                <h2
                  className="text-xl font-bold uppercase text-center text-nowrap"
                  style={whiteBorder}
                >
                  {pokemon.name}
                </h2>
                <hr className="w-full" />
                <p className=" text-center" style={whiteBorder}>
                  Media:&nbsp;
                  {pokemon.media}
                </p>
              </div>
              </div>
              <div className="mx-auto mb-4">
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded-md mx-auto hover:bg-red-800 focus:outline-none"
                  onClick={handleClickDelete}
                >
                  Borrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonCard;
