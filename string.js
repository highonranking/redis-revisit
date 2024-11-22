const client = require('./client');


const init = async () => {
    await client.set("message:2", "I Love you", "EX", 10);
    // await client.expire("message:2", 20)
  //  await client.set("message:1", "hey")
    const results = await client.mget(["user:1", "user:2"]);
    console.log(results);
}

init();