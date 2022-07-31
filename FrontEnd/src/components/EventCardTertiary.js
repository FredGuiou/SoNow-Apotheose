import { Link } from 'react-router-dom';
import '../styles/eventCardTertiary.scss';

import DateCard from './DateCard';

import events from '../data/eventsData';

function EventCardTertiary() {

  const event = events.find((e) => e.id === 15);

  return (
    <Link to={`/event/${event.slug}`}>
    <div className='event-card-tertiary'>

      <img 
        className='event-card-tertiary__img'
        src={event.media} 
        alt={event.title} 
      />

      <div className='event-card-tertiary__date'>
        <DateCard start={event.start}/>
      </div>
      <div className='event-card-tertiary__content'>
        <p className='event-card-tertiary__content__title'>{event.title.toUpperCase()}</p>
      </div>
    </div>
    </Link>
  );
}

export default EventCardTertiary;