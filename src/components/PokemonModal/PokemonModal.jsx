import { useCallback, useRef, useState } from "react";
import getColors from "../../helpers/getColors";

const whiteBorder = {
  filter:
    "drop-shadow(2px 2px #ffffff) drop-shadow(-1px -1px #ffffff) drop-shadow(1px -1px #ffffff) drop-shadow(-1px 1px #ffffff)",
};

let image3D = false,
  imageAnimBack = false,
  bgColor = "",
  bgHardColor = "";

const PokemonModal = (props) => {
  const { isOpen, selectedPokemon, onClose } = props;
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  const pokemon = selectedPokemon;
  const img1 = useRef();
  const img2 = useRef();

  if (isOpen) {
    bgColor = getColors(pokemon.type).bgColor;
    bgHardColor = getColors(pokemon.type).bgHardColor;
  }

  function onClickImageBig() {
    image3D = !image3D;
    forceUpdate();
  }

  function onClickImageAnim() {
    imageAnimBack = !imageAnimBack;
    forceUpdate();
  }

  function handleClickClose() {
    image3D = false;
    imageAnimBack = false;
    onClose();
  }

  return (
    <>
      <div
        className={`fixed z-10 top-0 left-0 w-full h-full flex items-center justify-center
      ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
      transition-opacity ease-in-out duration-500`}
      >
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-80"
          onClick={handleClickClose}
        ></div>

        <div className="bg-black rounded-3xl">
          <div className="relative rounded-3xl">
            <div
              className={`absolute -inset-4 rounded-3xl ${bgHardColor} opacity-75 blur`}
            ></div>

            <div className={`relative z-30 p-1 rounded-3xl ${bgHardColor}`}>
              <div className="bg-white p-1 rounded-3xl">
                <div className={`z-40 p-4 rounded-3xl max-w-2xl ${bgColor}`}>
                  <h1
                    className={`${bgHardColor} bg-[length:100%] bg-no-repeat bg-bottom w-fit mx-auto px-5 pb-4 pt-2 mb-2 rounded-2xl border border-white text-5xl text-center uppercase font-bold tracking-tight`}
                  >
                    <span style={whiteBorder}>
                      {isOpen ? pokemon.name : ""}
                    </span>
                  </h1>
                  <div className="mb-2 flex flex-row flex-nowrap gap-0 justify-center items-center">
                    <img
                      src={image3D ? pokemon?.image2 : pokemon?.image3}
                      ref={img1}
                      onClick={onClickImageBig}
                      alt={pokemon?.name}
                      className="h-auto w-2/4 max-w-auto cursor-pointer p-2 bg-white border border-black rounded-xl"
                    />
                    <img
                      src={
                        imageAnimBack
                          ? pokemon?.imageAnimBack
                          : pokemon?.imageAnimFront
                      }
                      ref={img2}
                      onClick={onClickImageAnim}
                      alt={pokemon?.name}
                      className="w-1/4 h-fit max-w-auto rounded cursor-pointer ml-10"
                    />
                  </div>
                  <div className=" bg-orange-200/25 p-4 flex justify-center rounded-xl shadow-md shadow-black">
                    <table className="table-auto p-2 text-center w-full border border-black border-collapse">
                      <tbody>
                        <tr className="border border-black">
                          <th
                            colSpan={1}
                            rowSpan={pokemon?.abilities?.length}
                            className="bg-white/25 border border-black"
                          >
                            Habilidades
                          </th>
                          <td
                            colSpan={2}
                            key={0}
                            className="bg-white/75 border border-black"
                          >
                            {pokemon?.abilities?.[0]?.ability?.name}
                          </td>
                        </tr>
                        {pokemon?.abilities?.map((ab, index) => {
                          if (index > 0)
                            return (
                              <tr>
                                <td
                                  key={index}
                                  colSpan={2}
                                  className="bg-white/75 border border-black"
                                >
                                  {ab.ability.name}
                                </td>
                              </tr>
                            );
                        })}
                        <tr>
                          <th className="bg-white/25 border border-black">
                            Tipo
                          </th>
                          <th className="bg-white/25 border border-black">
                            Peso
                          </th>
                          <th className="bg-white/25 border border-black">
                            Altura
                          </th>
                        </tr>
                        <tr>
                          <td className="bg-white/75 border border-black">
                            {pokemon?.type?.map((type, index) => {
                              return (
                                <span key={index}>
                                  {index == 0 ? "" : ","} {type.type.name}
                                </span>
                              );
                            })}
                          </td>
                          <td className="bg-white/75 border border-black">
                            {pokemon?.weight}
                          </td>
                          <td className="bg-white/75 border border-black">
                            {pokemon?.height}
                          </td>
                        </tr>
                        <tr>
                          <th
                            colSpan={3}
                            className="bg-white/25 border border-black"
                          >
                            Características
                          </th>
                        </tr>
                        <tr>
                          {pokemon?.stats?.map((stat, index) => {
                            if (index < 3)
                              return (
                                <td
                                  key={index}
                                  className="bg-white/75 border border-black"
                                >
                                  <span key={index} className="font-bold">
                                    {stat.stat.name}:
                                  </span>
                                  &nbsp;{stat.base_stat}
                                </td>
                              );
                          })}
                        </tr>
                        <tr>
                          {pokemon?.stats?.map((stat, index) => {
                            if (index > 2)
                              return (
                                <td
                                  key={index}
                                  className="bg-white/75 border border-black"
                                >
                                  <span key={index} className="font-bold">
                                    {stat.stat.name}:
                                  </span>
                                  &nbsp;{stat.base_stat}
                                </td>
                              );
                          })}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <button
                    onClick={handleClickClose}
                    className="mt-4 p-2 bg-blue-500 text-white rounded"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonModal;
