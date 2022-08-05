import { useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import ProtectedRoute from './ProtectedRoute';
import { Form, Container } from 'semantic-ui-react';

import SearchEventCard from './SearchEventCard';
import SearchCategories from './SearchCategories';

import { getTags, changeEventsSearch, submitEventsSearch, removeSearchError } from '../store/actions';

import '../styles/search.scss';

function Search() {

  const dispatch = useDispatch();

  const {
    isSearchLoading,
    searchInput,
    searchResults,
    hasSearchError,
  } = useSelector((state) => state.events);
  const event = useSelector((state) => state.event);

  const tags = useSelector((state) => state.tags.list) || [];

  useEffect(() => {
    dispatch(getTags());
  }, [dispatch]);

  return (
    <div className='search-container'>
      <Form onSubmit={()=> {if (searchInput !== '') {dispatch(submitEventsSearch())}}}>
        <Form.Input
        loading={isSearchLoading}
          icon={{ name:'sliders horizontal', link: true}}
          placeholder='Rechercher...'
          value={searchInput}
          onChange={(e)=> {
            dispatch(changeEventsSearch(e.target.value))
            if (e.target.value === '') {
              dispatch(removeSearchError());
            }
          }}
        />
      </Form>
      <Container
        className='search-container__container'
      >
        {
          (searchResults.length > 0 && searchInput !== '')
          &&
          searchResults.map((e) => {
            return (
              <SearchEventCard
                key={e.id}
                event={e}
              />
            );
          })
        } 
        {
          hasSearchError && searchInput !== '' 
          &&
          <div className='search-container__container__error'>
            <p> Aucun événement pour "{searchInput}"</p>
          </div>
        }
        {
          (searchResults.length === 0  || searchInput === '') 
          &&
          <>
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
                margin: '0 auto',
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
          </>
        }
      </Container>
    </div>
  );
}

export default ProtectedRoute(Search);