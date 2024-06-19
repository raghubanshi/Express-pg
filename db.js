/** Database setup for BizTime. */


const { Client } = require("pg");

const client = new Client({
  connectionString: "postgresql://praveen:123@127.0.0.1:5432/biztime"
});

client.connect();


module.exports = client;