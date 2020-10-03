import React from 'react';
import basketIcon from "../basket.svg"

export default class NavBar extends React.Component {
    render() {
        const basketStyle = {
            height:"30px",
            margin: "0 auto",
            display: "block",
            position: "absolute",
            left: "calc((100% - 100px) / 2)",
            zIndex: "100000",
        };
        return (
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">
                    <a href="/" style={{color:"#2B2D2F"}}>I'm a NavBar</a></span>
                <span className="navbar" style={{ margin: "right"}}>
                    <img
                        id="basket-logo"
                        src={basketIcon}
                        alt="Basket"
                        height="30"
                        style={basketStyle}
                    />
                    <p  style={{position:"relative", top:"10px", right:"10px"}}>{this.props.totalItems()}</p>
                </span>
            </nav>
        )
    };
}