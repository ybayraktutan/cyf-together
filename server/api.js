/*eslint linebreak-style: ["error", "windows"]*/
import { Router } from "express";
import { pool } from "./db";
const uuid = require("uuid");
import SHA256 from "crypto-js/sha256";
import * as EmailValidator from "email-validator";
import { DatabaseError } from "pg";
const passwordValidator = require("password-validator");
const jwt = require("jsonwebtoken");
const moment=require("moment-timezone");

const errors = {};

function handleEmail(email) {
	const isValidEmail = EmailValidator.validate(email);
	if (!isValidEmail) {
		errors.email = "Invalid Email/Password";
	}
}

function handlePassword(password) {
	const schema = new passwordValidator();
	const isValidPassword = schema.validate(password);
	if (!isValidPassword) {
		errors.password = "Please enter a valid password";
	}
}

const router = new Router();

router.get("/", (_, res) => {
	pool.query("SELECT * FROM users", (error, result) => {
		res.json(result.rows);
	});
});

router.post("/signin", (req, res) => {
	//take email and password from front end
	const { email, password } = req.body;
	handleEmail(email);
	console.log(email);
	console.log(password);

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
						{ expiresIn: 600 }
					);

					// return res.json({ auth: "success" });
					return res.json({ token: token });
				} else {
					return res.status(400).json({ auth: "error", errors });
				}
			})
			.catch((e) => res.send(JSON.stringify(e)));
	} else {
		return res
			.status(400)
			.json({ msg: "Please fill the email and password fields!!!" }, errors);
	}
});


const errorMessages = {};

router.post("/register", (req, res) => {
	console.log("register api");
	const { firstname, email, password, passwordCheck } = req.body;
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
		handleEmail(email);
		handlePassword(password);
	const isValidPassword = schema.validate(password);
	const hashedPassword = SHA256(password).toString();
	const saltedPassword = SHA256(hashedPassword + "21@-!89oO").toString();

	if(!isValidPassword) {
		errorMessages.password = "please enter a valid password";
	} else if (!isValidEmail) {
		errorMessages.email = "Please enter a valid email";
	} else if (password !== passwordCheck) {
		errorMessages.passwordCheck = "Password do not match";
	}

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
		res.json({ msg: "Please enter the correct details!!!", errorMessages });
	}
});


//verify token middleware
function authenticateToken(req,res,next){
	const authHeader=req.headers["authorization"];
	const token=authHeader && authHeader.split(" ")[1];
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
const userID = req.user.userid;
const currentTime = new Date();
		pool
			.query("SELECT lastpractise_id FROM users WHERE id=$1", [
				userID,
			])
			.then((result) => {
				console.log( currentTime);
				console.log( result.rows[0].lastpractise_time);
				console.log(currentTime - result.rows[0].lastpractise_time);
				if(currentTime-result.rows[0].lastpractise_time<0){
                   res.send("Please visit later for new practise");
				}
				console.log(result.rows[0].lastpractise_id);
				pool
					.query("SELECT * FROM practises WHERE id=$1", [result.rows[0].lastpractise_id+1])
					.then((result) => {
						return res.json(result.rows);
					})
					.catch((e) => res.send(JSON.stringify(e)));

				})
			.catch((e) => res.send(JSON.stringify(e)));

});
//frontend should post practise_id of the completed practise
router.post("/practise/completed", authenticateToken, (req, res) => {
	console.log("hello from completed");
	const practise_id=req.body.practise_id;
	const userID = req.user.userid;
	const timestamp=new Date();
	pool
		.query("UPDATE users SET lastpractise_id=$1, lastpractise_time=$2 WHERE id=$3",[practise_id+1,timestamp,userID])
		.then((result) => {
					return res.send("database updated");
				})
				.catch((e) => res.send(JSON.stringify(e)));
		});

router.post("/reflects",authenticateToken, (req, res) => {
	console.log("hello from reflect");
		const { answer,practice_id } = req.body;
			const userID = req.user.userid;
			console.log(req.body);
	pool
		.query(
			"INSERT INTO reflects (id,user_id,answer,practice_id) VALUES (DEFAULT,$1,$2,$3)",
			[userID,answer,practice_id]
		)
		.then((result) => {
			res.json({ "message": "reflective is inserted" });
		})
		.catch((e) => res.send(JSON.stringify(e)));
});

export default router;
