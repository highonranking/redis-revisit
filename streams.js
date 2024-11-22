const client = require('./client');

const init = async()=>{
    const id = await client.xadd("temp", "*", "temperature", "100", "unit", "C");
        console.log(id);

};

init();