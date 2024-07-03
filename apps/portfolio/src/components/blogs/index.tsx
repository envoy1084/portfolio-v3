'use client';

import React, { useRef, useState } from 'react';

import { useScroll, useTransform } from 'framer-motion';

import { DesktopBlogs } from './desktop-blogs';
import { MobileBlogs } from './mobile-blogs';
import { BlogTitle } from './title';

export const Blogs = () => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- safe to assume ref is not null
  const ref = useRef<HTMLDivElement>(null!);
  const { scrollYProgress } = useScroll({ target: ref });

  const value = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const [scrollProgress, setScrollProgress] = useState(0);

  value.on('change', (value) => {
    setScrollProgress(value * 2000);
  });
  return (
    <div ref={ref} className='relative z-[2] h-fit md:h-[200dvh]'>
      <div className='top-0 overflow-hidden md:sticky md:h-screen'>
        <div className='flex h-full flex-col px-3 md:flex-row lg:flex-row'>
          <BlogTitle scrollProgress={scrollProgress} />
          <DesktopBlogs scrollProgress={scrollProgress} />
          <MobileBlogs />
        </div>
      </div>
    </div>
  );
};
