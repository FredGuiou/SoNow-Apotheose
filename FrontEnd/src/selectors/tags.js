export function shuffle(tags) {
  for (let i = tags.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tags[i], tags[j]] = [tags[j], tags[i]];
  }
  return tags; 
}