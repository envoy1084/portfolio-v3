import Link from 'next/link';

import React from 'react';

import { data } from '~/lib/data';

export const Resume = () => {
  return (
    <div
      className='flex h-screen flex-col items-center justify-evenly gap-24 px-3 sm:px-0'
      id='resume'
    >
      <p className='max-w-xl whitespace-pre-line text-center sm:text-start'>
        {data.resume.description}
      </p>
      <div className='group relative aspect-video w-full max-w-2xl overflow-hidden border'>
        <div
          className='flex h-full w-full flex-col overflow-hidden opacity-90 transition-all duration-300 ease-in-out group-hover:opacity-70'
          style={{
            backgroundImage: 'url(/paper-texture.jpg)',
          }}
        >
          <div className='flex flex-row items-center justify-between px-6 py-4 text-sm font-semibold text-blue-500 md:px-12 md:py-8'>
            <div>Resume {new Date(Date.now()).getFullYear()}</div>
            <Link href={data.resume.website}>
              {data.resume.website.replace('https://', '')}
            </Link>
          </div>
          <div className='py-12 text-center font-elgocAlt text-[2rem] font-medium leading-[0.9] text-blue-500 md:text-[4rem]'>
            {data.resume.name}
            <br />
            <span className='text-[2rem] font-semibold md:text-[4rem]'>
              {data.resume.position}
            </span>
            <div className='flex flex-col items-center justify-center py-4 text-center font-sans'>
              <Link className='text-[9px]' href={`mailto:${data.resume.email}`}>
                {data.resume.email}
              </Link>
            </div>
          </div>
        </div>
        <Link
          download
          className='absolute bottom-0 right-1/2 translate-x-1/2 text-xs uppercase text-white opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 md:bottom-12 md:text-lg'
          href={data.resume.downloadLink}
          target='_blank'
        >
          Download My Resume
        </Link>
      </div>
    </div>
  );
};
