import { data } from '~/lib/data';

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const truncate = (
  str: string,
  length?: number,
  fromMiddle?: boolean
) => {
  const middle = fromMiddle ?? true;
  const len = length ?? 20;
  if (str.length <= len) {
    return str;
  }
  if (middle) {
    return `${str.slice(0, len / 2)}...${str.slice(-len / 2)}`;
  }
  return `${str.slice(0, len)}...`;
};

export const errorHandler = (error: unknown) => {
  console.error(error);
  if (error instanceof Error) {
    return error.message;
  } else if (typeof error === 'string') {
    return error;
  } else if (
    error &&
    typeof error === 'object' &&
    'message' in error &&
    typeof error.message === 'string'
  ) {
    return error.message;
  } else if (
    error &&
    typeof error === 'object' &&
    'error' in error &&
    typeof error.error === 'string'
  ) {
    return error.error;
  }
  return 'An error occurred';
};

export interface Post {
  title: string;
  url: string;
  coverImage: { url: string; attribution: string | null };
}

export const getPosts = async () => {
  try {
    const query = `
    query GetPosts {
      publication(host: "${data.articles.hashnodeHostname}") {
        posts(first: 20) {
          edges {
            node {
              title
              url
              coverImage {
                url
                attribution
              }
            }
          }
        }
      }
    }
  `;

    const res = await fetch('https://gql.hashnode.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const posts = (await res.json()) as {
      data: {
        publication: {
          posts: {
            edges: {
              node: {
                title: string;
                url: string;
                coverImage: { url: string; attribution: string | null };
              };
            }[];
          };
        };
      };
    };

    return posts.data.publication.posts.edges.map(({ node }) => node);
  } catch (error) {
    console.log({ error });
    return [];
  }
};
