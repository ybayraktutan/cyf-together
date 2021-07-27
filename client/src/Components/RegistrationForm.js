/*eslint linebreak-style: ["error", "windows"]*/
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import useForm from "../Utils/useFormreg";
import "../Style/Form.css";

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

	const linkStyle = {
		color: "#FF8181",
	};

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
					{/* {errors.firstname && <p>{errors.firstname}</p>} */}
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
					{/* {errors.passwordCheck && <p>{errors.passwordCheck}</p>} */}
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
};

export default RegistrationForm;
