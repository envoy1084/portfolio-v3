'use clients';

import Image from 'next/image';
import Link from 'next/link';

import React from 'react';

import { type Post } from '~/lib/utils';

interface MobileBlogsProps {
  posts: Post[];
}

export const MobileBlogs = (props: MobileBlogsProps) => {
  const posts = props.posts.slice(0, 6);

  return (
    <div className='relative flex w-full basis-full flex-row justify-center gap-12 md:hidden lg:basis-3/5'>
      <div className='carousel-grad carousel-grad-top z-[4]' />
      <div className='carousel-grad carousel-grad-bottom z-[4]' />
      <div className='flex flex-col gap-8'>
        {posts.map((article) => {
          return (
            <Link
              key={article.title}
              className='flex aspect-portrait w-full max-w-[300px] flex-col gap-3 rounded-2xl border px-2 py-3'
              href={article.url}
              target='_blank'
            >
              <div className='aspect-og w-full rounded-xl'>
                <Image
                  alt={article.title}
                  className='w-full rounded-xl object-cover'
                  height={150}
                  src={article.coverImage.url}
                  width={300}
                />
              </div>
              <div className='py-2 text-center text-xl'>{article.title}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
