import { useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import ProtectedRoute from './ProtectedRoute';
import { Form, Container } from 'semantic-ui-react';

import SearchEventCard from './SearchEventCard';
import SearchCategories from './SearchCategories';

import { getEvent, getTags, changeEventsSearch, submitEventsSearch } from '../store/actions';

import '../styles/search.scss';

function Search() {

  const dispatch = useDispatch();

  const {
    isSearchLoading,
    searchInput,
    searchResults,
    hasSearchError,
  } = useSelector((state) => state.events);

  const tags = useSelector((state) => state.tags.list) || [];

  useEffect(() => {
    dispatch(getTags());
    dispatch(getEvent());
  }, [dispatch]);

  return (
    <div className='search-container'>
      <Form onSubmit={()=> dispatch(submitEventsSearch())}>
        <Form.Input
        loading={isSearchLoading}
          icon={{ name:'sliders horizontal', link: true}}
          placeholder='Rechercher...'
          value={searchInput}
          onChange={(e)=> dispatch(changeEventsSearch(e.target.value))}
        />
      </Form>
      <Container
        className='search-container__container'
      >
        {
          searchResults.map((event) => {
            return (
              <SearchEventCard
                key={event.id}
                event={event}
              />
            );
          }
        )}
        <div className='search-container__container__error'>
        {
          hasSearchError &&
          <p>
            Aucun événement pour "{searchInput}"
          </p>
        }
        </div>
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