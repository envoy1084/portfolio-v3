import Link from 'next/link';

import React from 'react';

export const Resume = () => {
  return (
    <div className='flex h-screen flex-col items-center justify-evenly'>
      <p className='max-w-xl whitespace-pre-line'>
        {`Long story short, I'm currently looking for a new project where I could step in on many different levels : content, social media, digital communication, design, and more!

You'd like to work with someone who's passionate, experienced, polyvalent, constantly learning, and who knows the internet like the back of his hand? 👋

So here's a little recap of everything you've seen in A4:`}
      </p>

      <div className='group relative aspect-video w-full max-w-2xl overflow-hidden border'>
        <div
          className='flex h-full w-full flex-col overflow-hidden opacity-90 transition-all duration-300 ease-in-out group-hover:opacity-70'
          style={{
            backgroundImage: 'url(/paper-texture.jpg)',
          }}
        >
          <div className='flex flex-row items-center justify-between px-12 py-8 text-sm font-semibold text-blue-500'>
            <div>Resume 2024</div>
            <Link href='https://envoy1084.xyz'>envoy1084.xyz</Link>
          </div>
          <div className='py-12 text-center font-elgocAlt text-[4rem] font-medium leading-[0.9] text-blue-500'>
            Vedant Chainani
            <br />
            <span className='text-[4rem] font-semibold'>
              Fullstack Developer
            </span>
            <div className='flex flex-col items-center justify-center py-4 text-center font-sans'>
              <Link
                className='text-[9px]'
                href='mailto:vedantchainani1084@gmail.com'
              >
                vedantchainani1084@gmail.com
              </Link>
            </div>
          </div>
        </div>
        <Link
          download
          className='absolute bottom-12 right-1/2 translate-x-1/2 text-lg uppercase text-white opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100'
          href=''
        >
          Download My Resume
        </Link>
      </div>
    </div>
  );
};
