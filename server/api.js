import { Router } from "express";
import { pool } from "./db";
const uuid=require("uuid");
const router = new Router();

router.get("/", (_, res) => {
 pool.query("SELECT * FROM users", (error, result) => {
		res.json(result.rows);
 });
});

router.post("/register", (req, res) => {
const { firstname,email,password }=req.body;
const newUser = {
	id: uuid.v4(),
	firstname:firstname,
	email:email,
	password:password,
};
 pool.query(
		"SELECT * FROM users where email=$1",
		[newUser.email],
		(error, result) => {
			if (result.rows.length>0){
res.send("error....already have that email");
			} else{
pool.query(
	"INSERT INTO users (id,firstname,email,password) VALUES ($1,$2,$3,$4)",
	[newUser.id, newUser.firstname, newUser.email, newUser.password],
	(error, result) => {
		res.send("user is added");
	}
);
	}
	}
 );
});

export default router;


