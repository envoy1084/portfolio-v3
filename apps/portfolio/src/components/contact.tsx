import Link from 'next/link';

import React from 'react';

export const Contact = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-2 text-center'>
      <div className='text-lg font-bold uppercase'>contact me</div>
      <Link
        href='mailto:vedantchainani1084@gmail.com'
        className='font-elgocAlt text-[6rem]'
      >
        Email
      </Link>
      <Link
        className='font-elgocAlt text-[6rem]'
        href='https://x.com/Envoy_1084'
      >
        Twitter
      </Link>
      <Link
        className='font-elgocAlt text-[6rem]'
        href='https://www.linkedin.com/in/vedant-chainani'
      >
        Linkedin
      </Link>
      <Link
        className='font-elgocAlt text-[6rem]'
        href='https://github.com/Envoy-VC'
      >
        Github
      </Link>
    </div>
  );
};
