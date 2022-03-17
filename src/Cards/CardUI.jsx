import React from "react";
import "./card-style.css"

const Card = ({imgsrc,title}) => {
    return (
        <div className="card">
            <div className="overflow">
                <img src={imgsrc} alt="Image 4" className="card-img" />
            </div>
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo expedita architecto, incidunt doloremque quam perspiciatis. Officiis iste architecto aliquam alias.
                </p>
                <a href="#" className="btn btn-outline-success">Go Anywhere</a>
            </div>
        </div>
    );
}

export default Card;