import React from 'react';
import { images } from '../constants';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Banner = () => {
  return (
    <>
      <div
        className="md:w-[97vw] md:min-h-[620px]  min-h-[90vh] 
          w-[100vw] sm:w-[90vw] lg:w-[90vw] mt-[5.6rem]  rounded-[4rem] relative  justify-center items-center"
      >
        <img
          src={images.bannerNew}
          className="absolute h-[84vh] sm:w-screen md:w-full rounded-[4rem] flex items-center justify-center object-cover"
          alt=""
        />
        <div
          className="flex absolute z-30 flex-col
          md:mt-[2rem] text-white mt-[2rem] text-center w-[100%]
        "
        >
          <div className="flex flex-col items-center justify-center mt-[4rem] lg:mx-auto md:mx-auto  ">
            <img
              src={images.transparentLogo}
              alt=""
              className="md:w-[140px] w-[100px] h-full"
            />
            <h1
              className="text-[#fff] flex md:text-[94px] text-[50px] mt-[2rem]  leading-8 
            md:leading-[4rem] sm:leading-[3.0rem] lg:leading-[4.6rem] font-bold py-[10px]
             sm:py-0 w-[100%] justify-center items-center"
            >
              Connect
              <br />
              ing web3
            </h1>
          </div>
          <div className="md:w-[500px] sm:w-[450px] md:mx-auto sm:mx-auto  text-[#9ea9a9] sm:mt-[2rem] md:mt-[1rem] md:leading-6 md:text-[25px] text-[18px] mt-6">
            <p className="">
              The communications protocol for web3, WalletConnect brings the
              ecosystem together by enabling wallets and apps to securely
              connect and interact.
            </p>

            <span className="flex flex-col md:flex-row gap-4 items-center justify-center mt-[1rem]">
              <Link
                className="bg-blue-500 text-white flex items-center justify-center text-[16px] w-[65%]  rounded-full py-[7px]
                lg:py-[10px]"
                to={'/wallet'}
              >
                CONNECT WALLET <MdKeyboardArrowRight size={23} />
              </Link>
              <Link
                className="bg-[#f1f3f3] flex items-center lg:py-[10px] justify-center mb-3 md:mb-0 text-[#141414]  w-[85%] text-[15px] py-[7px] rounded-full"
                to={'/explore-wallets'}
              >
                EXPLORE WALLETS AND APPS <MdKeyboardArrowRight size={23} />
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="text-white mt-[2rem] left-0  self-start flex justify-start items-start overflow-x-hidden w-full">
        <div className="flex gap-6 justify-center items-start left-0">
          <div className="">
            <p className="text-[1.3rem]">TOTAL WEBSOCKETS</p>
            <p className="text-[2.8rem] font-semibold">1,107,304,399</p>
            <p>PER DAY</p>
          </div>
          {/* the rest */}

          <div className="">
            <p className="text-[1.3rem]">ACTIVE WEBSOCKETS</p>
            <p className="text-[2.8rem]  font-semibold">887,924</p>
            <p>CURRENTLY</p>
          </div>
          <div className="">
            <p className="text-[1.3rem]">MESSAGES</p>
            <p className="text-[2.8rem]  font-semibold">24,761</p>
            <p>PER SECOND</p>
          </div>
          <div className="">
            <p className="text-[1.3rem]">WALLETS</p>
            <p className="text-[2.8rem]  font-semibold">170+</p>
            <p>INTEGRATED</p>
          </div>
          <div className="">
            <p className="text-[1.3rem]">APPS</p>
            <p className="text-[2.8rem]  font-semibold">450+</p>
            <p>INTEGRATED</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
