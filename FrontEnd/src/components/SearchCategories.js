import HorizontalScroll from 'react-scroll-horizontal';
import EventCardTertiary from './EventCardTertiary';

function SearchCategories({ event}) {
  return (
    <>
      <h1 style={{
        display: 'inline-block',
        margin: '1rem',
        paddingBottom: '0.5rem',
      }} 
      > 
        {`${event.flag} >`} 
      </h1>
      <HorizontalScroll reverseScroll={true}>
        <div className='scroll-element-container'>
          <EventCardTertiary event={event} />
          <EventCardTertiary event={event} />
          <EventCardTertiary event={event} />
          <EventCardTertiary event={event} />
          <EventCardTertiary event={event} />
          <EventCardTertiary event={event} />
          <EventCardTertiary event={event} />
          <EventCardTertiary event={event} />
          <EventCardTertiary event={event} />
          <EventCardTertiary event={event} />
        </div>
      </HorizontalScroll>
    </>
  )
}; 

export default SearchCategories;