"use client";

import { useRef, useCallback } from "react";

const THRESHOLD = 40;

/**
 * Handles mouse and touch drag/swipe on a container element.
 * Also detects tap-zone clicks (left 40% → prev, right 60% → next).
 */
export function useDragSwipe(onNext: () => void, onPrev: () => void) {
  const startX = useRef<number | null>(null);
  const dragging = useRef(false);

  const resolve = useCallback(
    (start: number, end: number) => {
      const d = start - end;
      if (d > THRESHOLD) onNext();
      else if (d < -THRESHOLD) onPrev();
      else if (Math.abs(d) < 10) {
        const w = window.innerWidth;
        if (end > w * 0.6) onNext();
        else if (end < w * 0.4) onPrev();
      }
    },
    [onNext, onPrev],
  );

  return {
    onMouseDown: (e: React.MouseEvent) => {
      startX.current = e.clientX;
      dragging.current = true;
    },
    onMouseUp: (e: React.MouseEvent) => {
      if (!dragging.current || startX.current === null) return;
      resolve(startX.current, e.clientX);
      dragging.current = false;
      startX.current = null;
    },
    onMouseLeave: () => {
      dragging.current = false;
    },
    onTouchStart: (e: React.TouchEvent) => {
      startX.current = e.touches[0].clientX;
      dragging.current = true;
    },
    onTouchEnd: (e: React.TouchEvent) => {
      if (!dragging.current || startX.current === null) return;
      resolve(startX.current, e.changedTouches[0].clientX);
      dragging.current = false;
      startX.current = null;
    },
  };
}
