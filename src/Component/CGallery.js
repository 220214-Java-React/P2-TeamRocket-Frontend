import React, { Component } from "react";
import "../Style/Gallery.css";
import PhotoContainer from "./PhotoContainer";
import { BannerIMG } from "./BannerIMG";
import NavBar from "./NavBar";

class CGallery extends Component{
    constructor(){
        super();
        this.state = {photos: []};
    }

    componentDidMount(){

        fetch("http://localhost:8080/myuser",{
        method: "get",
        })

        .then(response => {

            if(!response.ok){throw Error("Error fetching all user array");}
            return response.json()

            .then(json => {this.setState({ photos: json});})

            .catch(err => {throw Error(err.message)});
        });
    }

    render() {
        return (
            <section>
                <NavBar />
                <BannerIMG />
                <PhotoContainer photos={this.state.photos}/>
            </section>
        )
    }
}

export default CGallery;
