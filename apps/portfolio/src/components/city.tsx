import Image from 'next/image';

import React from 'react';

import CityImage from 'public/city.webp';

export const City = () => {
  return (
    <div className='relative'>
      <div className='city-glow absolute top-16 h-12 w-full translate-y-1/2 border-4 border-white' />
      <Image
        alt='city'
        className='translate-y-1/5 object-cover'
        src={CityImage}
        style={{
          maskImage: 'url(/city-mask.svg)',
        }}
      />
    </div>
  );
};
