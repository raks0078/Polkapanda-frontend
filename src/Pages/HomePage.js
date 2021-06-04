import React from 'react'
import MainCard from '../Components/MainCards/MainCard'
import "./homePage.scss"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

// Material UI imports............................
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import SellerCard from '../Components/SellersCard/SellerCard';
import AuctionCard from '../Components/AuctionCard/AuctionCard';

// Material Icons
import TuneIcon from '@material-ui/icons/Tune';
import All from '../Components/ChildComponents/All';
import Art from '../Components/ChildComponents/Art';
import Defi from '../Components/ChildComponents/Defi';
import Domain from '../Components/ChildComponents/Domain';
import Games from '../Components/ChildComponents/Games';
import Metaverse from '../Components/ChildComponents/Metaverse';
import Photography from '../Components/ChildComponents/Photography';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    select:{
      border:'0px',
      outline:'none',
      borderBottom:'none',
      fontSize:'1.5rem',
      color:"#0066FF",
      fontWeight:'bolder',
    },
  }));


function HomePage() {
  const classes = useStyles();

  const match = useRouteMatch();

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

    return (
        <div className="homePage">
            <div className="container">
              <div className="mainCards">
                <MainCard />
                <MainCard />
                <MainCard />
                <MainCard />
                <MainCard />
                <MainCard />
                <MainCard />
                <MainCard />
                <MainCard />
                <MainCard />
                <MainCard />
              </div>

              {/* Top Sellers and Buyers */}
              <div className="topSellers">
                  <div className="heading">
                      <span><h2>Top</h2></span>
                      <span>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <NativeSelect
                            defaultValue={30}
                            inputProps={{
                                name: 'name',
                                id: 'buyer_seller',
                            }}
                            className={classes.select}

                            >
                            <option value={'buyers'}>buyers</option>
                            <option value={'sellers'}>Sellers</option>
                            </NativeSelect>
                        </FormControl>
                      </span>
                      <span><h2>in</h2></span>
                      <span>
                      <FormControl className={classes.formControl} variant="outlined">
                          <NativeSelect
                          variant="filled"
                          defaultValue={30}
                          inputProps={{
                              name: 'name',
                              id: 'days',
                          }}
                          className={classes.select}
                          >
                          <option value={1}>1 Day</option>
                          <option value={7}>7 Day</option>
                          <option value={30}>30 Day</option>
                          </NativeSelect>
                      </FormControl>
                      </span>
                  </div> 

                  <div className="sellersCards">
                    <SellerCard />
                    <SellerCard />
                    <SellerCard />
                    <SellerCard />
                    <SellerCard />
                    <SellerCard />
                    <SellerCard />
                    <SellerCard />
                    <SellerCard />
                    <SellerCard />
                    <SellerCard />
                    <SellerCard />
                    <SellerCard />
                    <SellerCard />
                    <SellerCard />
                    <SellerCard />
                    <SellerCard />
                    <SellerCard />
                    <SellerCard />
                   
                  </div>   
                </div>

                {/* Live Auctions */}
                <div className="LiveAuctions">
                  <h2>Live Auctions</h2>
                  <div className="auctionsCards">
                    <AuctionCard />
                    <AuctionCard />
                    <AuctionCard />
                    <AuctionCard />
                    <AuctionCard />
                  </div>
                </div>

                <hr />
                {/* Quick Tabs */}
                <div className="quickTabs">
                  <div className="tabs">
                    <h2>Explore</h2>
                    <ul className="scrollBar">

                      <li className="filter">
                      <Link to="/collections/art"><h5>All</h5></Link>
                      </li>
                      
                      <li className="filter">
                        <TuneIcon />
                        <Link to='/collections/art'><h5>Art</h5></Link>
                        
                      </li>
                      <li className="filter">
                        <TuneIcon />
                        <Link to="/?category=photo"><h5>Photography</h5></Link>
                        
                      </li>
                      <li className="filter">
                        <TuneIcon />
                        <Link to="/Games"><h5>Games</h5></Link>
                        
                      </li>
                     
                      <li className="filter">
                        <TuneIcon />
                        <Link to="/Metaverses"><h5>Metaverses</h5></Link>
                        
                      </li>
                      <li className="filter">
                        <TuneIcon />
                        <Link to="/Music"><h5>Music</h5></Link>
                        
                      </li>
                      <li className="filter">
                        <TuneIcon />
                        <Link to="/Domain"><h5>Domain</h5></Link>
                        
                      </li>
                      <li className="filter">
                        <TuneIcon />
                        <Link to="/DeFi"><h5>DeFi</h5></Link>
                        
                      </li>
                      <li className="filter">
                        <TuneIcon />
                        <Link to="/Memes"><h5>Memes</h5></Link>
                        
                      </li>
                    </ul>
                    <div className="filter rightMostTab">
                      <TuneIcon />
                      <h5 className="filtering">Filter & Sort</h5>
                    </div>
                  </div>
                  <Switch>
                    <Route exact path="/">
                      <All />
                    </Route>
                    <Route exact path="/collections/:category">
                      <All />
                    </Route>
                    <Route path="/collections/art">
                     <Art />
                    </Route>
                    <Route path="/defi">
                     <Defi />
                    </Route>
                    <Route path="/domain">
                     <Domain />
                    </Route>
                    <Route path="/games">
                     <Games />
                    </Route>
                    <Route path="/metaverse">
                     <Metaverse />
                    </Route>
                    <Route path="/?category=photo">
                     <Photography />
                    </Route>
                  </Switch>
                </div>
            </div>
        </div>
    )
}

export default HomePage
