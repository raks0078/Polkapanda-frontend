import React,  { useState } from 'react'
import "./childComponent.scss"
import AuctionCard from '../AuctionCard/AuctionCard';
import Button from '@material-ui/core/Button';

function Memes() {
    const [lists, setlists] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,1])
    const [visible, setvisible] = useState(5);

    const loadMore=()=>{

        setvisible(9+visible);
        console.log(visible);
    }

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

export default Memes
