const client = require('./client');

const init = async()=>{
     await client.lpush('messages', 'Hi from node');
     await client.rpush('messages', 'Hi from node 2');
     const popresleft =  await client.lpop('messages');
     const popresright =  await client.rpop('messages');
     const popresrightblock =  await client.blpop('messages', 20 );
          console.log(popresrightblock);
};

init();