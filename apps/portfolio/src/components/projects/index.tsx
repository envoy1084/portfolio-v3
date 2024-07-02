'use client';

import { Suspense } from 'react';

import { useProjectsStore } from '~/lib/stores/projects';

import { Scroll, ScrollControls } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';

import { Item } from './item';
import { Minimap } from './minimap';

const Items = ({ w = 0.7, gap = 0.15 }) => {
  const { urls } = useProjectsStore();
  const { width } = useThree((state) => state.viewport);
  const xW = w + gap;
  const pages = (width - xW + urls.length * xW) / width + 0.5;

  return (
    <ScrollControls horizontal damping={0.1} pages={pages}>
      <Minimap />
      <Scroll>
        {urls.map((url, i) => {
          return (
            <Item
              key={url}
              index={i}
              position={[i * xW, 0, 0]}
              scale={[w, 4]}
              url={url}
            />
          );
        })}
      </Scroll>
    </ScrollControls>
  );
};

export const Projects = () => {
  const { setActive } = useProjectsStore();
  return (
    <Suspense fallback={<>loading...</>}>
      <div className='h-[400dvh]'>
        <div className='sticky top-0 h-screen'>
          <Canvas
            className='min-h-screen'
            dpr={[1, 1.5]}
            gl={{ antialias: false }}
            onPointerMissed={() => setActive(null)}
          >
            <Items />
          </Canvas>
        </div>
      </div>
    </Suspense>
  );
};
