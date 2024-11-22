const client = require('./client');

const init = async()=>{
     await client.sadd('ip', '4');
     await client.sadd('ip', '5');
     await client.srem('ip', '1');

    const res =  await client.sismember('ip', '1');
    console.log(res);

};

init();