'use clients';

import React from 'react';

/* eslint-disable @next/next/no-img-element -- test */

interface MobileBlogsProps {
  scrollProgress: number;
}

export const MobileBlogs = ({ scrollProgress }: MobileBlogsProps) => {
  return (
    <div className='relative flex w-full basis-full flex-row justify-center gap-12 md:hidden lg:basis-3/5'>
      <div className='carousel-grad carousel-grad-top z-[4]' />
      <div className='carousel-grad carousel-grad-bottom z-[4]' />
      <div
        className='flex flex-col gap-8'
        style={{
          transform: `translateY(calc(-${String(scrollProgress)}0px + 600px))`,
        }}
      >
        {Array(6)
          .fill(true)
          .map((_, i) => {
            return (
              <div
                key={i}
                className='max-h-[420px] w-[300px] rounded-2xl'
                style={{
                  aspectRatio: '7 / 5',
                }}
              >
                <img
                  alt='Test'
                  className='h-full w-full rounded-2xl object-cover'
                  src={`https://picsum.photos/300/500?id=${i}-right`}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};
