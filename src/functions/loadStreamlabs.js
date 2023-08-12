import * as cheerio from 'cheerio';
import jsZip from 'jszip';

function parseTemplateHTML(file) {
    const $ = cheerio.load(file);
    let t = $('script').find('.wrapper').html();
}

export default async function parseToWrenchLib(file) {
    let zip = await jsZip.loadAsync(file);
    let fileNames = Object.keys(zip.files);
    let fileData = [];
    for (let n of fileNames) {
        let f = await zip.files[n].async('string');
        fileData.push(f);
    }
    console.log(fileData);
}