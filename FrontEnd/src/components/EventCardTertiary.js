import { Link } from 'react-router-dom';
import '../styles/eventCardTertiary.scss';

import DateCard from './DateCard';

function EventCardTertiary({ event }) {

  return (
    <Link to={`/event/${event.slug}`}>
    <div className='event-card-tertiary'>

      <img 
        className='event-card-tertiary__img'
        src={event.media} 
        alt={event.title} 
      />
      <div className='event-card-tertiary__content'>
        <div className='event-card-tertiary__date'>
          <DateCard start={event.start}/>
        </div>
        <p className='event-card-tertiary__content__title'>{event.title.toUpperCase()}</p>
      </div>
    </div>
    </Link>
  );
}

export default EventCardTertiary;