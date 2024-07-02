'use client';

/* eslint-disable @next/next/no-img-element -- test */
import React from 'react';

interface DesktopBlogsProps {
  scrollProgress: number;
}

export const DesktopBlogs = ({ scrollProgress }: DesktopBlogsProps) => {
  return (
    <div className='relative hidden w-full basis-3/5 flex-row justify-center gap-12 md:flex'>
      <div className='carousel-grad carousel-grad-top z-[4]' />
      <div className='carousel-grad carousel-grad-bottom z-[4]' />
      <div
        className='flex flex-col gap-5'
        style={{
          transform: `translateY(calc(-${String(scrollProgress)}px + 20vh))`,
        }}
      >
        {Array(6)
          .fill(true)
          .map((_, i) => {
            return (
              <div key={i} className='rounded-2xl'>
                <img
                  alt='Test'
                  className='aspect-portrait w-[300px] rounded-2xl object-cover'
                  src={`https://picsum.photos/300/420?id=${i}-right`}
                />
              </div>
            );
          })}
      </div>
      <div
        className='flex translate-y-[100%] flex-col gap-5'
        style={{
          transform: `translateY(calc(${String(scrollProgress)}px - 200vh))`,
        }}
      >
        {Array(6)
          .fill(true)
          .map((_, i) => {
            return (
              <div key={i} className='rounded-2xl'>
                <img
                  alt='Test'
                  className='aspect-portrait w-[300px] rounded-2xl object-cover'
                  src={`https://picsum.photos/1000/1000?id=${i}-left`}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};
