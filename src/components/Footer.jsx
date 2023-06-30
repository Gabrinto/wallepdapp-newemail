import React from 'react';
import { images } from '../constants';
import { AiOutlineCopyright } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="mt-[4rem] md:mt-[9rem] md:min-w-full">
      <div className="self-center w-full  md:px-[2rem] flex items-center justify-center">
        <img
          src={images.transparentLogo}
          alt=""
          className="w-[100px] md:w-[150px]"
        />
      </div>
      <div className="flex flex-wrap gap-4 items-center justify-between mt-[4rem] w-full uppercase ">
        <div className="text-left">
          <h2 className="text-gray-700 text-[1.1rem]">walletconnect</h2>

          <ul className="text-gray-100 flex flex-col gap-3 mt-4 text-[1rem]">
            <li>products</li>
            <li>Explore</li>
          </ul>
        </div>
        <div className="text-left">
          <h2 className="text-gray-700 text-[1.1rem]">Resources</h2>

          <ul className="text-gray-100 mt-4 flex flex-col gap-3 text-[1rem]">
            <li>docs</li>
            <li>github</li>
            <li>faq</li>
          </ul>
        </div>
        <div className="text-left">
          <h2 className="text-gray-700 text-[1.1rem]">company</h2>

          <ul className="text-gray-100 mt-4 flex flex-col gap-3 text-[1rem]">
            <li>blog</li>
            <li>jobs</li>
            <li>brand</li>
          </ul>
        </div>
        <div className="text-left">
          <h2 className="text-gray-700 text-[1.1rem]">connect</h2>

          <ul className="text-gray-100 mt-4 flex flex-col gap-3 text-[1rem]">
            <li>twitter</li>
            <li>discord</li>
            <li>mirror</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col mt-[3rem]">
        <div className="flex justify-between px-3 text-left">
          <div>
            <h2 className="text-gray-600 text-[1.6rem] mb-[1rem]">
              Our newsletter
            </h2>
            <div className="flex gap-4  w-full">
              <input
                type="email"
                className="bg-[#272a2a] rounded-xl px-3 py-1 text-[20px] w-[195px] md:w-[400px] lg:w-[600px]"
                placeholder="email"
              />

              <button
                type="button"
                className="w-[120px] bg-transparent text-gray-200 uppercase rounded-xl px-[2px] border-[0.6px] border-gray-700"
              >
                subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-gray-400 mt-[2rem] md:flex-row md:justify-evenly">
          <p className="flex items-center justify-center text-[1.2rem] mb-3">
            <AiOutlineCopyright /> 2023 walletconnect.inc
          </p>
          <p className="md:flex md:justify-between md:w-[500px]">
            TERMS OF SERVICE <span>PRIVACY POLICY</span>{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
