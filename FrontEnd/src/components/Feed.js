import FeedEvent from './FeedEvent';

import "../styles/feed.scss";
import events from '../data/eventsData';


function Feed() {
  return (
    <div 
      className="feed"
    >
{
  events.map((e) => (
    <FeedEvent
      key={e.id}
      event={e}
    />
  ))
}
    </div>
  );
}
  
  export default Feed;