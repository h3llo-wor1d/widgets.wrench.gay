import { Paper, Slider, Typography } from "@mui/material";
import { useEffect } from "react";

export default function Silder(props) {
    
    return (
        <div>
            <Paper elevation={2} style={{padding: "20px 20px 20px 20px"}}>
                <Typography id="input-slider" gutterBottom>
                    {props.data.label}
                </Typography>
                <Slider
                    defaultValue={props.data.value}
                    valueLabelDisplay="auto"
                    step={props.data.steps}
                    marks
                    min={props.data.min}
                    max={props.data.max}
                />
            </Paper>
        </div>
    )
}