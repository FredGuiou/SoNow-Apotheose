import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';

import '../styles/nav.scss';
import logo from '../images/logo.png';

function Nav() {
  return (
    <div className='navigation'>
    <div className='container'>
      <img className='logo' src={logo} alt='sonow logo' />
      <HomeOutlinedIcon className='homeIcon'/>
      <StarBorderOutlinedIcon className='starIcon'/>
      <SearchOutlinedIcon className='searchIcon'/>
      <ChatBubbleOutlineOutlinedIcon className='messageIcon'/>
      <PermIdentityOutlinedIcon className='profileIcon'/>
      <TextField 
        className='search'
        id='outlined-basic'
        placeholder='Chercher un évènement'
        variant='outlined'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchOutlinedIcon />
            </InputAdornment>
          ),
        }}
        sx={{
        'background-color': 'white',
        'border': 'none'
        }}
      />
      
    </div>
  </div>
  );
} 
export default Nav;