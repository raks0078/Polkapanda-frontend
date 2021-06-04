import React from 'react'
import "./AuctionCard.scss";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function AuctionCard() {
    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    return (
        <div className="auctionCard">
            <div className="header">
                <div className="profiles">
                </div>
                <IconButton aria-label="more Oprions">
                    <MoreHorizIcon onClick={handleClick} />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted 
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    
                >
                    <MenuItem onClick={handleClose}>New Bid</MenuItem>
                    <MenuItem onClick={handleClose}>Share</MenuItem>
                    <MenuItem onClick={handleClose}>Report</MenuItem>
                </Menu>
            </div>
            <div className="pic">
                <img src="https://lh3.googleusercontent.com/by-7QnPXhUxZrP6C2EZ-sSXd4J3wScankY0GAL_O4y0eVzq9nFZj6xU9SEHhyPgs99emP1RGzJiPWZkhSdt1S1rLB68XyeHygUmw=s250" alt="asda" />
                <div className="counter">
                    <h3>01h</h3>
                    <h3>13m</h3>
                    <h3>48s</h3>
                    <h3>left</h3>
                </div>
            </div>
            <div className="info">
                <h5>Decent Girl</h5>
                <p className="bid">Highest bid 1/1</p>
                <div className="eth">
                    <p>000.6wETH</p>
                    <div className="likes">
                        <FavoriteBorderIcon className="likeIcon" />
                        <p className="likesNumber">54</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuctionCard
