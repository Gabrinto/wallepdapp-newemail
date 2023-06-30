import React from 'react';
import { images } from '../constants';

const Socket = () => {
  return (
    <div className="text-white mt-[4rem]  flex flex-col items-start">
      <div className="self-start flex items-center justify-start gap-[3rem] flex-col">
        <h1 className="text-[40px] leading-[37px] text-left md:text-[55px] md:leading-[44px] md:text-left md:font-semibold md:self-start md:w-[500px]">
          We make it easy for you to plug into WEB3
        </h1>
        <img src={images.sockets} alt="" className="bg-black object-contain" />
      </div>
      <div className="flex flex-col mt-[3rem] md:mt-[-3rem]">
        <div className="flex flex-col md:flex-row  md:items-center">
          <span className="flex ml-4 gap-5">
            <p className="text-[20px]">CURIOUS ABOUT</p>
            <span className="border-[2px] border-[#2bee4b] px-[21px] p-[10px] rounded-full text-[18px]">
              DEFI
            </span>
          </span>
          <span className="mt-[2rem] flex gap-[1rem] ml-[2rem] md:mt-0">
            <span className="border-[2px] border-[#ff974c] px-[21px] p-[10px]  text-[18px]">
              NFTs
            </span>
            <span className="border-[2px] border-[#00ACFD] px-[30px] rounded-[50%] p-[10px] text-[18px]">
              DAOS
            </span>
          </span>
        </div>
        <div className="mt-[3rem]">
          <h3 className="text-[40px] md:text-[50px] leading-[37px] md:leading-[44px] text-left">
            With WalletConnect, you can connect your wallet with hundreds of
            apps, opening the doors to a new world of web3 experiences.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Socket;
