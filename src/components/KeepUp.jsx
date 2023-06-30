import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { images } from '../constants';
import { Link } from 'react-router-dom';
import { keepingUpData } from '../data';

const KeepUp = () => {
  return (
    <div className="self-start mt-[5rem] w-full">
      <div className="text-white text-left md:flex md:flex-row md:justify-between md:items-center">
        <h1 className="text-[2rem] md:text-[3.2rem] leading-8 md:w-[400px]">
          Keep up with our news.
        </h1>
        <div className="flex gap-5 mt-6">
          <button className="border-[0.5px] border-gray-800 rounded-full p-[0.58rem] md:p-[0.7rem] bg-gray-800">
            <MdKeyboardArrowLeft size={23} />
          </button>
          <button className="border-[0.5px] border-gray-800 rounded-full p-[0.58rem] md:p-[0.7rem]">
            <MdKeyboardArrowRight size={23} />
          </button>
        </div>
      </div>

      <div
        className="mt-[4rem] 
        pb-[2rem] flex flex-col gap-[2rem] overflow-hidden md:flex-row"
      >
        {keepingUpData.map((item) => (
          <div className="border-[1px] border-gray-600 rounded-[3rem] w-full md:min-w-[350px] overflow-hidden">
            <img
              src={item.imgurl}
              alt=""
              className="rounded-br-[1.5rem] rounded-bl-[1.5rem] rounded-tr-[3rem] rounded-tl-[3rem]"
            />
            <div className="text-left leading-8 mt-3">
              <h1 className="text-white text-[1.8rem] ml-3">{item.title}</h1>
            </div>
            <Link
              className="text-blue-400 flex items-center justify-end
            mt-[1.2rem] mr-[2rem] mb-2 gap-2"
              to={item.url}
            >
              VIEW
              <MdKeyboardArrowRight size={23} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeepUp;
