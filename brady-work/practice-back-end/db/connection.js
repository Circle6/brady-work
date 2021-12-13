var snowflake = require("snowflake-sdk");

var connection = snowflake.createConnection({
  account: "IKA29021",
  username: "node",
  password: "password",
  warehouse: "COMPUTE_WH",
});

connection.connect(
  function (err) {
    if (err) {
      console.error('Unable to connect: ' + err.message);
    }
    else {
      console.log('Successfully connected to Snowflake.');
    }
  }
);

exports.connection = connection;