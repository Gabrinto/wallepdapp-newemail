import React from 'react';
import './LookingFor.css';

const IconScroll = ({ iconData, title, rounded }) => {
  return (
    <>
      <h1 className="text-white text-[1.6rem] md:mt-[8rem]  mt-[4.5rem] text-left md:text-left md:self-start md:text-[3rem] ">
        {title}
      </h1>
      <div className="mt-[1.4rem] relative mb-[3rem] no-scrollbar">
        <div className="styles_content__dZufc styles_slideToLeft__skudD flex gap-4">
          {iconData.map((item) => (
            <img
              src={item.imgurl}
              alt=""
              className={`w-[80px]  ${
                rounded ? 'rounded-full' : 'rounded-[20px]'
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default IconScroll;
