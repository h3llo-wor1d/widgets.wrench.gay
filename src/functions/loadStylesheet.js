import styled from "@emotion/styled";


export default function loadStylesheet(data) {
    const re = /\{(.*)\}/g;
    let o = {};
    [...data.matchAll(re)].forEach(i => {
        o[i[1]] = i.index;
    });

    let styles = document.currentStyles;
    console.log(styles);
    var element = styled.div ``
}