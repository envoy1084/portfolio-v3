'use client';

import React, { type ComponentProps, useRef, useState } from 'react';

import { useTrackerMotionValue } from '~/lib/hooks';
import { cn } from '~/lib/utils';

import { useTracker } from '@14islands/r3f-scroll-rig';
import { useTransform } from 'framer-motion';

/* eslint-disable @typescript-eslint/no-non-null-assertion -- we know its not null */

export const Interests = () => {
  const ref = useRef<HTMLDivElement>(null!);
  const tracker = useTracker(ref);
  const progress = useTrackerMotionValue(tracker);

  const value = useTransform(progress, [0.1, 0.8], [0, 1]);

  const [scrollProgress, setScrollProgress] = useState(0);

  value.on('change', (value) => {
    setScrollProgress(value);
  });
  return (
    <div
      ref={ref}
      className='flex min-h-[100dvh] flex-col items-center justify-start gap-[10rem]'
    >
      <div className='relative'>
        <div className='text-center font-elgocAlt text-[4rem] leading-[0.9] sm:text-[6rem]'>
          *what do <br />I do as a<br /> web3 <br />
          developer?
        </div>
        <ChatBubble
          className='absolute -left-24 top-12 z-[4]'
          rotation={{ initial: -15, final: -20 }}
          scrollProgress={scrollProgress}
          text='Build decentralized applications'
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
          text='Explore various protocols'
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
          text='Participate in hackathons'
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
          text='Meet other developers'
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
          text='Go to IRL events'
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
      <p className='max-w-lg whitespace-pre-line px-3 text-sm sm:text-base'>
        {`
          I started my journey as a web3 developer in 2020. I've been building decentralized applications, exploring various protocols, participating in hackathons, meeting other developers, and going to IRL events.

          I'm currently working on a Battleship Game on Nillion Network which uses Secure MPC Computation to ensure that the game is fair and secure.
        `}
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
