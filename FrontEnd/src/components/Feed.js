import FeedEvent from './FeedEvent';
import "../styles/feed.scss";
import events from '../data/eventsData';

function Feed() {
  return (
    <div className="feed-container">
      <div className='feed-container__event'>
        {
          events.map((e) => (
            <FeedEvent
              key={e.id}
              event={e}
            />
          ))
        }
      </div>
    </div>
  );
}
  
export default Feed;