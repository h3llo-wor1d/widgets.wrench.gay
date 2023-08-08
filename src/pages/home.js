import { Component } from "react";

export default class Home extends Component {
    render() {
        return (
            <div>
                <div style={{width: "100%", textAlign: "center", marginTop: "20px"}}>
                    <img src="./assets/projectLogo.png" style={{maxWidth: "calc(100vw - 100px)", width: "1039px"}} alt="projectLogo" /><br/>
                    <span>Home</span> | <span>Wiki</span> | <span>Tutorials</span> | <span>Source Code</span>
                </div>
            </div>
        )
    }
}