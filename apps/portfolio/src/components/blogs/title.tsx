import React from 'react';

export const BlogTitle = () => {
  return (
    <div className='flex w-full basis-full flex-col justify-between sm:px-4 lg:basis-2/5'>
      <div className='font-elgocAlt text-[4rem] font-medium sm:text-[8rem] lg:text-[12rem]'>
        Articles
      </div>
      <div className='text-base md:-translate-y-[100%] lg:text-lg'>
        I have been writing articles for a while now on various web3 protocols
        and even project builds. These articles are a mix of tutorials, guides,
        and project breakdowns. I hope you find them helpful.
      </div>
      <div className='text-transparent'>a</div>
    </div>
  );
};
