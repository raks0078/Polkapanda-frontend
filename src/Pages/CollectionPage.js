import React, {useEffect} from 'react'
import "./collectionPage.scss";
import { useParams } from 'react-router';

function CollectionPage() {
    const categoryType=useParams();

    useEffect(() => {
        console.log(categoryType);
     },)

    return (
        <div className="collection">
            <div className="image">
                <img src="https://images.unsplash.com/photo-1528492501711-867fd2c44bb5?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="" />
            </div>
            <div className="collectionInfo">
                <h1>Explore {categoryType.categoryd}</h1>
                {categoryType.categoryd=="Art" && (<p>An online community of makers, developers, and traders is pushing the art world into new territory. It all started with CryptoPunks,since.</p>)}
                {categoryType.categoryd=="Photography" && (<p>An online community of makers, developers, and traders is pushing the art world into new territory. It all started with .</p>)}
                
                {categoryType.categoryd=="Games" && (<p>Sporting brands look after some of the most valuable intellectual property on the planet, and companies like Sorare are <br/> 
                selling it in the form of digital trading cards right here on our marketplace. We've also got Formula 1 NFTs from <br/>
                Animoca Brands and anticipate a surge of interest from global sports teams looking to tokenize and distribute their <br/>
                collectibles over the coming years. Browse, buy, and sell non-fungible tokens from the worlds of golf, football, racing, <br/> and more.</p>)}
            </div>
        </div>
    )
}

export default CollectionPage
