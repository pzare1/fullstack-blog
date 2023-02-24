import { db } from "../db.js"
import bcrypt from "bcryptjs"
export const register = (req,res) => {
    //check the existing users
    const q = "SELECT * FROM user WHERE email=? or username=?"
    db.query(q,[req.body.email, req.body.name], (err,data) =>{
        if(err) return res.json(err)
        if(data.length) return res.status(409).json("user already exist")
        //hash password and create user
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync("req.body.password", salt);
        const q = "INSERT INTO user(`username`,`email`,`password`) VALUES (?)"
        const values = [
            req.body.username,
            req.body.email,
            hash
        ]
        db.query(q,[values],(err,data) =>{
            if (err) return res.json(err);
            return res.status(200).json('user created.')
        });
    });
}
export const login = (req,res) => {

}
export const logout = (req,res) => {

}