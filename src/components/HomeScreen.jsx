import React, { useState } from 'react';
import { categoryDate, dummyData } from '../data';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { SiDiscord } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { images } from '../constants';
import Header from './Header';
import Banner from './Banner';
import Socket from './Socket';
import Explore from './Explore';
import LookingFor from './LookingFor';
import IconScroll from './IconScroll';
import WantToConnect from './WantToConnect';
import { iconScrollData } from '../data';
import KeepUp from './KeepUp';
import Footer from './Footer';

const HomeScreen = () => {
  return (
    <div className="bg-[#141414] h-screen w-full overflow-x-hidden px-4">
      <div className="md:max-w-[80vw] flex flex-col items-center justify-center mx-auto ">
        <Header path={'hello'} />
        <Banner />
        <Socket />
        <Explore />
        <LookingFor />
        <IconScroll
          iconData={iconScrollData}
          title={'We’re supported by over 170 wallets.'}
        />
        <WantToConnect />

        <IconScroll
          iconData={dummyData}
          title={'We connect you with more than 450 apps.'}
          rounded
        />
        <KeepUp />
        <Footer />
      </div>
    </div>
  );
};

export default HomeScreen;
