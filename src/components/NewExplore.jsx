import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { filtersData } from '../data';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { AiOutlineSearch } from 'react-icons/ai';

const NewExplore = () => {
  return (
    <div className="bg-black flex items-center px-[1rem] justify-center">
      <div className="pt-[1rem]  ">
        <div className="sm:flex sm:flex-row mt-[3rem] flex-col">
          <div className="flex flex-col items-center justify-center">
            <h1 className=" sm:hidden text-[36px] text-white">Explorer</h1>
            <div className="sm:hidden flex flex-col mt-[1rem] mb-[1rem] py-4 px-2">
              <span className="w-[300px] h-[0.9px] bg-gray-600" />
              <div className="flex justify-between items-center px-2">
                <p className="text-white pt-[0.6rem] pb-[0.6rem]">
                  Search & Filter
                </p>
                <MdKeyboardArrowDown
                  className="text-white fill-white "
                  size={23}
                />
              </div>
              <span className="w-[300px] h-[0.9px] bg-gray-600" />
            </div>
          </div>

          <div className="hidden sm:flex flex-col flex-[0.2]">
            <h1 className="text-[2rem] font-bold text-white">Explorer</h1>

            <div className="mt-[3rem]">
              <div className="flex flex-col gap-4">
                <span className="text-gray-600 text-[18px] text-sm">TYPES</span>
                <span className="text-gray-500 text-[18px] text-sm">
                  Wallets
                </span>
                <span className="text-gray-500 text-[18px] text-sm">Dapps</span>
                <span className="text-gray-500 text-[18px] text-sm">
                  Hybrids
                </span>
              </div>
            </div>

            <div className="mt-[3rem]">
              <div className="flex flex-col gap-4">
                <span className="text-gray-600 text-[18px] text-sm">SDK</span>
                <span className="text-gray-500 text-[18px] text-sm">
                  SIGN V1
                </span>
                <span className="text-gray-500 text-[18px] text-sm">
                  SIGN V2
                </span>
              </div>
            </div>
            <div className="mt-[3rem]">
              <div className="flex flex-col gap-4">
                <span className="text-gray-600 text-[18px] text-sm">
                  CHAINS
                </span>
                <span className="text-gray-500 text-[18px] text-sm">
                  Ethereum
                </span>
                <span className="text-gray-500 text-[18px] text-sm">
                  Solana
                </span>
                <Link
                  to={'/wallet'}
                  className="border-[0.5px] border-white px-[6px] py-[8px] mt-[10px] 
                  text-white rounded-full text-center font-semibold"
                >
                  Submit Project
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-[0.8] flex-col flex-wrap items-center justify-center py-3 px-3 gap-[20px] ">
            <div className="hidden bg-[#191B24] sm:flex items-center border-[0.5px] border-gray-800 px-[12px] py-[10px] rounded-md">
              <AiOutlineSearch
                className="fill-[#555558] text-white "
                size={20}
              />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent placeholder:text-gray-700 w-full h-full 
                focus:border-0 focus:border-none"
              />
            </div>
            <div className="flex flex-wrap gap-[20px] w-full items-center justify-center">
              {filtersData.map((item) => (
                <Link
                  to={'/wallet'}
                  className="w-full  sm:max-w-[330px] px-3 py-2 h-[180px] rounded-[15px] flex flex-col justify-evenly items-center bg-[#191B24] relative"
                >
                  <span
                    className="px-1  rounded-full text-white text-sm lg:text-[12px] absolute right-[10px] top-[8px] py-1 
                  border-[0.5px] border-gray-700 bg-[#13141b]"
                  >
                    Copy ID
                  </span>
                  <h1 className="text-white text-center text-[28px] font-bold mt-5">
                    {item.title}
                  </h1>
                  <p className="text-white text-center text-[14px]">
                    {item.text}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default NewExplore;
