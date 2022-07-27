import ProtectedRoute from './ProtectedRoute';

import '../styles/search.scss';

function Search() {
  return (
    <div className='search'>Search</div>
  );
}

export default ProtectedRoute(Search);