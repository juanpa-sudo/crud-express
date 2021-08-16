const mysql      = require('mysql');
const {promisify}= require('util');
let pool = mysql.createPool({
  host     : 'localhost',
  user     : 'admin',
  password : 'admin',
  database : 'Experimentos'
});

pool.getConnection((err, connection)=> {
  if (err){
    console.log('hubu un error',err);
  };
  if (connection) {
    connection.release()
    console.log('conectada');
  }
  return;
});

pool.query = promisify(pool.query);
module.exports=pool

