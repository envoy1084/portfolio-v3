'use client';

import React from 'react';

import { Button } from './ui/button';

import { BinaryIcon } from 'lucide-react';

export const Footer = () => {
  return (
    <div className='flex h-[8dvh] items-center justify-between px-4 sm:px-6'>
      <BinaryIcon size='2rem' />
      <Button
        className='text-lg uppercase'
        variant='link'
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        Back to top
      </Button>
    </div>
  );
};
