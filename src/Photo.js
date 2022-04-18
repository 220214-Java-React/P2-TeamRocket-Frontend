import React from 'react';
import Imgix from "react-imgix";

const Photo = (props) => {

    const buildURL = imagePath =>
    `https://raw.githubusercontent.com/crouther/test/main/${imagePath}.jpg`;

    return( 
        <div className='gBox'><Imgix
                sizes="(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw"
                src={buildURL(props.url)}
                key={props.url}
                imgixParams={{
                    fit: "",
                    fm: "jpg"
                }}
                width="393"
                height="700"
            /><h4>{props.playerName}</h4></div>
            
    )
}

export default Photo;