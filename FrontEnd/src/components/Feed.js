import { Grid } from 'semantic-ui-react';

import FeedEvent from './FeedEvent';
import "../styles/feed.scss";
import events from '../data/eventsData';

function Feed() {
  return (
    <div className="feed">
      <div class="ui column stackable aligned page grid" style={{backgroundColor: 'black'}}>
        <Grid  columns={2} >
            {
              events.map((e) => (
                  <Grid.Column
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