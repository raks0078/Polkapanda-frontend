import React from 'react'
import "./SellerCard.scss"
import Avatar from '@material-ui/core/Avatar';
import CheckIcon from '@material-ui/icons/Check';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    tick:{
        fontSize:'0.9rem',
        position:'absolute',
        top:'1px',
        left:'1px',
        color:'black',
    },
  }));

function SellerCard() {
    const classes = useStyles();

    return (
        <div className="sellerCard">
            <p className="number">1</p>
            <div className="profilePic">
            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/2.jpg" />
            <i class="fas fa-certificate">
            <CheckIcon className={classes.tick}  />
            </i>
            </div>
            <div className="info">
                <h3>Mani Grupa</h3>
                <p>13.3ETH</p>
            </div>
        </div>
    )
}

export default SellerCard
