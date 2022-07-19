import "../styles/userCard.scss";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import profile from "../images/profile.jpg";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import { color } from "@mui/system";

function UserCard() {
  return (
      <Box sx={{ width: '100%', height: 250, bgcolor: 'black' }}>

        <div className="usercard-avatar">

          <Avatar
            sx={{ width: 70, height: 70 }}
            alt="User Picture Profile" 
            src={profile}
          />

        </div>

        <p className="usercard__name">Romain P.</p>

        <Box sx={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'center',
            margin: '0 2.5em 0 0.75em',
            color: 'white'
            }}
        >
          <span className="usercard__stats-items">Events</span>
          <span className="usercard__stats-items">Followers</span>
          <span className="usercard__stats-items">Following</span>

        </Box>

        <Box sx={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'center',
            margin: '0 2.5em 0 0.75em'
            }}
        >
          <PersonAddOutlinedIcon className='messageIcon footer__nav__icons__item' sx={{ width: '30px', height: '30px', margin: '0 2.5em 0 0.75em'}} />
          <AddBoxOutlinedIcon className='messageIcon footer__nav__icons__item' sx={{ width: '30px', height: '30px', margin: '0 2.5em 0 0.75em'}} />
          <EventAvailableOutlinedIcon className='messageIcon footer__nav__icons__item' sx={{ width: '30px', height: '30px', margin: '0 2.5em 0 0.75em'}} />

        </Box>

      </Box>
  );
}

export default UserCard;