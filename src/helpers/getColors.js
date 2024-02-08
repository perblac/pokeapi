const colorsFrom = {
  normal: "from-[#ccc9aa]",
  fire: "from-[#f67f0b]",
  water: "from-[#0a7abc]",
  electric: "from-[#fffa24]",
  grass: "from-[#3e9709]",
  ice: "from-[#1995a1]",
  fighting: "from-[#e81319]",
  poison: "from-[#a819d7]",
  ground: "from-[#e1d158]",
  flying: "from-[#5eb9b2]",
  psychic: "from-[#ec0e63]",
  bug: "from-[#bddd6e]",
  rock: "from-[#776a3e]",
  ghost: "from-[#8e55a4]",
  dragon: "from-[#8a55fd]",
  dark: "from-[#5f4632]",
  steel: "from-[#7b8e8a]",
  fairy: "from-[#ffa0c2]",
};
const colorsTo = {
  normal: "to-[#ccc9aa]",
  fire: "to-[#f67f0b]",
  water: "to-[#0a7abc]",
  electric: "to-[#fffa24]",
  grass: "to-[#3e9709]",
  ice: "to-[#1995a1]",
  fighting: "to-[#e81319]",
  poison: "to-[#a819d7]",
  ground: "to-[#e1d158]",
  flying: "to-[#5eb9b2]",
  psychic: "to-[#ec0e63]",
  bug: "to-[#bddd6e]",
  rock: "to-[#776a3e]",
  ghost: "to-[#8e55a4]",
  dragon: "to-[#8a55fd]",
  dark: "to-[#5f4632]",
  steel: "to-[#7b8e8a]",
  fairy: "to-[#ffa0c2]",
};
const colors2nd = {
  normal: "to-[#aca974]",
  fire: "to-[#fc0c0b]",
  water: "to-[#08517a]",
  electric: "to-[#969101]",
  grass: "to-[#204000]",
  ice: "to-[#103d43]",
  fighting: "to-[#800b11]",
  poison: "to-[#611380]",
  ground: "to-[#bfac21]",
  flying: "to-[#085764]",
  psychic: "to-[#8a0532]",
  bug: "to-[#91ba2e]",
  rock: "to-[#474026]",
  ghost: "to-[#472b53]",
  dragon: "to-[#29036a]",
  dark: "to-[#2d221c]",
  steel: "to-[#454545]",
  fairy: "to-[#f87ea7]",
};

const getColors = (types) => {
  let bgColor, bgHardColor;

  bgColor = `bg-gradient-to-br ${colorsFrom[types[0].type.name]} `;
  bgHardColor = bgColor;
  bgColor +=
    types.length == 1
      ? colors2nd[types[0].type.name]
      : colorsTo[types[1].type.name];
  bgHardColor +=
    types.length == 1
      ? bgColor
      : "from-50% " + "to-50% " + colorsTo[types[1].type.name];

  return { bgColor, bgHardColor };
};

export default getColors;
