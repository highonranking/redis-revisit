const client = require('./client')

const init = async () => {
  try {
    // Add geospatial data to the 'bikes:rentable' key
    const res1 = await client.geoadd("bikes:rentable", -122.27652, 37.805186, "station:1");
    console.log(res1); // 1

    const res2 = await client.geoadd("bikes:rentable", -122.2674626, 37.8062344, "station:2");
    console.log(res2); // 1

    const res3 = await client.geoadd("bikes:rentable", -122.2469854, 37.8104049, "station:3");
    console.log(res3); // 1

    // Perform a geospatial search
    const res4 = await client.geosearch(
      "bikes:rentable",
      "FROMLONLAT", -122.27652, 37.805186,
      "BYRADIUS", 5, "km",
      "ASC"
    );
    console.log(res4); // ['station:1', 'station:2', 'station:3']

    await client.quit();
  } catch (err) {
    console.error("Error:", err);
  }
};

init();
