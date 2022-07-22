import FeedEvent from './FeedEvent';
import "../styles/feed.scss";
// Import data en dur pour préparer la connexion API 
import events from '../data/eventsData';

import { Grid } from 'semantic-ui-react';

function Feed() {
  return (
    <div className="feed">
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
                    <FeedEvent
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
  
  export default Feed;