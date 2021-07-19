/*eslint linebreak-style: ["error", "windows"]*/
import React from "react";
import { useHistory, NavLink } from "react-router-dom";

import "../Style/Home.css";

const NoteHeader = (props) => {
	const history = useHistory();
	const PracticePage = () => history.push("/practice");
	return (
		<div id="note-header">
			<div className="back-btn">
				<div>
					<NavLink to="/practice" component={PracticePage}>
						{props.img}
					</NavLink>
				</div>
			</div>
			<h5>{props.text}</h5>
		</div>
	);
};

export default NoteHeader;
