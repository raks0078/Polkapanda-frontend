import React from 'react';
import "./cardInfo.scss";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import LooksIcon from '@material-ui/icons/Looks';

import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';

import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: '100%',
      marginTop:'1rem',
      marginBottom:'9rem',
    },
    paper:{
        width: '460px',
        height: '150px',
        position:'absolute',
        bottom:'0rem',
    },
    tabPanel:{
        marginBottom:'6rem',
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
      },
  }));


function CardInfo() {
    
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className="cardInfo">
            <div className="image">
                <img src="https://lh3.googleusercontent.com/P3NfTvnX9E0uqHSQUeRQbunyNhiRj7xlKQ3OW6a7cHwyhtiBXN9eRE8_SiSN8P7AJFLpQDlYwuCuWAj3ijPLLjHnmb_Og0MR30nKhw=s250" alt="" />
            </div>
            <div className="infoContainer">
                <div className="infoWrapper">
                    <div className="infoHeader">
                        <h3>Gain Bitcoin</h3>
                        <div className="likes">
                            <FavoriteBorderIcon />
                            <p>27</p>
                        </div>
                        <div className="more">
                            <IconButton aria-label="delete">
                                <MoreHorizIcon />
                            </IconButton>
                        </div>
                    </div>
                    <div className="subHeader">
                        <p className="availables"> <span className="green">From</span> <span>0.072 ETH</span> <span className="green">5 0f 7 available</span></p>
                        <div className="categoryType">
                            <LooksIcon />
                            <h5>Art</h5>
                        </div>
                        <p>extra Info</p>
                    </div>

                    <div className="names">
                        <div className="creator namebox">
                            <h4>Creator</h4>
                            <div className="info">
                                <Avatar alt="Remy Sharp" src="https://images.rarible.com/?fit=outsize&n=-1&url=https%3A%2F%2Fipfs.rarible.com%2Fipfs%2FQmfM8b7prN4Bh8ujAWHidko5S91428i7mZLSBVErJ9jQvR&w=100" />
                                <h3>Airat Shakiryanov</h3>
                            </div>
                        </div>
                        <div className="collection namebox">
                            <h4>Rarible</h4>
                            <div className="info">
                                <Avatar className={classes.purple}></Avatar>
                                <h3>Airat Shakiryanov</h3>
                            </div>
                        </div>
                    </div>
                    <div className="saleToCreator">
                        <p><span>10%</span> of sale will go to creator</p>
                    </div>
                    <div className={classes.root}>
                        <AppBar position="static" color="default">
                            <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="fullWidth"
                            aria-label="tabs"
                            >
                            <Tab label="Owner" {...a11yProps(0)} />
                            <Tab label="Bids" {...a11yProps(1)} />
                            <Tab label="Details" {...a11yProps(2)} />
                            <Tab label="History" {...a11yProps(3)} />
                            </Tabs>
                        </AppBar>
                        <SwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={value}
                            onChangeIndex={handleChangeIndex}
                        >
                            <TabPanel value={value} index={0} dir={theme.direction}>
                            Item One
                            </TabPanel>
                            <TabPanel value={value} index={1} dir={theme.direction} >
                            Item Two
                            </TabPanel>
                            <TabPanel value={value} index={2} dir={theme.direction} >
                            Item Three
                            </TabPanel>
                            <TabPanel value={value} index={3} dir={theme.direction} >
                            Item Four
                            </TabPanel>
                        </SwipeableViews>
                    </div>
                    <Paper className={classes.paper}>
                        <div className="bidHeader">
                            <Avatar alt="Remy Sharp" src="https://images.rarible.com/?fit=outsize&n=-1&url=https%3A%2F%2Fipfs.rarible.com%2Fipfs%2FQmfM8b7prN4Bh8ujAWHidko5S91428i7mZLSBVErJ9jQvR&w=100" />
                            <div className="bidInfo">
                                <h3>0.01 wETH$25.16 for 1 edition</h3>
                                <p>Highest bid by iPelminimal</p>
                            </div>
                        </div>
                        <div className="buttons">
                            <div className="buy">
                                Buy for 0.055 ETH
                            </div>
                            <div className="bid">
                                Place a bid
                            </div>
                        </div>
                    </Paper>
                </div>
                
            </div>
        </div>
    )
}

export default CardInfo
