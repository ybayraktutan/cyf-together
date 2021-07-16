
import { Router } from "express";
import { pool } from "./db";
const uuid = require("uuid");
import SHA256 from "crypto-js/sha256";
import * as EmailValidator from "email-validator";
const passwordValidator = require("password-validator");

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
	console.log("signin called");
	const { email, password } = req.body;
	console.log(email);
	console.log(password);

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
					return res.json({ auth: "success" });
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
		.digits(1) // Must have at least 2 digits
		.has()
		.not()
		.spaces();
	const isValidPassword = schema.validate(password);
	const hashedPassword = SHA256(password).toString();
	const saltedPassword = SHA256(hashedPassword + "21@-!89oO").toString();
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
						"INSERT INTO users (id,firstname,email,password) VALUES ($1,$2,$3,$4)",
						[newUser.id, newUser.firstname, newUser.email, newUser.password],
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

export default router;

