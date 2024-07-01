'use client';

import Image from 'next/image';

import { useEffect, useMemo, useState } from 'react';

import { particles } from '~/lib/particles';

import { type Container } from '@tsparticles/engine';
import { Particles, initParticlesEngine } from '@tsparticles/react';
import HeaderImage from 'public/header.svg';
import { loadFull } from 'tsparticles';

export const Header = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    })
      .then(() => {
        setInit(true);
      })
      .catch((e: unknown) => console.log(e));
  }, []);

  const particlesLoaded = async (container?: Container) => {
    const c = container;
    await Promise.resolve(c);
  };

  const options = useMemo(() => particles, []);

  if (init) {
    return (
      <div className='px-3 lg:px-0'>
        <div className='relative mx-auto my-[10rem] w-full max-w-5xl'>
          <Image
            alt='Header'
            className='z-0 w-full'
            src={HeaderImage as unknown as string}
          />
          <Particles
            className='particle-mask absolute left-0 top-0 z-[-1] w-full overflow-clip'
            id='tsparticles'
            options={options}
            particlesLoaded={particlesLoaded}
          />
        </div>
      </div>
    );
  }

  return null;
};
