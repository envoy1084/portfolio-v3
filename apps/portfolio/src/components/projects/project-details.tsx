'use client';

import React from 'react';

import { useProjectsStore } from '~/lib/stores/projects';

import { motion } from 'framer-motion';

export const ProjectDetails = () => {
  const { active, getActive } = useProjectsStore();
  return (
    <>
      <motion.div
        className='absolute left-0 top-0 h-full w-full'
        animate={{
          backgroundColor: getActive()?.backgroundColor ?? '#0000000',
        }}
      />
      <motion.div
        className='absolute left-0 top-12 z-[1] flex h-fit w-full translate-x-1/2 flex-col text-center text-[4rem] md:left-12 md:translate-x-0 md:text-start md:text-[8rem]'
        animate={{
          color: getActive()?.color ?? '#00000000',
          display: active !== null ? 'flex' : 'hidden',
          rotateX: active !== null ? 0 : 90,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        {getActive()?.title}
        <p className='max-w-5xl text-center text-xs md:text-start md:text-lg'>
          {getActive()?.description}
        </p>
      </motion.div>
    </>
  );
};
