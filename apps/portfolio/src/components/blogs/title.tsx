import React from 'react';

import { data } from '~/lib/data';

interface BlogTitleProps {
  scrollProgress: number;
}

export const BlogTitle = ({ scrollProgress }: BlogTitleProps) => {
  return (
    <div className='flex w-full basis-full flex-col justify-between gap-12 sm:px-4 lg:basis-2/5 pb-12 sm:pb-0'>
      <div className='text-center font-elgocAlt text-[4rem] font-medium sm:text-start sm:text-[8rem] lg:text-[12rem]'>
        {data.articles.title}
      </div>
      <div className='text-center text-base sm:text-start md:-translate-y-[100%] lg:text-lg'>
        {data.articles.description}
      </div>
      <div className='mb-[2rem] hidden w-36 rounded-full bg-neutral-600 md:flex'>
        <div
          className='h-1 bg-white'
          style={{ width: `${String(scrollProgress / 20)}%` }}
        />
      </div>
    </div>
  );
};
