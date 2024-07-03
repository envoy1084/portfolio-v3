'use client';

import React from 'react';

import { useProjectsStore } from '~/lib/stores/projects';

import { type Variants, cubicBezier, motion } from 'framer-motion';

const easeSine = cubicBezier(0.12, 0, 0.39, 0);

export const ProjectDetails = () => {
  const { active, getActive } = useProjectsStore();

  const containerVariants: Variants = {
    hidden: {
      color: '#00000000',
    },
    visible: {
      color: getActive()?.color ?? '#00000000',
    },
  };

  const titleVariants: Variants = {
    hidden: {
      x: -100,
      color: '#00000000',
      rotateY: 90,
    },
    visible: (index: number) => {
      return {
        x: 0,
        scaleX: 1,
        color: getActive()?.color ?? '#00000000',
        rotateY: 0,
        transition: {
          ease: easeSine,
          delay: index * 0.05,
        },
      };
    },
  };

  const descriptionVariants: Variants = {
    hidden: {
      display: 'hidden',
      x: -100,
      color: '#00000000',
    },
    visible: (index: number) => {
      return {
        x: 0,
        color: getActive()?.color ?? '#00000000',
        transition: {
          ease: easeSine,
          delay:
            Math.min((getActive()?.title.length ?? 0) * 0.05, 0.5) +
            index * 0.05,
        },
      };
    },
  };

  return (
    <>
      <motion.div
        className='absolute left-0 top-0 h-full w-full'
        animate={{
          backgroundColor: getActive()?.backgroundColor ?? '#0000000',
        }}
        transition={{
          duration: 0.3,
          ease: easeSine,
        }}
      />
      <motion.div
        animate={active !== null ? 'visible' : 'hidden'}
        className='absolute left-0 top-12 z-[1] flex h-fit w-full flex-col text-center text-[4rem] md:left-12 md:text-start md:text-[8rem]'
        initial='hidden'
        variants={containerVariants}
        transition={{
          duration: 0.5,
        }}
      >
        <div className='flex flex-row items-center justify-center sm:justify-start'>
          {(getActive()?.title ?? '').split('').map((c, index) => {
            return (
              <motion.div
                key={`title-char-${String(index)}`}
                animate='visible'
                custom={index}
                initial='hidden'
                variants={titleVariants}
              >
                {c === ' ' ? '\u00A0' : c}
              </motion.div>
            );
          })}
        </div>
        <p className='flex max-w-5xl flex-row flex-wrap items-center justify-center gap-1 text-center text-xs sm:justify-start md:text-start md:text-lg'>
          {getActive()
            ?.description.split(' ')
            .map((word, index) => {
              return (
                <motion.div
                  key={`description-word-${String(index)}`}
                  animate={active !== null ? 'visible' : 'hidden'}
                  custom={index}
                  initial='hidden'
                  variants={descriptionVariants}
                >
                  {word}
                </motion.div>
              );
            })}
        </p>
      </motion.div>
    </>
  );
};
