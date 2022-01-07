const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "gauravsonawane",
  password: "cdac",
  database: "project1",
};

const addMsg = async (user) => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();

  let sql = `insert into message (inputMsg) values (?)`;
  let list = connection.queryAsync(sql, [user.inputMsg]);
  //console.log("data added");

  await connection.endAsync();
  //return list;
};
//selectAllMessege();
const selectAllMessege = async () => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();

  let sql = `select * from message`;
  let list = connection.queryAsync(sql, []);
  console.log("data added");

  await connection.endAsync();
  return list;
};
module.exports = { addMsg, selectAllMessege };
