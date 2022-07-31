import HorizontalScroll from 'react-scroll-horizontal';
import EventCardSecondary from './EventCardTertiary';

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
          <EventCardSecondary />
          <EventCardSecondary />
          <EventCardSecondary />
          <EventCardSecondary />
          <EventCardSecondary />
          <EventCardSecondary />
          <EventCardSecondary />
          <EventCardSecondary />
          <EventCardSecondary />
          <EventCardSecondary />
        </div>
      </HorizontalScroll>
    </>
  )
}; 

export default SearchCategories;