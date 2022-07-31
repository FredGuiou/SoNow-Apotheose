import ProtectedRoute from './ProtectedRoute';

import EventSearchCard from './EventSearchCard';
import EventScrollElement from './EventScrollElement';
import events from '../data/eventsData';

import '../styles/search.scss';
import { Input, Menu, Container } from 'semantic-ui-react';
import HorizontalScroll from 'react-scroll-horizontal';

function Search() {

  const event = events.find((e) => e.id === 12);

  return (
    <div className='search-container'>
      <Menu 
        inverted
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'black',
        }}
      >
      <Menu.Item
        style={{
          width: '100%',
        }}
      >
          <Input
            icon= 'sliders horizontal'
            placeholder='Rechercher...'
            size='large'
          />
        </Menu.Item>
      </Menu>
      <Container
        style={{
          width: '100%',
          height: '400px',
          margin: '0.5rem auto',
          padding: '0.5rem',
          borderRadius: '30px',
        }}
      >
        <EventSearchCard event={event} />

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
        <h1 style={{
            display: 'inline-block',
            margin: '1rem',
            paddingBottom: '0.5rem',
            borderBottom: '2px solid #f30067'
          }} 
        > 
          {event.flag}

        </h1>
        <HorizontalScroll reverseScroll={true}>
          <div className='scroll-element-container'>
            <EventScrollElement />
            <EventScrollElement />
            <EventScrollElement />
            <EventScrollElement />
            <EventScrollElement />
            <EventScrollElement />
            <EventScrollElement />
            <EventScrollElement />
            <EventScrollElement />
            <EventScrollElement />
          </div>
        </HorizontalScroll>

        <h1 style={{
            display: 'inline-block',
            margin: '1rem',
            paddingBottom: '0.5rem',
            borderBottom: '2px solid #f30067'
          }} 
        > 
          {event.flag}

        </h1>
        <HorizontalScroll reverseScroll={true}>
          <div className='scroll-element-container'>
            <EventScrollElement />
            <EventScrollElement />
            <EventScrollElement />
            <EventScrollElement />
            <EventScrollElement />
            <EventScrollElement />
            <EventScrollElement />
            <EventScrollElement />
            <EventScrollElement />
            <EventScrollElement />
          </div>
        </HorizontalScroll>

        <h1 style={{
            display: 'inline-block',
            margin: '1rem',
            paddingBottom: '0.5rem',
            borderBottom: '2px solid #f30067'
          }} 
        > 
          {event.flag}

        </h1>
        <HorizontalScroll reverseScroll={true}>
          <div className='scroll-element-container'>
            <EventScrollElement />
            <EventScrollElement />
            <EventScrollElement />
            <EventScrollElement />
            <EventScrollElement />
            <EventScrollElement />
            <EventScrollElement />
            <EventScrollElement />
            <EventScrollElement />
            <EventScrollElement />
          </div>
        </HorizontalScroll>

        <h1 style={{
            display: 'inline-block',
            margin: '1rem',
            paddingBottom: '0.5rem',
            borderBottom: '2px solid #f30067'
          }} 
        > 
          {event.flag}

        </h1>
        <HorizontalScroll reverseScroll={true}>
          <div className='scroll-element-container'>
            <EventScrollElement />
            <EventScrollElement />
            <EventScrollElement />
            <EventScrollElement />
            <EventScrollElement />
            <EventScrollElement />
            <EventScrollElement />
            <EventScrollElement />
            <EventScrollElement />
            <EventScrollElement />
          </div>
        </HorizontalScroll>
        

      </Container>

    </div>
  );
}

export default ProtectedRoute(Search);