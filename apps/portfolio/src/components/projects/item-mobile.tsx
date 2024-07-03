import Image from 'next/image';

import React from 'react';

import { useProjectsStore } from '~/lib/stores/projects';

import { cubicBezier } from 'framer-motion';
import {
  type MotionValue,
  motion,
  useMotionTemplate,
  useTransform,
} from 'framer-motion';

import { type Project } from '.';

const easeInOutQuint = cubicBezier(0.12, 0, 0.39, 0);

interface ProjectItemProps extends Project {
  index: number;
  scrollYProgress: MotionValue<number>;
}

export const ProjectItemMobile = ({
  index,
  scrollYProgress,
  image,
}: ProjectItemProps) => {
  const { active, setActive } = useProjectsStore();

  const ONE_DIV = 1 / 12;

  const height = useTransform(
    scrollYProgress,
    [ONE_DIV * (index - 3), ONE_DIV * (index + 1), ONE_DIV * (index + 5)],
    [300, 400, 300],
    { ease: easeInOutQuint }
  );

  const rotateY = useTransform(
    scrollYProgress,
    [
      ONE_DIV * (index - 4),
      ONE_DIV * index,
      ONE_DIV * (index + 1),
      ONE_DIV * (index + 2),
      ONE_DIV * (index + 5),
    ],
    [0, 20, 0, -20, 0],
    { ease: easeInOutQuint }
  );
  const rotateX = useTransform(
    scrollYProgress,
    [
      ONE_DIV * (index - 4),
      ONE_DIV * index,
      ONE_DIV * (index + 1),
      ONE_DIV * (index + 2),
      ONE_DIV * (index + 5),
    ],
    [0, 5, 0, 5, 0],
    { ease: easeInOutQuint }
  );
  const scaleX = useTransform(
    scrollYProgress,
    [
      ONE_DIV * (index - 4),
      ONE_DIV * index,
      ONE_DIV * (index + 1),
      ONE_DIV * (index + 2),
      ONE_DIV * (index + 5),
    ],
    [1, 1.1, 1, 1.1, 1]
  );

  const perspective = useTransform(
    scrollYProgress,
    [
      ONE_DIV * index - ONE_DIV / 4,
      ONE_DIV * (index + 1),
      ONE_DIV * (index + 3),
    ],
    [4000, 4000, -0]
  );

  const grayScaleValue = useTransform(
    scrollYProgress,
    [ONE_DIV * (index - 2), ONE_DIV * (index + 1), ONE_DIV * (index + 4)],
    ['100%', '0%', '100%']
  );

  const filter = useMotionTemplate`grayscale(${grayScaleValue})`;

  const imageIndex = (index + 1) % 12 === 0 ? 12 : (index + 1) % 12;

  return (
    <motion.div
      key={`project-${String(index)}`}
      className='block w-[4rem] md:hidden'
      animate={{
        width: active === index ? '20rem' : '4rem',
        paddingInline: active === index ? '1rem' : '0',
        rotateX: active === index ? 0 : undefined,
        rotateY: active === index ? 0 : undefined,
        filter: active === index ? 'grayscale(0%)' : undefined,
      }}
      style={{
        height,
        perspective,
        rotateY,
        rotateX,
        filter,
        scaleX,
      }}
      onClick={() => {
        if (active === index) {
          setActive(null);
        } else {
          setActive(index);
        }
      }}
    >
      <Image
        alt={`Image ${String(imageIndex)}`}
        className='h-full w-full object-cover'
        height={600}
        src={image}
        width={600}
      />
    </motion.div>
  );
};
