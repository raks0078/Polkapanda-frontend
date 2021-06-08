import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import "./All.scss"
import AuctionCard from '../AuctionCard/AuctionCard';
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router';

function All({match}) {
    const [lists, setlists] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,1])
    const [visible, setvisible] = useState(9);
    const categor=useParams();
    const loadMore=(props)=>{

        setvisible(9+visible);
        // console.log(visible);
    }

    useEffect(() => {
       console.log(categor);
    },)
    return (
        <div className="childComponent" >
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
