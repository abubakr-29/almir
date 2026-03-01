import gsap from "gsap";

/**
 * Returns the signed slot position for a card relative to the active index.
 * Handles edge cases for total < 3 correctly.
 *
 *  0  → active / center
 *  1  → right peek
 * -1  → left peek
 * ±2+ → hidden behind
 */
export function getSlot(
  index: number,
  activeIndex: number,
  total: number,
): number {
  if (total === 1) return 0;
  if (total === 2) {
    const diff = index - activeIndex;
    return diff === 0 ? 0 : 1;
  }

  let diff = index - activeIndex;
  const half = Math.floor(total / 2);
  if (diff > half) diff -= total;
  if (diff < -half) diff += total;
  // Even totals: exact opposite card is ambiguous — send to hidden
  if (total % 2 === 0 && Math.abs(diff) === half) return 2;
  return diff;
}

/**
 * Maps a slot number to the GSAP tween vars that position the card.
 * sideX is resolved at call-time so it responds to viewport width.
 */
export function getSlotProps(slot: number): gsap.TweenVars {
  const sideX =
    typeof window !== "undefined" && window.innerWidth >= 768 ? "45%" : "15%";

  if (slot === 0) {
    return {
      x: "0%",
      y: 0,
      rotation: 0,
      scale: 1,
      opacity: 1,
      zIndex: 30,
      pointerEvents: "auto",
      boxShadow: "0 20px 60px rgba(15,23,42,0.08)",
    };
  }
  if (slot === 1) {
    return {
      x: sideX,
      y: 24,
      rotation: 4,
      scale: 0.85,
      opacity: 0.6,
      zIndex: 20,
      pointerEvents: "none",
      boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)",
    };
  }
  if (slot === -1) {
    return {
      x: `-${sideX}`,
      y: 24,
      rotation: -4,
      scale: 0.85,
      opacity: 0.6,
      zIndex: 20,
      pointerEvents: "none",
      boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)",
    };
  }
  // Hidden / stacked behind
  return {
    x: "0%",
    y: 48,
    rotation: 0,
    scale: 0.7,
    opacity: 0,
    zIndex: 10,
    pointerEvents: "none",
    boxShadow: "none",
  };
}

/** Derives capitalized name. */
export const capitalizeName = (name: string): string => {
  return name
    .trim()
    .split(/\s+/)
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

/** Derives two-letter initials from a full name. */
export function getInitials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .map((w) => w[0].toUpperCase())
    .slice(0, 2)
    .join("");
}
