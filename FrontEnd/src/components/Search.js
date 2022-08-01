import ProtectedRoute from './ProtectedRoute';
import { Form, Container } from 'semantic-ui-react';

import EventCardSecondary from './EventCardSecondary';
import SearchCategories from './SearchCategories';
import events from '../data/eventsData';

import { changeEventsSearch, submitEventsSearch } from '../store/actions';
import { useSelector, useDispatch} from 'react-redux';

import '../styles/search.scss';

function Search() {

  const event = events.find((e) => e.id === 12);

  const dispatch = useDispatch();
  const { 
    searchInput
  } = useSelector((state) => state.events);

  return (
    <div className='search-container'>
      <Form onSubmit={()=> dispatch(submitEventsSearch())}>
        <Form.Input 
          icon={{ name:'sliders horizontal', link: true}}
          placeholder='Rechercher...'
          value={searchInput}
          onChange={(e)=> dispatch(changeEventsSearch(e.target.value))}
        />
      </Form>
      <Container
        className='search-container__container'
      >
        <EventCardSecondary 
          event={event} 
          params={'autour-de-moi'}
        />
      </Container>
      <Container
        style={{
          width: '100%',
          height: '250px',
          margin: '1rem auto',
          borderRadius: '30px',
          backgroundColor: 'black',
        }}
      >
        <SearchCategories event={event} />
        <SearchCategories event={event} />
        <SearchCategories event={event} />
      </Container>
    </div>
  );
}

export default ProtectedRoute(Search);