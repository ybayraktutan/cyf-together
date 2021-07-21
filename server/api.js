
import { Router } from "express";
import { pool } from "./db";
const uuid = require("uuid");
import SHA256 from "crypto-js/sha256";
import * as EmailValidator from "email-validator";
const passwordValidator = require("password-validator");
const jwt = require("jsonwebtoken");


const router = new Router();

router.get("/", (_, res) => {
	pool.query("SELECT * FROM users", (error, result) => {
		res.json(result.rows);
	});
});

router.post("/signin", (req, res) => {
	//take email and password from front end
	const { email, password } = req.body;
	//hash and salt the password
	const hashedPassword = SHA256(password).toString();
	const saltedPassword = SHA256(hashedPassword + "21@-!89oO").toString();
    //check hashed password in database and return token if passwords match
	if (email && password) {
		pool
			.query("SELECT * FROM users WHERE email=$1 and password=$2", [
				email,
				saltedPassword,
			])
			.then((result) => {
				if (result.rows.length > 0) {
					//create token and return as a json object
					const user={ email: email, userid: result.rows[0].id, usertype: "user" };
					const token = jwt.sign(user,"SECRETmurattiisthelatestversionofme",
						{ expiresIn: 60 }
					);

					// return res.json({ auth: "success" });
					return res.json({ token: token });
				} else {
					return res.status(400).json({ auth: "error" });
				}
			})
			.catch((e) => res.send(JSON.stringify(e)));
	} else {
		return res.status(400).send("Please fill the email and password fields!!");
	}
});

router.post("/register", (req, res) => {
	console.log("register api");
	const { firstname, email, password } = req.body;
	const isValidEmail = EmailValidator.validate(email);
	const schema = new passwordValidator();
	schema
		.is()
		.min(8) // Minimum length 8
		.is()
		.max(100) // Maximum length 100
		.has()
		.uppercase() // Must have uppercase letters
		.has()
		.lowercase() // Must have lowercase letters
		.has()
		.digits(1) // Must have at least 1 digits
		.has()
		.not()
		.spaces();
	const isValidPassword = schema.validate(password);
	const hashedPassword = SHA256(password).toString();
	const saltedPassword = SHA256(hashedPassword + "21@-!89oO").toString();
	console.log(hashedPassword);
	if (isValidEmail && isValidPassword && firstname) {
		const newUser = {
			id: uuid.v4(),
			firstname: firstname,
			email: email,
			password: saltedPassword,
		};
		pool.query(
			"SELECT * FROM users where email=$1",
			[newUser.email],
			(error, result) => {
				if (result.rows.length > 0) {
					console.log("error");
					res.json({ register: "error-registereduser" });
				} else {
					pool.query(
						"INSERT INTO users (id,firstname,email,password,lastpractise_id,user_type) VALUES ($1,$2,$3,$4,$5,$6)",
						[newUser.id, newUser.firstname, newUser.email, newUser.password, 0,"user"],
						(error, result) => {
							res.json({ register: "success" });
							console.log(error, result);
						}
					);
				}
			}
		);
	} else {
		res.json({ register: "error" });
	}
});

function authenticateToken(req,res,next){
console.log(req.headers["authorization"]);
const authHeader=req.headers["authorization"];
const token=authHeader && authHeader.split(" ")[1];
console.log("tOKEN IS"+token);
if (token == null){
return res.sendStatus(401);
}

//verify token if it is verified contunie with end point otherwise send a forbidden 403 message to front end
jwt.verify(token, "SECRETmurattiisthelatestversionofme",(err,user)=>{
	if(err){
		res.sendStatus(403);
	}
	req.user=user;
	next();

});
}

router.get("/practise", authenticateToken,(req, res) => {

	//I need to send userid in token to be able to use here wile signing in
	//24 saat
	//son practice ise ne olacak????? son practice oldugunu kontrol etmeliyim nasil select all from practisis yapip lengthe mi bakarim?
	//reflective icin endpoint olmali mi?????
	console.log("USER IS"+req.user.email);
// const userID = "f8ed3880-a212-470c-83b5-edae3e5e0643";
const userID = req.user.userid;

		pool
			.query("SELECT lastpractise_id FROM users WHERE id=$1", [
				userID,
			])
			.then((result) => {
				pool
					.query("SELECT * FROM practises WHERE id=$1", [result.rows[0].lastpractise_id+1])
					.then((result) => {
						return res.json(result.rows);
					})
					.catch((e) => res.send(JSON.stringify(e)));

				})
			.catch((e) => res.send(JSON.stringify(e)));

});

router.post("/practise/completed", authenticateToken, (req, res) => {
	const practise_id=req.body.practise_id;
	const userID = req.user.userid;
	pool
		.query("UPDATE users SET lastpractise_id=$1
				.query("SELECT * FROM practises WHERE id=$1", [
					result.rows[0].lastpractise_id + 1,
				])
				.then((result) => {
					return res.json(result.rows);
				})
				.catch((e) => res.send(JSON.stringify(e)));
		})
		.catch((e) => res.send(JSON.stringify(e)));
});

router.post("/reflects",authenticateToken, (req, res) => {
	console.log("hello from reflect");
		// const { answer,practise_id } = req.body;
const answer="Bu kiz bizi batirdi.Bu gun icime atmadim yedimmmmm";
const  practise_id=2;
	 //tokeni al....check et.......
	 //answeri bodyden all----FRONT END bana answeri ve practise_id yi gonder gonder......userid yi biliyom answer var.....
	const userID = "f8ed3880-a212-470c-83b5-edae3e5e0643";
	pool
		.query(
			"INSERT INTO reflects VALUES (14, $1,$2,$3)",
			[userID,answer,practise_id]
		)
		.then((result) => {
			res.json({ "message": "reflective is inserted" });
		})
		.catch((e) => res.send(JSON.stringify(e)));
});

export default router;

