/*eslint linebreak-style: ["error", "windows"]*/
import { Router } from "express";
import "dotenv/config";
import SHA256 from "crypto-js/sha256";
import * as EmailValidator from "email-validator";
import process from "process";
import { pool } from "./db";
const uuid = require("uuid");
const passwordValidator = require("password-validator");
const jwt = require("jsonwebtoken");
const moment = require("moment");
const router = new Router();

router.post("/signin", (req, res) => {
	//take email and password from front end
	const { email, password } = req.body;

	//hash and salt the password
	const hashedPassword = SHA256(password).toString();
	const saltedPassword = SHA256(
		hashedPassword + process.env.PASSWORD_SALT
	).toString();

	//check hashed password in database and return token if passwords match
	if (email && password) {
		pool
			.query("SELECT * FROM users WHERE email=$1 and password=$2", [
				email,
				saltedPassword,
			])
			.then((result) => {
				if (result.rows.length > 0) {
					const user = {
						email: email,
						userid: result.rows[0].id,
						usertype: "user",
					};
					//generate a token and return as a json object
					const token = jwt.sign(user, process.env.TOKEN_SECRET, {
						expiresIn: "7 days",
					});
					return res.json({ token: token, auth: "success" });
				} else {
					return res.status(400).json({
						auth: "error",
						errors: {
							email: "Incorrect Email and/or Password!",
						},
					});
				}
			})
			.catch((e) => res.send(JSON.stringify(e)));
	} else {
		return res.status(400).json({
			auth: "error",
			errors: { email: "Please enter Email and Password!" },
		});
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
	const saltedPassword = SHA256(hashedPassword + process.env.PASSWORD_SALT).toString();
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
						[
							newUser.id,
							newUser.firstname,
							newUser.email,
							newUser.password,
							0,
							"user",
						],
						(error, result) => {
							res.json({ register: "success" });
							console.log(error, result);
						}
					);
				}
			}
		);
	} else {
		res.json({ msg: "Please enter the correct details!!!" });
	}
});

//verify token middleware
function authenticateToken(req, res, next) {
	const authHeader = req.headers["authorization"];
	const token = authHeader && authHeader.split(" ")[1];
	console.log("TOKEN IS" + token);
	if (token == null) {
		return res.sendStatus(401);
	}
	//verify token if it is verified continue with end point otherwise send a forbidden 403 message to front end
	jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
		if (err) {
			res.sendStatus(403);
		}
		req.user = user;
		next();
	});
}
router.get("/practise", authenticateToken, (req, res) => {
	const userID = req.user.userid;
	pool
		.query("SELECT lastpractise_id,lastpractise_time  FROM users WHERE id=$1", [
			userID,
		])
		.then((result) => {
			let lastpractice_time = result.rows[0].lastpractise_time;
			let now = moment().format("YYYY-MM-DD");
			let formattedLastpractice_time =
				moment(lastpractice_time).format("YYYY-MM-DD");

			if (now !== formattedLastpractice_time) {
				let user_last_practice_id = result.rows[0].lastpractise_id;
				pool
					.query("SELECT id FROM practises ORDER BY id DESC LIMIT 1")
					.then((result) => {
						let last_practise_in_db = result.rows[0].id;
						if (user_last_practice_id < last_practise_in_db) {
							pool
								.query("SELECT * FROM practises WHERE id=$1", [
									user_last_practice_id + 1,
								])
								.then((result) => {
									return res.json(result.rows);
								})
								.catch((e) => res.send(JSON.stringify(e)));
						} else {
							pool
								.query("SELECT * FROM practises WHERE id=1")
								.then((result) => {
									return res.json(result.rows);
								})
								.catch((e) => res.send(JSON.stringify(e)));
						}
					});
			} else {
				res.status(403).json({
					error:
						"You have already done today's practice, please come back tomorrow. ",
				});
			}
		})
		.catch((e) => res.send(JSON.stringify(e)));
});

router.post("/reflects", authenticateToken, (req, res) => {
	console.log("hello from reflect");
	const { answer, practice_id } = req.body;
	const userID = req.user.userid;
	const timestamp = new Date();
	console.log(req.body);
	pool
		.query(
			"INSERT INTO reflects (user_id,answer,practice_id,completed_time) VALUES ($1,$2,$3,$4)",
			[userID, answer, practice_id, timestamp]
		)
		.then((result) => {
			pool
				.query(
					"UPDATE users SET lastpractise_id=$1, lastpractise_time=$2 WHERE id=$3",
					[practice_id, timestamp, userID]
				)
				.then((result) => {
					return res.send("database updated");
				})
				.catch((e) => res.send(JSON.stringify(e)));
		})
		.catch((e) => res.send(JSON.stringify(e)));
});

router.get("/reflects/display", authenticateToken, (req, res) => {
	const userID = req.user.userid;
	pool
		.query(
			"SELECT reflects.id,practises.title,reflects.answer,reflects.completed_time FROM (users INNER JOIN reflects ON users.id=reflects.user_id) INNER JOIN  practises ON reflects.practice_id=practises.id WHERE users.id=$1",
			[userID]
		)
		.then((result) => {
			return res.json(result.rows);
		})
		.catch((e) => res.send(JSON.stringify(e)));
});

export default router;
