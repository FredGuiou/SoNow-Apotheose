export function findEventBySlug(events, searchedSlug) {
  const event = events.find((testedEvent) => {
    return testedEvent.slug === searchedSlug;
  });
  return event;
};

export function shuffle(events) {
  for (let i = events.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [events[i], events[j]] = [events[j], events[i]];
  }
  return events; 
}