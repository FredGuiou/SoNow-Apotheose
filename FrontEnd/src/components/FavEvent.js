import { Label } from 'semantic-ui-react';

import "../styles/favEvent.scss";

function FavEvent({ event }) {

  return (
      <div className='fav-event'>
        <div className="fav-event__content">
          <p className="fav-event__content__title">{event.title}</p>
          <Label key={event.tag[0].id}>
            {event.tag[0].emoji} {event.tag[0].name}
          </Label>
        </div>
        <img
          className="fav-event__img"
          src={event.media}
          alt={event.title}
        />
      </div>
  );
}

export default FavEvent;