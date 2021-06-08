import React, { useEffect, useState } from 'react'
import "./ExploreAll.scss";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
} from "react-router-dom";
import TuneIcon from '@material-ui/icons/Tune';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import StarIcon from '@material-ui/icons/Star';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import AttachmentIcon from '@material-ui/icons/Attachment';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

import Button from '@material-ui/core/Button';


import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import All from '../Components/ChildComponents/All';
import Art from '../Components/ChildComponents/Art';
import Defi from '../Components/ChildComponents/Defi';
import Photography from '../Components/ChildComponents/Photography';
import Metaverse from '../Components/ChildComponents/Metaverse';
import Music from '../Components/ChildComponents/Music';
import Domain from '../Components/ChildComponents/Domain';
import Memes from '../Components/ChildComponents/Memes';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
    },
    icon:{
        marginRight:'0.6rem',
    },
    buttons:{
        display:'grid',
        gridTemplateColumns:'repeat(2,1fr)',
        width:'90%',
        margin:'auto',
        gap:'1rem',
    },
    accordionDetail:{
        backgroundColor:'#fff5fd',
    },
    accordionSummary:{
        borderBottom:'1px solid #a8a8a8',
        backgroundColor:'#FFFFFF',
    },
    buyNowButton:{
        width:'320px',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 300,
        marginBottom:'25px',
    },
}));

function ExploreAll() {
    const classes = useStyles();
    const match = useRouteMatch();

    // useStates....................................
    const [apply, setapply] = useState(true);
    const [min, setmin] = useState(0);
    const [max, setmax] = useState(0);
    const [EthereumCheckbox, setCheckbox] = useState(false);
    const [MaticCheckbox, setMaticCheckbox] = useState(false);
    const [Klaytn, setKlaytn] = useState(false)

    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });

    const catego=useParams();
    useEffect(() => {
        console.log(catego.categoryd);
     }, [])

    // functions..................................
    const handleChange = (event) => {
        const name = event.target.name;
        setState({
          ...state,
          [name]: event.target.value,
        });
    };
    
    const maxmin=(e)=>{
        if(e.target.id=='min')
            setmin(e.target.value);
        else
            setmax(e.target.value);
        
        if(min==0 && max==0)
            setapply(false);
        else
            setapply(true);

        console.log(apply);    
        console.log("min",min);    
        console.log("max",max);    
    }

    

    return (
        <div className="explorePage">
            <div className="filters">
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={classes.accordionSummary}
                    >
                    <Typography className={classes.heading}> <StarIcon className={classes.icon} /> <h3>Status</h3></Typography>
                    </AccordionSummary>
                    <AccordionDetails  className={classes.accordionDetail}>
                    <Typography className={classes.buttons}>
                    <Button variant="outlined">Buy Now</Button>
                    <Button variant="outlined">on Auction</Button>
                    <Button variant="outlined">New</Button>
                    <Button variant="outlined">Has Offers</Button>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                
                
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    className={classes.accordionSummary}
                    >
                    <Typography className={classes.heading}> <AttachMoneyIcon className={classes.icon} /> <h3>Price</h3></Typography>
                    </AccordionSummary>
                    <AccordionDetails  className={classes.accordionDetail}>
                    <Typography>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <Select
                        native
                        value={state.age}
                        onChange={handleChange}
                        defaultValue={30}
                        inputProps={{
                            name: 'age',
                            id: 'outlined-age-native-simple',
                        }}
                        >
                        <option value='USD'>United States Dollar (USD)</option>
                        <option value='ETH'>Ether (ETH)</option>
                        </Select>
                    </FormControl>
                    <div className="minmax" style={{display:'flex', gap:'30px', marginBottom:'10px'}}>
                    <TextField
                        id="min"
                        label="Min"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={maxmin}
                        variant="outlined"
                    />
                    <p style={{fontSize:'1.7rem',fontWeight:'lighter'}}>to</p>
                    <TextField
                        id="max"
                        label="Max"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={maxmin}
                        variant="outlined"
                    />
                    </div>
                    <Button variant="outlined" color="primary" href="#outlined-buttons" disabled={apply}>
                        Apply
                    </Button>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    className={classes.accordionSummary}
                    >
                    <Typography className={classes.heading}> <ViewComfyIcon className={classes.icon} /> <h3>Collections</h3></Typography>
                    </AccordionSummary>
                    <AccordionDetails  className={classes.accordionDetail}>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                
                
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    className={classes.accordionSummary}
                    id="panel2a-header"
                    >
                    <Typography className={classes.heading}> <AttachmentIcon className={classes.icon} /> <h3>Chains</h3></Typography>
                    </AccordionSummary>
                    <AccordionDetails  className={classes.accordionDetail}>
                    <Typography style={{display:'flex', flexDirection:'column'}}>
                    <FormControlLabel
                        control={<Checkbox checked={EthereumCheckbox} 
                        color="primary"
                         onClick={()=>setCheckbox(!EthereumCheckbox)} name="EthereumCheckbox" />}
                        label="Ethereum"  
                    />
                    <FormControlLabel
                        control={<Checkbox checked={MaticCheckbox} 
                        color="primary" 
                        onClick={()=>setMaticCheckbox(!MaticCheckbox)} name="MaticCheckbox" />}
                        label="Matic"  
                    />
                    <FormControlLabel
                        control={<Checkbox checked={Klaytn} 
                        color="primary" 
                        onClick={()=>setKlaytn(!Klaytn)} name="Klaytn" />}
                        label="Klaytn"  
                    />
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                
                
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    className={classes.accordionSummary}
                    id="panel2a-header"
                    >
                    <Typography className={classes.heading}> <LocalOfferIcon className={classes.icon} /> <h3>On Sale In</h3></Typography>
                    </AccordionSummary>
                    <AccordionDetails  className={classes.accordionDetail}>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className="navigations">
            <div className="quickTabs">
                <div className="tabs">
                    <ul className="scrollBar">
                      
                      <li className="filter">
                        <TuneIcon />
                        <Link to="/exploreAll/art"><h5>Art</h5></Link>
                        
                      </li>
                      <li className="filter">
                        <TuneIcon />
                        <Link to="/exploreAll/Photography"><h5>Photography</h5></Link>
                        
                      </li>
                      <li className="filter">
                        <TuneIcon />
                        <Link to="/exploreAll/Games"><h5>Games</h5></Link>
                      </li>
                     
                      <li className="filter">
                        <TuneIcon />
                        <Link to="/exploreAll/Metaverses"><h5>Metaverses</h5></Link>
                      </li>
                      <li className="filter">
                        <TuneIcon />
                        <Link to="/exploreAll/Music" ><h5>Music</h5></Link>
                        
                      </li>
                      <li className="filter">
                        <TuneIcon />
                        <Link to="/exploreAll/Domain" ><h5>Domain</h5></Link>
                        
                      </li>
                      <li className="filter">
                        <TuneIcon />
                        <Link to="/exploreAll/DeFi" ><h5>DeFi</h5></Link>
                      </li>

                      <li className="filter">
                        <TuneIcon />
                        <Link to="/exploreAll/Memes"><h5>Memes</h5></Link>
                      </li>
                    </ul>
                </div>
                <div className="cards">
                <Switch>
                    <Route exact path="/exploreAll">
                      <Art />
                    </Route>
                    <Route exact path="/exploreAll/art">
                      <Art />
                    </Route>
                    <Route path="/exploreAll/DeFi">
                      <Defi />
                    </Route>
                    <Route path="/exploreAll/Photography">
                      <Photography />
                    </Route>
                    <Route path="/exploreAll/Metaverses">
                      <Metaverse />
                    </Route>
                    <Route path="/exploreAll/Music">
                      <Music />
                    </Route>
                    <Route path="/exploreAll/Domain">
                      <Domain />
                    </Route>
                    <Route path="/exploreAll/Memes">
                      <Memes />
                    </Route>
                  </Switch>
                </div>
                  
                </div>
            </div>
        </div>
    )
}

export default ExploreAll
