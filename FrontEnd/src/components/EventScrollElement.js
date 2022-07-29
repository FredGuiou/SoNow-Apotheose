import { Link } from 'react-router-dom';
import "../styles/eventscrollelement.scss";

import events from '../data/eventsData';

function EventScrollElement () {

  const event = events.find((e) => e.id === 15);

  return (
    <Link to={`/event/${event.slug}`}>
    <div className='event-scroll-element'>
        <img
          style={{
            width: '215px',
            height: '150px',
            borderRadius: '30px'
          }} 
          src={event.media} alt={event.title} />
        
        <section className='event-scroll-element__details'>
          <section className="event-scroll-element__details__card">
            <div className="event-scroll-element__details__card__content">
              <h1>{event.title}</h1>
            </div>
          </section>
        </section>
    </div>
    </Link>
  );
}

export default EventScrollElement;