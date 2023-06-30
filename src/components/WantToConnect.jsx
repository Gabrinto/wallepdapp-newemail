import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { images } from '../constants';

const WantToConnect = () => {
  return (
    <div className="mt-[4rem] relative md:mt-[10rem]">
      <div className="px-2 md:flex md:w-full md:justify-between md:px-[5rem]">
        <h1 className="text-[2.3rem] md:text-[2.9rem] md:max-w-[550px] text-white text-left leading-10">
          WanT TO COnnecT WiTH an aPP
        </h1>
        <div className="mt-[2rem]">
          <Link
            to={'/'}
            className="text-blue-500 flex gap-2 hover:shrink text-left"
          >
            VIEW ALL APPS
            <MdKeyboardArrowRight size={23} />
          </Link>
        </div>
      </div>

      <div className=" mt-[ 3rem] w-screen mt-[2rem] px-1 flex flex-col gap-12 md:flex-row  md:justify-center  md:gap-8">
        <div className="border-[0.6px] border-gray-800 rounded-[6rem] md:w-[500px]">
          <div
            className="mt-[2rem] rounded-[3rem]  mr-[-1rem] ml-6"
            style={{
              backgroundImage: `url(${images.uniswapBg})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              position: 'relative',
              height: '250px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              // borderRadius: '10px',
            }}
          >
            <img
              src={images.swap}
              alt=""
              className="w-[280px] rounded-[2rem] "
            />
          </div>
          <div className="absolute mt-[-2rem] flex justify-between items-center w-full md:w-[500px] px-[2rem] ">
            <img src={images.zoraIcon} alt="" className="w-[50px]" />
            <Link
              to={'/'}
              className="text-white px-4 w-[90px] py-[0.7rem] bg-blue-500 rounded-full"
            >
              OPEN
            </Link>
          </div>
          <p className="mt-[3rem] leading-7 text-gray-500 text-[25px] tracking-tighter px-[0.9rem] font-semibold text-left ">
            <span className="text-white tracking-tighter">uniswap.</span>Swap,
            earn, and build on the leading decentralized crypto trading
            protocol.
          </p>
        </div>

        {/* second one 
        
        */}

        <div className="border-[0.6px] border-gray-800 rounded-[6rem] md:w-[500px] md:h-[650px]">
          <div
            className="mt-[2rem] rounded-[3rem] mr-[-1rem] ml-6"
            style={{
              backgroundImage: `url(${images.shapeBg})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              position: 'relative',
              height: '250px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              // borderRadius: '10px',
            }}
          >
            <img
              src={images.shape}
              alt=""
              className="w-[280px] rounded-[2rem] "
            />
          </div>
          <div className="absolute mt-[-2rem] flex justify-between items-center w-full md:w-[500px] px-[2rem] ">
            <img src={images.shapeIcon} alt="" className="w-[50px]" />
            <Link
              to={'/'}
              className="text-white px-4 w-[90px] py-[0.7rem] bg-blue-500 rounded-full"
            >
              OPEN
            </Link>
          </div>
          <p className="mt-[3rem] leading-7 text-gray-500 text-[25px] tracking-tighter px-[0.9rem] font-semibold text-left ">
            <span className="text-white tracking-tighter">Foundation. </span>
            Swap, Create, collect and sell NFTs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WantToConnect;
