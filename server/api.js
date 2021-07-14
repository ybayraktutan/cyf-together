/*eslint linebreak-style: ["error", "windows"]*/

import { Router } from "express";
import { pool } from "./db";
const uuid = require("uuid");
import SHA256 from "crypto-js/sha256";
// import Base64 from "crypto-js/enc-base64";
// import WordArray from "crypto-js";
// import PBKDF2 from "crypto-js";
// const CryptoJS = require("crypto-js");

const router = new Router();

router.get("/", (_, res) => {
	pool.query("SELECT * FROM users", (error, result) => {
		res.json(result.rows);
	});
});

router.post("/signin", (req, res) => {
	const { email, password } = req.body;
	const hashedPassword = SHA256(password).toString();
	const saltedPassword = SHA256(hashedPassword + "21@-!89oO").toString();

	if (email && password) {
		pool
			.query("SELECT * FROM users WHERE email=$1 and password=$2", [
				email,
				saltedPassword,
			])
			.then((result) => {
				if (result.rows.length > 0) {
					return res.status(200).send("Successfully signed in!!");
				} else {
					return res.status(400).send("Incorrect Username and/or Password!");
				}
			})
			.catch((e) => res.send(JSON.stringify(e)));
	} else {
		return res.status(400).send("Please fill the email and password fields!!");
	}
});

router.post("/register", (req, res) => {
	const { firstname, email, password } = req.body;
	const hashedPassword = SHA256(password).toString();
	const saltedPassword = SHA256(hashedPassword + "21@-!89oO").toString();
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
				res.send("error....already have that email");
			} else {
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
