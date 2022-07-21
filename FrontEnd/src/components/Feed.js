import FeedEvent from './FeedEvent';

import "../styles/feed.scss";

const event = 
  {
    id: 12,
    title: 'Pool Party',
    media: 'https://picsum.photos/1080', 
    description: 'Crazy evening around the Duplex pool',
    start: {
      day: 12, 
      month: 'Juin'
    },
    tag: [
      'Entre amis', 
      'Danse',
      'Musique',
    ],
    user: 'SoNow Event',
    participants: 22,
  }
;

const eventbis = 
  {
    id: 13,
    title: 'Pool Party',
    media: 'https://picsum.photos/1080', 
    description: 'Crazy evening around the Duplex pool',
    start: {
      day: 12, 
      month: 'Juin'
    },
    tag: [
      'Entre amis', 
      'Danse',
      'Musique',
    ],
    user: 'SoNow Event',
    participants: 22,
  }
;

function Feed() {
    return (
      <div className="feed">
        <FeedEvent 
        key={event.id}
        event={event}
        />
        <FeedEvent 
        key={eventbis.id}
        event={eventbis}
        />
      </div>
    );
  }
  
  export default Feed;