import { Box } from "@mui/material";
import { Component } from "react";
import Header from "../components/header";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Box sx={{m:4 }}>
                    test
                </Box>
            </div>
        )
    }
}