export const capitalizeName = (name: string): string => {
  if (!name) return "";

  // Words that should stay lowercase (unless first word)
  const minorWords = new Set([
    "a",
    "an",
    "the",
    "and",
    "but",
    "or",
    "for",
    "nor",
    "on",
    "at",
    "to",
    "by",
    "in",
    "of",
  ]);

  return name
    .trim()
    .split(/\s+/)
    .map((word, index) => {
      const lower = word.toLowerCase();
      // Always capitalize first word, skip minor words in the middle
      if (index === 0 || !minorWords.has(lower)) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      }
      return lower;
    })
    .join(" ");
};
