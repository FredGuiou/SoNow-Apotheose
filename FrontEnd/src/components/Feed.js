import FeedEvent from './FeedEvent';
import "../styles/feed.scss";
// Import data en dur pour préparer la connexion API 
import events from '../data/eventsData';
import Search from './Search';



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