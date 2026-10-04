
fetch(process.argv[2]).then(res => res.text()).then((text) => {
    console.log(text.length);
    console.log(text);
}).catch(console.error);