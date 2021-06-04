import { Grid } from '@material-ui/core'
import React, { useState } from 'react'
import "./ChildComponent.scss"
import AuctionCard from '../AuctionCard/AuctionCard';
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router';

function All() {
    const [lists, setlists] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,1])
    const [visible, setvisible] = useState(9);

    const loadMore=()=>{

        setvisible(9+visible);
        console.log(visible);
    }
    const {category}=useParams();

    return (
        <div className="childComponent" >
            {category && (<h1>working</h1>)}
            <div className="cards" >
            {lists.slice(0,visible).map((item,index)=> (
                <div key={index}>
                    <AuctionCard />                   
                </div>
            ))}
            </div>
            <Button variant="contained" color="primary" onClick={loadMore} >
                Load More
            </Button>
        </div>
    )
}

export default All
