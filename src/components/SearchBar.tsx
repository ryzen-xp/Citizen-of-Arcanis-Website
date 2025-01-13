import React from "react";
import Image from "next/image";
import Icon from "../assets/icons/search_icon.png";

const SearchBar: React.FC = () => {
  const base = "flex items-center rounded-full bg-cyan-800 w-[350px] p-2 h-10";

  const input =
    "w-full py-1 px-3 text-white bg-transparent placeholder-gray-300 focus:outline-none ";
  const icon =
    "text-white px-2 hover:text-gray-300 transition-transform transform hover:scale-110  flex items-center";

  return (
    <div className={base}>
      <input type="text" placeholder="Search" className={input} />
      <button className={icon}>
        <Image
          src={Icon}
          alt="Search Icon"
          className="w-4 h-4"
          style={{ filter: "invert(100%) brightness(100%)" }}
        />
      </button>
    </div>
  );
};

export default SearchBar;
