/*eslint linebreak-style: ["error", "windows"]*/
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import useForm from "../Utils/useFormlog";

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
		let result = fetch("http://localhost:8080/api/signin", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
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
			});
		localStorage.setItem("users", result);
	}

	const linkStyle = {
		color: "#FF8181",
	};

	return (
		<div id="login">
			<>
				<form onSubmit={handleSubmit} className="form" noValidate>
					{errors.email.length > 0 && <p>{errors.email}</p>}
					<div className="form-inputs">
						<input
							className="err-log"
							type="text"
							id="email"
							placeholder="Email"
							value={values.email}
							onChange={(e) => handleChange(e)}
						/>
						{/* <p>{errors} error</p> */}
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
						{/* {errors.password.length > 0 && <p>{errors.password}</p>} */}
						{errors.emptyField.length > 0 && <p>{errors.emptyField}</p>}
					</div>
					<button
						className="btn-login"
						type="submit"
						// onClick={home}
					>
						Sign In
					</button>
					<span className="title-account">
						<h5 className="account">
							Don&apos;t have an account?{" "}
							<Link to="/register" style={linkStyle} onClick={register}>
								{" "}
								<button className="btn-register" type="submit">
									Register
								</button>
							</Link>
						</h5>
					</span>
				</form>
			</>
		</div>
	);
};

export default LoginForm;
