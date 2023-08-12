import { Paper, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Colorpicker(props) {
    const [color, setColor] = useState(props.data.value.split("#")[1].length === 6 ?
    props.data.value : props.data.value.endsWith("00") ?
    props.data.value.split("00")[0] : "#FF0000");

    const onColorChange = (e) => {
        setColor(e.target.value);
    }

    return (
        <div>
            <Paper elevation={2} style={{padding: "20px 20px 20px 20px"}}>
                <Typography id="input-slider" gutterBottom>
                    {props.data.label}
                </Typography>
                <div style={{
                    display: "flex", 
                    flexDirection: "row",
                    columnGap: "15px"
                }}
                >
                    <div style={{width: "30px", position: "relative"}}>
                    <input 
                        className="colorPicker"
                        type={"color"} 
                        onChange={onColorChange}
                        value={color}
                        style={{
                            position: "absolute",
                            top: "50%",
                            transform: "translateY(-50%)"
                        }}
                    />
                    </div>
                    
                    <TextField id="standard-basic" 
                        label="Color" 
                        variant="standard" 
                        value={color} 
                        onChange={onColorChange}
                    />
                </div>
                
            </Paper>
        </div>
    )
}