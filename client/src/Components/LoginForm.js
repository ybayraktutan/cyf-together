/*eslint linebreak-style: ["error", "windows"]*/
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import useForm from "../Utils/useFormlog";
import { Form, Button } from "react-bootstrap";
import "../Style/Form.css";


const LoginForm = () => {
	const { handleChange, values } = useForm();
	const [errors, setErrors] = useState({
		email: "",
		password: "",
		emptyField: "",
	});

	const history = useHistory();
	const register = () => history.push("/register");

	//const { email, password } = values;

	function handleSubmit(e) {
		e.preventDefault();

		const body = { email: values.email, password: values.password };
		let result = fetch("/api/signin", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data.token);
				if (data.auth === "success") {
					console.log(data);
					history.push("/home");
				} else if (data.auth === "error") {
					console.log(data);
					setErrors((prevState) => {
						const state = {
							...prevState,
							email: data.errors.email,
						};
						return state;
					});
					history.push("/login");
				} else if (data.msg) {
					setErrors((prevState) => {
						const state = {
							...prevState,
							emptyField: data.msg,
						};
						return state;
					});
				}
						localStorage.setItem("users", data.token);

			});
		localStorage.setItem("users", result);
	}
const linkStyleInput = {
	width: "85vw",
	height: "7vh",
	borderRadius: "30px",
	fontSize: "3vw",
	padding: "2vw 4vw",
	margin:"2vh 0",
};

	return (
		<div id="login">
			<Form onSubmit={handleSubmit}>
				{errors.email.length > 0 && <p>{errors.email}</p>}
				<Form.Group className="mb-3">
					<Form.Control
						type="email"
						id="email"
						placeholder="Email"
						style={linkStyleInput}
						value={values.email}
						onChange={(e) => handleChange(e)}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Control
						type="password"
						id="password"
						placeholder="Password"
						style={linkStyleInput}
						value={values.password}
						onChange={(e) => handleChange(e)}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Button
						className="btn-login"
						type="submit"
						variant="default"
						style={{
							color: "#FFF",
							backgroundColor: "#6360FF",
							padding: "30px",
							fontSize: "3vw",
							borderRadius: "20px",
							alignItems: "center",
						}}
					>
						Sign in
					</Button>
				</Form.Group>
				<Form.Group className="mb-3">
					<h5>Don&apos;t have an account? </h5>
				</Form.Group>
				<Form.Group className="mb-3">
					<Link to="/register" onClick={register}>
						{" "}
						<Button
							className="btn-register"
							variant="default"
							type="submit"
							style={{
								color: "#FFF",
								backgroundColor: "#FF8181",
								padding: "30px",
								fontSize: "3vw",
								borderRadius: "20px",
							}}
						>
							Register
						</Button>
					</Link>
				</Form.Group>
				<Form.Group className="mb-3">
					<h6>T&C and Privacy Policy</h6>
				</Form.Group>
			</Form>
		</div>
	);
};

export default LoginForm;
