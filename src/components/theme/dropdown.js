import { FormControl, MenuItem, Paper, Select, Typography } from "@mui/material";
import { useEffect } from "react";

export default function Dropdown(props) {
    
    return (
        <div>
            <Paper elevation={2} style={{padding: "20px 20px 20px 20px"}}>
                <Typography id="input-slider" gutterBottom>
                    {props.data.label}
                </Typography>
                <FormControl fullWidth>
                    <Select
                        id="demo-simple-select"
                        defaultValue={props.data.value}
                    >
                        {Object.keys(props.data.options).map(i => {
                            return (
                                <MenuItem value={i}>
                                    {props.data.options[i]}
                                </MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            </Paper>
        </div>
    )
}