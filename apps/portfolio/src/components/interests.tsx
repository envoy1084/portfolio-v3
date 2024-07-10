'use client';

import React, { type ComponentProps, useRef, useState } from 'react';

import { data } from '~/lib/data';
import { cn } from '~/lib/utils';

import { useScroll, useTransform } from 'framer-motion';

export const Interests = () => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- safe to assume ref is not null
  const ref = useRef<HTMLDivElement>(null!);

  const [chat1, chat2, chat3, chat4, chat5] = data.interests.interests;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });

  const value = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [scrollProgress, setScrollProgress] = useState(0);

  value.on('change', (value) => {
    setScrollProgress(value);
  });

  return (
    <div
      ref={ref}
      className='flex h-screen flex-col items-center justify-center gap-[10rem] overflow-x-clip sm:justify-evenly'
      id='interests'
    >
      <div className='relative'>
        <div className='text-center font-elgocAlt text-[4rem] leading-[0.9] sm:text-[6rem]'>
          {data.interests.title}
        </div>
        <ChatBubble
          className='absolute -left-2 top-12 z-[4] sm:-left-24'
          rotation={{ initial: -15, final: -20 }}
          scrollProgress={scrollProgress}
          text={chat1}
          transform={{
            x: {
              direction: 'left',
              step: 200,
            },
            y: {
              direction: 'top',
              step: 100,
            },
          }}
        />
        <ChatBubble
          className='absolute -left-24 bottom-12 z-[4]'
          rotation={{ initial: -15, final: 10 }}
          scrollProgress={scrollProgress}
          text={chat2}
          transform={{
            x: {
              direction: 'left',
              step: 200,
            },
            y: {
              direction: 'top',
              step: 100,
            },
          }}
        />
        <ChatBubble
          className='absolute -right-24 top-4 z-[4]'
          rotation={{ initial: 5, final: 40 }}
          scrollProgress={scrollProgress}
          text={chat3}
          transform={{
            x: {
              direction: 'left',
              step: 50,
            },
            y: {
              direction: 'top',
              step: 200,
            },
          }}
        />
        <ChatBubble
          className='absolute -right-24 top-[40%] z-[4]'
          rotation={{ initial: 5, final: -60 }}
          scrollProgress={scrollProgress}
          text={chat4}
          transform={{
            x: {
              direction: 'right',
              step: 400,
            },
            y: {
              direction: 'top',
              step: 0,
            },
          }}
        />
        <ChatBubble
          className='absolute bottom-0 left-1/3 z-[4]'
          rotation={{ initial: 0, final: 60 }}
          scrollProgress={scrollProgress}
          text={chat5}
          transform={{
            x: {
              direction: 'right',
              step: 200,
            },
            y: {
              direction: 'top',
              step: 400,
            },
          }}
        />
      </div>
      <p className='max-w-lg whitespace-pre-line px-3 text-center text-sm sm:text-start sm:text-base'>
        {data.interests.description}
      </p>
    </div>
  );
};

interface ChatBubbleProps extends ComponentProps<'div'> {
  text?: string;
  scrollProgress: number;
  rotation: {
    initial: number;
    final: number;
  };
  transform: {
    x: {
      direction: 'left' | 'right';
      step: number;
    };
    y: {
      direction: 'top' | 'bottom';
      step: number;
    };
  };
}

const ChatBubble = ({
  text,
  scrollProgress,
  rotation,
  transform,
  className,
  ...props
}: ChatBubbleProps) => {
  const xDirection = transform.x.direction === 'left' ? -1 : 1;
  const yDirection = transform.y.direction === 'top' ? -1 : 1;

  return (
    <div
      className={cn(
        'rounded-3xl p-2 text-xs leading-none text-white shadow-[0_0_50px_2px_rgba(103,154,204,0.3)] sm:p-5 sm:text-sm',
        className
      )}
      style={{
        background: 'linear-gradient(180deg, #3e7fff, #50a8ff)',
        transform: `rotate(${String(rotation.initial + scrollProgress * (rotation.final - rotation.initial))}deg) translateX(${String(scrollProgress * xDirection * transform.x.step)}px) translateY(${String(yDirection * scrollProgress * transform.y.step)}px)`,
      }}
      {...props}
    >
      {text ?? 'Chat bubble'}
    </div>
  );
};
