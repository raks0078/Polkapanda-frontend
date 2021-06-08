import React,  { useState } from 'react'
import "./childComponent.scss"
import AuctionCard from '../AuctionCard/AuctionCard';
import Button from '@material-ui/core/Button';

function Art() {
    const [lists, setlists] = useState([1,2,3,4,5,6,7,8,9,10])
    const [visible, setvisible] = useState(3);

    const loadMore=()=>{

        setvisible(3+visible);
        console.log(visible);
    }

    return (
        <div className="childComponent">
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

export default Art
