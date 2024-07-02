'use client';

import { useEffect } from 'react';

import { useScrollbar, type useTracker } from '@14islands/r3f-scroll-rig';
import { useMotionValue } from 'framer-motion';

type Tracker = ReturnType<typeof useTracker>;

export function useTrackerMotionValue(tracker: Tracker) {
  const progress = useMotionValue(0);
  const { onScroll } = useScrollbar();
  const { scrollState, rect } = tracker;

  useEffect(() => {
    return onScroll(() => {
      progress.set(scrollState.progress);
    });
  }, [progress, scrollState, onScroll, rect]);

  return progress;
}
