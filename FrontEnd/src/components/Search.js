import { useEffect } from 'react';
import ProtectedRoute from './ProtectedRoute';
import { Form, Container } from 'semantic-ui-react';

import SearchEventCard from './SearchEventCard';
import SearchCategories from './SearchCategories';

import { getEvent, getTags, changeEventsSearch, submitEventsSearch } from '../store/actions';
import { useSelector, useDispatch} from 'react-redux';

import '../styles/search.scss';

function Search() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTags());
    dispatch(getEvent());
  }, [dispatch]);

  const { searchInput } = useSelector((state) => state.events);
  const tags = useSelector((state) => state.tags.list) || [];
  const event = useSelector((state) => state.event);

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
        <SearchEventCard
          event={event} 
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
        {
          tags.map((t) => (
            <SearchCategories tag={t} />
          ))
        }
      </Container>
    </div>
  );
}

export default ProtectedRoute(Search);