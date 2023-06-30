import React from 'react';
import { images } from '../constants';

const Explore = () => {
  return (
    <div
      className="flex flex-col items-center justify-center mt-[4rem]
    md:max-w-[96vw] md:justify-between md:gap-[4rem]  md:flex-row-reverse"
    >
      <div
        className=" relative flex gap-3 items-center justify-center object-contain
         w-screen md:w-[900px] md:-skew-y-12 md:rotate-6 brightness-[0.9] h-[450px] md:h-[550px]  px-5 py-[10rem] rounded-[4rem] border-[0.5px] border-gray-400"
        style={{
          backgroundImage: `url(${images.coloredBg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <img
          src={images.qrCode}
          alt=""
          className="w-[170px] h-[220px]  object-cover rounded-xl"
        />
        <img
          src={images.mobileV}
          alt=""
          className="w-[170px]  h-[220px] object-cover rounded-xl"
        />
      </div>
      <div className="flex flex-col text-white w-full px-3 mt-[3rem] gap-5 md:max-w-[500px]">
        <div
          className="flex justify-between items-center w-full border border-gray-700 
            py-[2rem] px-[1rem] rounded-full"
        >
          <div className="">
            <h1 className="text-gray-600">CLICK {'  '}'CONNECT WALLET'</h1>
          </div>
          <span className="w-[25px] h-[25px] bg-blue-700 rounded-[50%] items-center">
            1
          </span>
        </div>
        <div
          className="flex flex-col justify-between items-center w-full border border-gray-700 
            py-[2rem] px-[1rem] rounded-[4rem]"
        >
          <div className=" flex gap-5">
            <h1 className="text-white">SCAN THE QR CODE OR FIND YOUR WALLET</h1>

            <span className=" w-[35px] h-[25px] bg-blue-700 rounded-[50%] items-center">
              2
            </span>
          </div>
          <p className="text-gray-600 text-left mt-3">
            INiTiaTe THE connection SO THAT WALLETCONNECT Gets To WORK In The
            BACKGROUND, Linking Your WaLLet And APP
          </p>
        </div>
        <div
          className="flex justify-between items-center w-full border border-gray-700 
            py-[2rem] px-[1rem] rounded-full"
        >
          <div className="">
            <h1 className="text-gray-600">START EXPLORING</h1>
          </div>
          <span className="w-[25px] h-[25px] bg-blue-700 rounded-[50%] items-center">
            3
          </span>
        </div>
      </div>
    </div>
  );
};

export default Explore;
