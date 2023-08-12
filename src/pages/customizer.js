import { Component } from "react";
import Header from "../components/header";
import { Box, Button } from "@mui/material";
import parseToWrenchLib from "../functions/loadStreamlabs";
import StreamlabsCustomizer from "../components/streamlabsCustomizer";
import { theme1 } from "../data/testThemes";
import ThemePreview from "../components/themePreview";
import { theme1Style } from "../data/outStyle";

function getBuffer(fileData) {
    return function(resolve) {
      var reader = new FileReader();
      reader.readAsArrayBuffer(fileData);
      reader.onload = function() {
        var arrayBuffer = reader.result
        var bytes = new Uint8Array(arrayBuffer);
        resolve(bytes);
      }
  }
}

export default class Customizer extends Component {
    handleSelect = async (e) => {
        let files = e.target.files;
        if (files.length > 0) {
            let f = new Blob([files[0]]);
            var data = await new Promise(getBuffer(f));
            await parseToWrenchLib(data);
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Box>
                    <div style={{textAlign: "center"}}>
                        Widget Preview
                    </div>
                    <div style={{
                        display: "flex", 
                        flexDirection: "row",
                        flexWrap: "wrap-reverse"
                    }}>
                        <StreamlabsCustomizer data={theme1.settings} />
                        <ThemePreview data={theme1Style} />
                    </div>
                    
                    <Button
                    variant="contained"
                    component="label"
                    sx={{m: 2}}
                    >
                        Import Streamlabs Theme
                        <input
                            type="file"
                            hidden
                            onChange={this.handleSelect}
                        />
                    </Button>
                </Box>
            </div>
        )
    }
}