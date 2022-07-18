import '../styles/App.scss';
import Authentification from './Authentification';
import CreateAccount from './CreateAccount';
import CreateEvent from './CreateEvent';
import FeedEvent from './FeedEvent';
import EventCardPrimary from './EventCardPrimary';
import EventCardSecondary from './EventCardSecondary';
import EventCardsSecondary from './EventCardsSecondary';
import FeedEvents from './FeedEvents';
import Fav from './Fav';
import Feed from './Feed';
import Filters from './Filters';
import FriendsList from './FriendsList';
import Nav from './Nav';
import Profile from './Profile';
import Search from './Search';
import UserCard from './UserCard';
import Error404 from './Error404';

function App() {
  return (
    <div className="App">
      <h1>Welcome to SoNow !</h1>
      <Authentification />
      <CreateAccount />
      <CreateEvent />
      <Feed />
      <FeedEvents />
      <FeedEvent />
      <EventCardPrimary />
      <EventCardsSecondary />
      <EventCardSecondary />
      <Fav />
      <Filters />
      <FriendsList />
      <FriendsList />
      <Nav />
      <Profile />
      <Search />
      <UserCard />
      <Error404 />
    </div>
  );
}

export default App;
