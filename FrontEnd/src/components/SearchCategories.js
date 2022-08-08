// import HorizontalScroll from 'react-scroll-horizontal';
import EventCardTertiary from './EventCardTertiary';

function SearchCategories({ tag }) {
  return (
    <>
      <h1 style={{
        display: 'inline-block',
        marginLeft: '1rem',
        marginTop: '0.5rem'
      }} 
      > 
        {`${tag.name} >`} 
      </h1>
      {/* <HorizontalScroll reverseScroll={true}> */}
        <div className='scroll-element-container'>
          {
            tag.events.map((e) => (
              <EventCardTertiary event={e} />
            ))
          }
        </div>
      {/* </HorizontalScroll> */}
    </>
  )
}; 

export default SearchCategories;