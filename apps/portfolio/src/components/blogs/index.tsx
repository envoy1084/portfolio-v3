'use client';

import React, { useRef, useState } from 'react';

import { useTrackerMotionValue } from '~/lib/hooks';

import { useTracker } from '@14islands/r3f-scroll-rig';
import { useTransform } from 'framer-motion';

import { DesktopBlogs } from './desktop-blogs';
import { MobileBlogs } from './mobile-blogs';
import { BlogTitle } from './title';

export const Blogs = () => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- safe to assume ref is not null
  const ref = useRef<HTMLDivElement>(null!);
  const tracker = useTracker(ref);
  const progress = useTrackerMotionValue(tracker);

  const value = useTransform(progress, [0, 1], [0, 1]);

  const [scrollProgress, setScrollProgress] = useState(0);

  value.on('change', (value) => {
    setScrollProgress(value * 2000);
  });
  return (
    <div ref={ref} className='relative z-[2] min-h-[300dvh]'>
      <div className='sticky top-0 overflow-hidden md:h-screen'>
        <div className='flex h-full flex-col px-3 md:flex-row lg:flex-row'>
          <BlogTitle scrollProgress={scrollProgress} />
          <DesktopBlogs scrollProgress={scrollProgress} />
          <MobileBlogs scrollProgress={scrollProgress} />
        </div>
      </div>
    </div>
  );
};
