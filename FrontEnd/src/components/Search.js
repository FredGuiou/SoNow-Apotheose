import ProtectedRoute from './ProtectedRoute';
import { Form, Container } from 'semantic-ui-react';

import EventCardSecondary from './EventCardSecondary';
import SearchCategories from './SearchCategories';
import events from '../data/eventsData';

import '../styles/search.scss';

function Search() {

  const event = events.find((e) => e.id === 12);

  return (
    <div className='search-container'>
      <Form>
        <Form.Input 
          icon={{ name:'sliders horizontal', link: true}}
          placeholder='Rechercher...'
        />
      </Form>
      <Container
        style={{
          width: '100%',
          height: '400px',
          margin: '0.5rem auto',
          padding: '0.5rem',
          borderRadius: '30px',
        }}
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