'use clients';

import React from 'react';

import { data } from '~/lib/data';

/* eslint-disable @next/next/no-img-element -- test */

export const MobileBlogs = () => {
  return (
    <div className='relative flex w-full basis-full flex-row justify-center gap-12 md:hidden lg:basis-3/5'>
      <div className='carousel-grad carousel-grad-top z-[4]' />
      <div className='carousel-grad carousel-grad-bottom z-[4]' />
      <div className='flex flex-col gap-8'>
        {data.articles.articles.map((article) => {
          return (
            <div
              key={article.image as string}
              className='max-h-[420px] w-[300px] rounded-2xl'
              style={{
                aspectRatio: '7 / 5',
              }}
            >
              <img
                alt='Test'
                className='h-full w-full rounded-2xl object-cover'
                src={article.image as string}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
