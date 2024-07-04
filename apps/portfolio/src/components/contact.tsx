import Link from 'next/link';

import React from 'react';

import { data } from '~/lib/data';

export const Contact = () => {
  return (
    <div
      className='flex h-[92dvh] flex-col items-center justify-center gap-2 text-center font-elgocAlt text-[4rem] md:text-[6rem]'
      id='contact'
    >
      <div className='font-sans text-lg font-bold uppercase'>contact me</div>
      {data.contact.links.map((link) => (
        <Link key={link.title} href={link.link} target='_blank'>
          {link.title}
        </Link>
      ))}
    </div>
  );
};
