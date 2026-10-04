import { log } from "node:console";

fetch(process.argv[2]).then(res => res.text()).then((text) => {
    console.log(text);
    fetch(process.argv[3]).then(res => res.text()).then((text) => {
        console.log(text);
        fetch(process.argv[4]).then(res => res.text()).then(console.log).catch(console.error); 
    }).catch(console.error);
}).catch(console.error);