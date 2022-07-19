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
    <div className='footer'>
    <div className='footer__nav'>
      <img className='footer__nav__logo' src={logo} alt='sonow logo' />
      <div className='footer__nav__icons'>
        <HomeOutlinedIcon className='homeIcon footer__nav__icons__item' sx={{ 'margin': '0px' }} />
        <StarBorderOutlinedIcon className='starIcon footer__nav__icons__item' sx={{ 'margin': '0px' }} />
        <SearchOutlinedIcon className='searchIcon footer__nav__icons__item' sx={{ 'margin': '0px' }} />
        <ChatBubbleOutlineOutlinedIcon className='messageIcon footer__nav__icons__item' sx={{ 'margin': '0px' }} />
        <PermIdentityOutlinedIcon className='profileIcon footer__nav__icons__item'sx={{ 'margin': '0px' }} />
        </div>
      <TextField 
        className='footer__search'
        id='outlined-basic'
        placeholder='Chercher un évènement'
        variant='outlined'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchOutlinedIcon />
            </InputAdornment>
          ), 
          style: { fontSize: '0.7rem' }
        }}
        sx={{
        'color': 'white',
        'border': 'none',
        'height' : '30px',
        'marginRight': '2rem',
        }}
      />
    </div>
  </div>
  );
} 
export default Nav;