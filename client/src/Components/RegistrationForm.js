import React from "react";
import { useHistory, Link } from "react-router-dom";
import regValid from "../Utils/regValid";
import useForm from "../Utils/useFormreg";

const RegistrationForm = ({ submitForm }) => {
	const { handleChange, handleSubmit, values, errors } = useForm(
		submitForm,
		regValid
	);

	const history = useHistory();
	const login = () => history.push("/login");

	const linkStyle = {
		color: "#FF8181",
	};

	return (
		<>
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
						{errors.firstname && <p>{errors.firstname}</p>}
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
					<div className="form-inputs">
						<input
							className="err-log"
							type="password"
							id="passwordCheck"
							placeholder="Confirm password"
							value={values.passwordCheck}
							onChange={(e) => handleChange(e)}
						/>
						{errors.passwordCheck && <p>{errors.passwordCheck}</p>}
					</div>
					<button className="btn-register" type="submit">
						Register
					</button>
					<span className="title-account">
						<h5 className="account">
							Already have an account?{" "}
							<Link to="/login" style={linkStyle} onClick={login}>
								{" "}
								<button className="btn-login" type="submit">
									Sign In
								</button>
							</Link>
						</h5>
					</span>
				</form>
			</div>
		</>
	);
};

export default RegistrationForm;
