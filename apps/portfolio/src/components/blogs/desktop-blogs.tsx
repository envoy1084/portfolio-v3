'use client';

/* eslint-disable @next/next/no-img-element -- test */
import React from 'react';

import { data } from '~/lib/data';

interface DesktopBlogsProps {
  scrollProgress: number;
}

export const DesktopBlogs = ({ scrollProgress }: DesktopBlogsProps) => {
  const group1 = data.articles.articles.slice(
    0,
    data.articles.articles.length / 2
  );
  const group2 = data.articles.articles.slice(
    data.articles.articles.length / 2
  );
  return (
    <div className='relative hidden w-full basis-3/5 flex-row justify-center gap-12 md:flex'>
      <div className='carousel-grad carousel-grad-top z-[4]' />
      <div className='carousel-grad carousel-grad-bottom z-[4]' />
      <div
        className='flex flex-col gap-5'
        style={{
          transform: `translateY(calc(-${String(scrollProgress)}px + 10vh))`,
        }}
      >
        {group1.map((article) => {
          return (
            <div key={article.image as string} className='rounded-2xl'>
              <img
                alt='Test'
                className='aspect-portrait w-[300px] rounded-2xl object-cover'
                src={article.image as string}
              />
            </div>
          );
        })}
      </div>
      <div
        className='flex translate-y-[100%] flex-col gap-5'
        style={{
          transform: `translateY(calc(${String(scrollProgress)}px - 150vh))`,
        }}
      >
        {group2.map((article) => {
          return (
            <div key={article.image as string} className='rounded-2xl'>
              <img
                alt='Test'
                className='aspect-portrait w-[300px] rounded-2xl object-cover'
                src={article.image as string}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
