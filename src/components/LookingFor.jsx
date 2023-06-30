import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { images } from '../constants';
import { dummyData, newWalletData } from '../data';

const LookingFor = () => {
  return (
    <div className="mt-[5rem] ">
      <div className="flex flex-col gap-2 text-left md:flex-row md:items-center md:w-full md:justify-between md:mt-[5rem]">
        <h1 className="text-[2.3rem] md:text-[2.8rem] md:w-[500px] md:leading-[41px] font-semibold text-white">
          LOOKING FOR a WaLLeT?
        </h1>
        <div className="">
          <Link
            to={'/wallet'}
            className="text-blue-500 flex gap-2 hover:shrink"
          >
            VIEW ALL WALLETS
            <MdKeyboardArrowRight size={23} />
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center gap-[7rem] mt-[7rem] md:flex-row md:gap-12 ">
        {newWalletData.map((item, index) => (
          <div
            key={index}
            className="border-t-[0.5px] md:border-[1px] border-t-gray-700 w-full md:w-[300px] rounded-[5rem] px-1"
          >
            <img src={item.logo} alt="" className="w-[90px] mt-[-3rem] " />
            <div className="text-white text-left mt-3">
              <h2 className="text-[1.3rem] px-2 md:ml-[10px] md:text-[1.5rem]">
                {item.name}
              </h2>
              <Link
                to={'/wallet'}
                className="px-6 md:ml-5 py-3 mt-4 bg-blue-500 flex items-center w-fit rounded-full ml-3 mb-4"
              >
                {item.link_title} <MdKeyboardArrowRight size={23} />
              </Link>
            </div>

            <div className="md:-mr-8 md:ml-4 mb-[-2rem]">
              <img src={item.bg} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LookingFor;
