import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../constants';

const Header = ({ path }) => {
  return (
    <div
      className="md:w-[86vw] w-[95vw] h-[50px] 
    px-3 md:px-0 rounded-full bg-[rgba(39,42,42,.66)] 
    shadow-lg fixed top-4 z-50 backdrop-blur-lg flex"
    >
      <div className="flex md:px-4 items-center justify-between w-full">
        <div className="flex gap-[2rem] items-center justify-center p-0">
          <Link to="/">
            <img src={images.logo33} alt="" className="cursor-pointer" />
          </Link>

          <ul className="hidden text-white uppercase md:flex  text-[17px]  gap-[2.4rem] font-medium">
            <li>Products</li>
            <li>Docs</li>
            <li>Explorer</li>
          </ul>
        </div>
        <span
          className="hidden md:block py-[10px] px-2 bg-transparent border-[1px] border-gray-800
         rounded-3xl hover:bg-[#272a2a] text-white font-bold "
        >
          <Link to={path} className="uppercase w-[100px] rounded-full py-4">
            connect wallet
          </Link>
        </span>

        <div className="flex md:hidden flex-col gap-2">
          <div className="w-[2.3rem] h-[0.5px] bg-gray-300" />
          <div className="w-[2.3rem] h-[0.5px] bg-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default Header;
