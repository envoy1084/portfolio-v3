'use client';

import React, { type PropsWithChildren } from 'react';

import { GlobalCanvas, SmoothScrollbar } from '@14islands/r3f-scroll-rig';

export const SmoothScroll = ({ children }: PropsWithChildren) => {
  return (
    <>
      <GlobalCanvas />
      <SmoothScrollbar />
      {children}
    </>
  );
};
