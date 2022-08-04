import { Link } from 'react-router-dom';

import DateCard from './DateCard';

import '../styles/searchEventCard.scss'; 

function SearchEventCard({ event }) {
  return (
    <Link to={`/event/${event.slug}`}>
    <div className='search-event-card-tertiary'>

      <img 
        className='search-event-card-tertiary__img'
        src={event.media} 
        alt={event.title} 
      />
      <div className='search-event-card-tertiary__content'>
        <div className='search-event-card-tertiary__date'>
          <DateCard start={event.start}/>
        </div>
        <p className='search-event-card-tertiary__content__title'>{event.title.toUpperCase()}</p>
        <p className='search-event-card-tertiary__content__title'>{event.metadescription}</p>
      </div>
    </div>
    </Link>
  );
}

export default SearchEventCard;