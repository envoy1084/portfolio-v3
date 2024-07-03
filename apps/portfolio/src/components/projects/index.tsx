'use client';

import React, { useRef } from 'react';

import { useProjectsStore } from '~/lib/stores/projects';

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'framer-motion';

import { ProjectItem } from './item';
import { ProjectItemMobile } from './item-mobile';

const colors = [
  {
    backgroundColor: '#FFFFFF',
    color: '#CC9933',
  },
  {
    backgroundColor: '#BEBEBE',
    color: '#1E1E1E',
  },
  {
    backgroundColor: '#DE4B40',
    color: '#FFF0CE',
  },
  {
    backgroundColor: '#0A0A0A',
    color: '#D9D9D9',
  },
  {
    backgroundColor: '#D5D5D5',
    color: '#2A2A2A',
  },
  {
    backgroundColor: '#595E62',
    color: '#D99299',
  },
  {
    backgroundColor: '#898270',
    color: '#E0C8A4',
  },
  {
    backgroundColor: '#FEF8F6',
    color: '#BD998F',
  },
];

export const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const { active } = useProjectsStore();

  const { scrollYProgress } = useScroll({ target: containerRef });

  const innerScroll = useTransform(scrollYProgress, [0, 1], ['50%', '-50%']);
  const translateX = useMotionTemplate`translateX(${innerScroll})`;

  const getColor = (active: number) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- safe
    return colors[active % colors.length]!;
  };

  return (
    <div ref={containerRef} className='h-[300vh]'>
      <div className='sticky top-0 h-screen'>
        <div className='relative flex h-full flex-col items-center justify-start gap-6'>
          <motion.div
            className='absolute left-0 top-0 h-full w-full'
            animate={{
              backgroundColor:
                active !== null ? getColor(active).backgroundColor : '#0000000',
            }}
          />
          <motion.div
            className='absolute left-12 top-12 z-[1] flex h-fit w-fit text-[4rem] md:text-[8rem]'
            animate={{
              color: active !== null ? getColor(active).color : '#00000000',
              display: active !== null ? 'flex' : 'hidden',
              rotateX: active !== null ? 0 : 90,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            Blaze ID
          </motion.div>
          <div className='font-elgocAlt text-[4rem] md:text-[8rem]'>
            Projects
          </div>
          <motion.div
            ref={innerRef}
            className='flex h-[42rem] flex-row items-center justify-between gap-4 py-12'
            style={{
              transform: translateX,
            }}
          >
            {Array(12)
              .fill(true)
              .map((_: boolean, i) => {
                return (
                  <>
                    <ProjectItem
                      key={`i-${String(i)}`}
                      index={i}
                      scrollYProgress={scrollYProgress}
                    />
                    <ProjectItemMobile
                      key={`i-${String(i)}`}
                      index={i}
                      scrollYProgress={scrollYProgress}
                    />
                  </>
                );
              })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
