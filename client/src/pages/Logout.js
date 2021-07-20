/*eslint linebreak-style: ["error", "windows"]*/
import React from "react";
import { useHistory, NavLink } from "react-router-dom";

const Logout = (props) => {
	const history = useHistory();

	const login = () => history.push("/login");
	return (
		<div>
			<NavLink to="/login" onClick={login} id="log-out">
				{props.nav}
			</NavLink>
		</div>
	);
};

export default Logout;
