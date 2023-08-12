import { Box, Paper, Typography } from "@mui/material";
import { Component, Suspense } from "react"
import Silder from "./theme/silder";
import Dropdown from "./theme/dropdown";
import Colorpicker from "./theme/colorpicker";
import Fontpicker from "./theme/fontpicker";
import CreateCustomizer from "../functions/createCustomizer";

export default class StreamlabsCustomizer extends Component {
    state = {}

    componentDidMount() {
        (async () =>  {
            let customizer = await CreateCustomizer(this.props.data);
            this.setState({customizer: customizer});
        })();
    }

    render() {
        return (
            <div>
                <Paper elevation={2} style={{maxWidth: "100vw", width: "800px"}}>
                    <div style={{paddingTop: "10px", paddingBottom: "10px"}}>
                        <Typography variant="h6" sx={{m: 2}}>
                            {this.props.data.description.name}
                        </Typography>
                        <Box sx={{
                            m: 2,
                        }}>
                            {
                                this.state.customizer &&
                                <Suspense fallback={<div>Loading...</div>}>
                                    {this.state.customizer}
                                </Suspense>
                            }
                        </Box>
                    </div>
                </Paper>
            </div>
        )
    }
}