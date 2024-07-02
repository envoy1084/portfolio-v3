'use client';

import React, { useRef, useState } from 'react';

import { cn } from '~/lib/utils';

import { useScroll, useTransform } from 'framer-motion';

export const About = () => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- safe to assume ref is not null
  const ref = useRef<HTMLDivElement>(null!);

  const { scrollYProgress } = useScroll({ target: ref });

  const value = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const [v, setV] = useState(0);

  value.on('change', (value) => {
    const p = Number(value.toFixed(2));
    setV(p);
  });

  return (
    <div ref={ref} className='relative z-[2] h-[300vh]'>
      <div className='sticky top-0 flex h-screen items-center justify-center'>
        <h2 className='w-full max-w-2xl select-text px-1 text-center font-beatriceMedium text-2xl leading-[1.5] sm:text-3xl'>
          {' '}
          <span className={cn(v < 0.25 ? 'text-neutral-800' : 'text-white')}>
            Hello! I am{' '}
            <span
              className={cn(
                v < 0.25 ? 'opacity-20' : 'opacity-100',
                'text-blue-400'
              )}
            >
              Vedant
            </span>
            , a developer based in India.
          </span>{' '}
          <span className={cn(v < 0.45 ? 'text-neutral-800' : 'text-white')}>
            I love to{' '}
            <span className={cn(v < 0.45 ? 'opacity-20' : 'opacity-100')}>
              ⛵
            </span>{' '}
            ship awesome web3 projects.
          </span>{' '}
          <span className={cn(v < 0.65 ? 'text-neutral-800' : 'text-white')}>
            In my free time, I like write technical blogs{' '}
            <span
              className={cn(
                v < 0.65 ? 'text-neutral-800 opacity-20' : 'opacity-100'
              )}
            >
              📝
            </span>
          </span>
        </h2>
      </div>
    </div>
  );
};
