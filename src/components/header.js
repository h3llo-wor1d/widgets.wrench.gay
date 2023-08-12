export default function Header(props) {
    return (
        <div style={{width: "100%", textAlign: "center", marginTop: "20px"}}>
            <img src="./assets/projectLogo.png" style={{maxWidth: "calc(100vw - 100px)", width: "1039px"}} alt="projectLogo" /><br/>
            <span>Home</span> | <span>Wiki</span> | <span>Tutorials</span> | <span>Widget Customizer</span>
        </div>
    )
}