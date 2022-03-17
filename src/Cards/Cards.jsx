import React, { Component } from "react";
import Card from "./CardUI";
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.png";

class Cards extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="Developer"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2} title="Coder"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3} title="Project"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;