import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import Colorpicker from "../components/theme/colorpicker";
import Dropdown from "../components/theme/dropdown";
import Fontpicker from "../components/theme/fontpicker";
import Silder from "../components/theme/silder";
import { ExpandMore } from "@mui/icons-material";

function fixTitle(title) {
    let iTemp = title;
    let iSplice = title.match(/\w/);
    iTemp = iTemp.substring(iSplice.index, title.length).toLowerCase();
    const words = iTemp.split(" ").map((e) => {
        return e[0].toUpperCase() + e.substr(1);
    }).join(" ")

    return words;

}

export default async function CreateCustomizer(data) {
    return new Promise(async (resolve, reject) => {
        let o = {};
        for (let i of Object.keys(data)) {
            if (Object.keys(data[i]).indexOf("group") !== -1) {
                if (Object.keys(o).indexOf(data[i].group) === -1) 
                o[data[i].group] = [];
            }
        }
        let items = Object.keys(data)
        .filter(i => i !== "description")

        var outValues = {};
        for (let item of items) {
            let itemVars = data[item];

            let i = null;
            outValues[item] = itemVars.value;

            switch(itemVars['type']) {
                case "slider":
                    i = <Silder data={itemVars} item={item} />;
                    break;
                case "dropdown":
                    i = <Dropdown data={itemVars} item={item} />;
                    break;
                case "colorpicker":
                    i = <Colorpicker data={itemVars} item={item} />;
                    break;
                case "fontpicker":
                    i = <Fontpicker data={itemVars} item={item} />;
                    break;
                default:
                    break;
            }
            if (i !== null) {
                o[itemVars['group']].push(i);
            }
        }
        window.currentStyles = outValues;
        console.log("shit has been loaded")
        console.log(window.currentStyles)
        await document.dispatchEvent(new CustomEvent("styleChanged", {
            detail: {
              va: "dog",
            },
        }));
        resolve(
            Object.keys(o).map(i => {
                return (
                <Box>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                            <Typography>{fixTitle(i)}</Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{
                            display: "flex",
                            flexDirection: "column",
                            rowGap: "15px"
                        }}>
                        {o[i]}
                        </AccordionDetails>
                    </Accordion>
                </Box>
                )
            })
        )
    })
}