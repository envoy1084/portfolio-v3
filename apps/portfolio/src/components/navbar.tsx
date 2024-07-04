import React from 'react';

import { data } from '~/lib/data';

import { NavigationButton } from './navigation';

export const Navbar = () => {
  return (
    <div className='bg-background/90 z-[2] h-[6dvh] w-full py-10 backdrop-blur-md'>
      <div className='mx-auto flex h-full max-w-screen-xl items-center justify-between px-4'>
        <div className='text-xl font-black'>{data.header}</div>
        <NavigationButton />
      </div>
    </div>
  );
};
