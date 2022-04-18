import React from 'react';
import Imgix from "react-imgix";
import Photo from "./Photo";

const PhotoContainer = props => {

    const displayPhotos = () => {
        return props.photos.map(photo => {
            return (
                <>
                <Photo url = {photo.images} playerName = {photo.usr}/>
                </>
            );
        });
    };

    return (<div className="gallery">{displayPhotos()}</div>)
}

export default PhotoContainer;