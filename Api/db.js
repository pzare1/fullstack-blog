import mysql from 'mysql';
export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"7799salam",
    database:"blog"
})