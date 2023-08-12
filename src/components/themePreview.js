import { Typography, Box } from "@mui/material";
import { Component, createRef, useRef, useState } from "react";
import loadStylesheet from "../functions/loadStylesheet";

export default class ThemePreview extends Component {
    state = {}
    chatbox = createRef();

    componentDidMount() {
        loadStylesheet(this.props.data);
        document.addEventListener("styleChanged", () => {
            console.log("test?")
            loadStylesheet(this.props.data);
        })
    }


    render() {
        return (
        <Box sx={{m: 2}}>
            <Typography variant="h6">
                Live Preview
            </Typography>
            <div ref={this.chatbox}>
                chatbox placeholder
            </div>
        </Box>
    )}
}