import React from 'react'

import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    image:{
        width:"50px",
    },
    navBar:{
      backgroundColor:"#FFFFFF",
    },
    navOptions:{
        color:"#0E0E0E",
        cursor:'pointer',
    },
    grow: {
      flexGrow: 1,
    },
    buttonStyle:{
      fontSize:'1rem',
      color:'#1D1D1E',
      fontWeight:'bold',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      color:'#0E0E0E',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: "#E6EEF4",
      color:'#B5BABF',
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
        border:'1px solid black',
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '200px',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color:'#8B949C'
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(2, 1, 2, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '50ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        width: '50ch',
        justifyContent:"space-Between",
        alignItems:"center",
      },
    },
    sectionMobile: {
      display: 'flex',
      color:'#272C34',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }));

  // Functions starts here.......................................
function Header() {

    const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(false);
  const [marketPlaceAnchor, setmarketPlaceOptionsAnchor] = React.useState(false);
  const [Stats, setStats] = React.useState(false);
  const [Resources, setResources] = React.useState(false);

  // const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  // const ismarketPlaceMenuOpen = Boolean(marketPlaceAnchor);
  // const isStatsMenuOpen = Boolean(Stats);
  // const isResourcesMenuOpen = Boolean(Resources);


  // all opening functions....................
  const handleProfileMenuOpen = (event) => {
    console.log('before anchorEl',anchorEl);
    console.log('before marketPlaceAnchor',marketPlaceAnchor);
    setAnchorEl(true);
    setmarketPlaceOptionsAnchor(false);
    setStats(false);
    setResources(false);
    console.log('after anchorEl',anchorEl);
    console.log('after marketPlaceAnchor',marketPlaceAnchor);
  };


  const handleMarketPlaceMenuOpen = (event) => {
    console.log('before anchorEl',anchorEl);
    console.log('before marketPlaceAnchor',marketPlaceAnchor);
    setmarketPlaceOptionsAnchor(true);
    setAnchorEl(false);
    setStats(false);
    setResources(false);
    console.log('after anchorEl',anchorEl);
    console.log('after marketPlaceAnchor',marketPlaceAnchor);
  };

  const handlestatsMenuOpen = (event) => {
    setStats(true);
    setAnchorEl(false);
    setmarketPlaceOptionsAnchor(false);
    setResources(false);

  };

  const handleResourcesMenuOpen = (event) => {
    setResources(true);
    setAnchorEl(false);
    setmarketPlaceOptionsAnchor(false);
    setStats(false);

  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


  // All closing funtions...........
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(false);
  };

  const handleMenuClose = () => {
    setAnchorEl(false);
    setmarketPlaceOptionsAnchor(false);
    setStats(false);
    setResources(false);
    handleMobileMenuClose();
  };

  

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorPosition={{ left:'1050', top:'64'}}
      anchorReference='anchorPosition'
      id={menuId}
      keepMounted
      open={anchorEl}
      onClose={handleMenuClose}
    //   className={classes.DesktopDropDown}
    >
      <MenuItem onClick={handleMenuClose}>My Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My Collections</MenuItem>
      <MenuItem onClick={handleMenuClose}>My Favorites</MenuItem>
      <MenuItem onClick={handleMenuClose}>My Account Setting</MenuItem>
    </Menu>
  );

  const marketPlaceOptions = 'Market Palce Options';
  const marketPalceMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorPosition={{ left:'830', top:'64'}}
      anchorReference='anchorPosition'
      id={marketPlaceOptions}
      keepMounted
      open={marketPlaceAnchor}
      onClose={handleMenuClose}
    //   className={classes.DesktopDropDown}
    >
      <MenuItem onClick={handleMenuClose}><Link to="/exploreAll">Explore All</Link></MenuItem>
      <MenuItem onClick={handleMenuClose}>Art</MenuItem>
      <MenuItem onClick={handleMenuClose}>Photography</MenuItem>
      <MenuItem onClick={handleMenuClose}>Games</MenuItem>
      <MenuItem onClick={handleMenuClose}>Metaverse</MenuItem>
      <MenuItem onClick={handleMenuClose}>Music</MenuItem>
      <MenuItem onClick={handleMenuClose}>Domains</MenuItem>
      <MenuItem onClick={handleMenuClose}>DeFi</MenuItem>
      <MenuItem onClick={handleMenuClose}>Memes</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleMarketPlaceMenuOpen}>
        <p>MarketPalce</p>
      </MenuItem>
      <MenuItem>
        <p>Stats</p>
      </MenuItem>
      <MenuItem>
        <p>Resources</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

    return (
        <div className={classes.grow}>
      <AppBar position="static" className={classes.navBar}>
        <Toolbar>
        <Link to="/">
        <img src="https://opensea.io/static/images/logos/opensea-logo.png" alt="OpenSea" className={classes.image} />
        </Link>
          <Typography className={classes.title} variant="h5" noWrap>
            OpenSea
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search items, collections and accounts"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          <Typography className={classes.navOptions} variant="h6" noWrap onClick={handleMarketPlaceMenuOpen}>
          <Button color="primary" className={classes.buttonStyle}>MarketPalce</Button>
          </Typography>
            <Typography className={classes.navOptions} variant="h6" noWrap>
          <Button color="primary" className={classes.buttonStyle}>Stats</Button>
          </Typography>
          <Typography className={classes.navOptions} variant="h6" noWrap>
          <Button color="primary" className={classes.buttonStyle}>Resources</Button>
          </Typography>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="#707A83"
              // onMouseOver={handleProfileMenuOpen}
            >
              <AccountCircle />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="#707A83"
            >
              <AccountBalanceWalletIcon />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="#272C34"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {marketPalceMenu}
    </div>
    )
}

export default Header
