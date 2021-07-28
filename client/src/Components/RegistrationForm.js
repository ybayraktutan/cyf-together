/*eslint linebreak-style: ["error", "windows"]*/
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import useForm from "../Utils/useFormreg";
import "../Style/Form.css";
import { Form, Button } from "react-bootstrap";

const RegistrationForm = () => {
	const { handleChange, values } = useForm();
	const [errors, setErrors] = useState({
		firstname: "",
		email: "",
		password: "",
		passwordCheck: "",
		emptyField: "",
	});

	const history = useHistory();
	const login = () => history.push("/login");

	function handleSubmit(e) {
		e.preventDefault();

		const body = {
			firstname: values.firstname,
			email: values.email,
			password: values.password,
			passwordCheck: values.password,
		};
		let result = fetch("/api/register", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.register === "success") {
					console.log(data);
					history.push("/login");
				} else if (
					data.register === "error" ||
					data.register === "error-registereduser"
				) {
					console.log(data);
					setErrors((prevState) => {
						const state = {
							...prevState,
							email: data.errors.email,
						};
						return state;
					});
					history.push("/register");
				} else if (data.msg) {
					setErrors((prevState) => {
						const state = {
							...prevState,
							emptyField: data.msg,
						};
						return state;
					});
				}
			});
		localStorage.setItem("users", result);
	}

	const linkStyleInput = {
		width: "85vw",
		height: "7vh",
		borderRadius: "30px",
		fontSize: "3vw",
		padding: "2vw 4vw",
		margin: "0",
	};

	return (
		<div id="login">
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3">
					<Form.Control
						type="text"
						id="firstname"
						placeholder="Firstname"
						style={linkStyleInput}
						value={values.firstname}
						onChange={(e) => handleChange(e)}
					/>
					{/* {errors.firstname && <p>{errors.firstname}</p>} */}
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Control
						type="text"
						id="email"
						placeholder="Email"
						style={linkStyleInput}
						value={values.email}
						onChange={(e) => handleChange(e)}
					/>
				</Form.Group>
				{errors.email.length > 0 && <p>{errors.email}</p>}
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
				{/* {errors.passwordCheck && <p>{errors.passwordCheck}</p>} */}
				{errors.password.length > 0 && <p>{errors.password}</p>}
				<Form.Group className="mb-3">
					<Form.Control
						type="password"
						id="passwordCheck"
						placeholder="Confirm password"
						style={linkStyleInput}
						value={values.passwordCheck}
						onChange={(e) => handleChange(e)}
					/>
				</Form.Group>
				{errors.emptyField.length < 1 && <p>{errors.emptyField}</p>}
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
						Register
					</Button>
				</Form.Group>
				<Form.Group className="mb-3">
					<h5>Already have an account?</h5>
				</Form.Group>
				<Form.Group className="mb-3">
					<Link to="/login" onClick={login}>
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
							Sign in
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

export default RegistrationForm;

/*
return (
		<div id="login">
			<form onSubmit={handleSubmit} className="form" noValidate>
				<div className="form-inputs">
					<input
						className="err-log"
						type="text"
						id="firstname"
						placeholder="Firstname"
						value={values.firstname}
						onChange={(e) => handleChange(e)}
					/>
					{/* {errors.firstname && <p>{errors.firstname}</p>} }
				</div>
				<div className="form-inputs">
					<input
						className="err-log"
						type="text"
						id="email"
						placeholder="Email"
						value={values.email}
						onChange={(e) => handleChange(e)}
					/>
					{errors.email.length > 0 && <p>{errors.email}</p>}
				</div>
				<div className="form-inputs">
					<input
						className="err-log"
						type="password"
						id="password"
						placeholder="Password"
						value={values.password}
						onChange={(e) => handleChange(e)}
					/>
					{errors.password.length > 0 && <p>{errors.password}</p>}
				</div>
				<div className="form-inputs">
					<input
						className="err-log"
						type="password"
						id="passwordCheck"
						placeholder="Confirm password"
						value={values.passwordCheck}
						onChange={(e) => handleChange(e)}
					/>
					{/* {errors.passwordCheck && <p>{errors.passwordCheck}</p>} }
				</div>
				{errors.emptyField.length < 1 && <p>{errors.emptyField}</p>}
				<button className="btn-login" type="submit">
					Register
				</button>
				<span className="title-account">
					<h5 className="account">
						Already have an account?{" "}
						<Link to="/login" style={linkStyle} onClick={login}>
							{" "}
							<button className="btn-register" type="submit">
								Sign In
							</button>
						</Link>
					</h5>
				</span>
			</form>
		</div>
	);
*/
