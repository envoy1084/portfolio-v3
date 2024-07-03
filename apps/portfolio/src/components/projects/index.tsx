'use client';

import React, { useRef } from 'react';

import { type data } from '~/lib/data';
import { useProjectsStore } from '~/lib/stores/projects';

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'framer-motion';

import { ProjectItem } from './item';
import { ProjectItemMobile } from './item-mobile';
import { ProjectDetails } from './project-details';

export type Project = (typeof data.projects.projects)[number];

export const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const { projects } = useProjectsStore();

  const { scrollYProgress } = useScroll({ target: containerRef });

  const innerScroll = useTransform(scrollYProgress, [0, 1], ['50%', '-50%']);
  const translateX = useMotionTemplate`translateX(${innerScroll})`;

  return (
    <div ref={containerRef} className='h-[300vh]'>
      <div className='sticky top-0 h-screen'>
        <div className='relative flex h-full flex-col items-center justify-center gap-12 overflow-x-hidden'>
          <ProjectDetails />
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
            {projects.map((project, i) => {
              return (
                <>
                  <ProjectItem
                    key={`i-${String(i)}`}
                    index={i}
                    scrollYProgress={scrollYProgress}
                    {...project}
                  />
                  <ProjectItemMobile
                    key={`i-${String(i)}`}
                    index={i}
                    scrollYProgress={scrollYProgress}
                    {...project}
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
