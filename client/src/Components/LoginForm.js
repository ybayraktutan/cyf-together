import React from "react";
import { useHistory, Link } from "react-router-dom";
import logValid from "../Utils/logValid";
import useForm from "../Utils/useFormlog";

const LoginForm = ({ submitForm }) => {
	const { handleChange, handleSubmit, values, errors } = useForm(
		submitForm,
		logValid
	);

	const history = useHistory();
	const register = () => history.push("/register");

	const linkStyle = {
		color: "#FF8181",
	};

	return (
		<div id="login">
			<>
				<form onSubmit={handleSubmit} className="form" noValidate>
					<div className="form-inputs">
						<input
							className="err-log"
							type="text"
							id="email"
							placeholder="Email"
							value={values.email}
							onChange={(e) => handleChange(e)}
						/>
						{errors.email && <p>{errors.email}</p>}
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
						{errors.password && <p>{errors.password}</p>}
					</div>
					<button className="btn-login" type="submit">
						Sign In
					</button>
					<span className="title-account">
						<h5>
							Don&apos;t have an account?{" "}
							<Link to="/register" style={linkStyle} onClick={register}>
								{" "}
								Register
							</Link>
						</h5>
					</span>
				</form>
			</>
		</div>
	);
};

export default LoginForm;
