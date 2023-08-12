import { Typography, Button, Paper } from "@mui/material";
import { useEffect } from "react";

export default function Fontpicker(props) {
    
    return (
        <div>
            
            <Paper elevation={2} style={{padding: "20px 20px 20px 20px"}}>
                <Typography id="input-slider" gutterBottom>
                    {props.data.label}
                </Typography>
                <Typography style={{
                    marginBottom: "12px"
                }}>
                    {/* Todo: value should actually be the font it is */}
                    {props.data.value}
                </Typography>
                <Button
                    variant="contained"
                    component="label"
                >
                    Import Font File
                    <input
                        type="file"
                        hidden
                    />
                </Button>
            </Paper>
            
        </div>
    )
}