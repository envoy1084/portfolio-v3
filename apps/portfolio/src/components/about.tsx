'use client';

import React, { useRef, useState } from 'react';

import { useTrackerMotionValue } from '~/lib/hooks';
import { cn } from '~/lib/utils';

import { useTracker } from '@14islands/r3f-scroll-rig';
import { useTransform } from 'framer-motion';

export const About = () => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- safe to assume ref is not null
  const ref = useRef<HTMLDivElement>(null!);
  const tracker = useTracker(ref);
  const progress = useTrackerMotionValue(tracker);

  const value = useTransform(progress, [0, 1], [0, 1]);

  const [v, setV] = useState(0);

  value.on('change', (value) => {
    // bring to range [0,1]
    const p = Number(value.toFixed(2));
    setV(p);
  });

  return (
    <div ref={ref} className='h-[300vh]'>
      <div className='sticky top-0 flex h-screen items-center justify-center'>
        <h2 className='font-beatriceMedium w-full max-w-2xl px-1 text-center text-2xl leading-[1.5] sm:text-3xl'>
          Hello! I am <span className='font-bold text-blue-400'>Vedant</span>, a
          developer based in India.{' '}
          <span className={cn(v < 0.45 ? 'text-neutral-800' : 'text-white')}>
            I love to{' '}
            <span className={cn(v < 0.45 ? 'opacity-40' : 'opacity-100')}>
              ⛵
            </span>{' '}
            ship awesome web3 projects.
          </span>{' '}
          <span className={cn(v < 0.65 ? 'text-neutral-800' : 'text-white')}>
            In my free time, I like write technical blogs{' '}
            <span
              className={cn(
                v < 0.65 ? 'text-neutral-800 opacity-40' : 'opacity-100'
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
