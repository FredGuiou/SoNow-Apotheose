// import FavNav from './FavNav';
// TODO: Add FavNav
import EventCardProfile from './EventCardProfile';

import "../styles/fav.scss";

// Import data en dur pour préparer la connexion API 
import events from '../data/eventsData';

import { Grid } from 'semantic-ui-react';

function Fav() {
  return (
    <div className="profile">
      {/* <UserCard /> */}
      <div class="ui column stackable aligned page grid" style={{backgroundColor: 'black'}}>
        <Grid  
            fluid
            columns={2}
          >
              {
              events.map((e) => (
                <Grid.Column
                  fluid
                  key={e.id}
                  >
                    <EventCardProfile
                      event={e}
                    />
                  </Grid.Column>
              ))
            }
        </Grid>
      </div>
    </div>
  );
}

export default Fav;