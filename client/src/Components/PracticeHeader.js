import React from "react";

import "../Style/Home.css";

const PracticeHeader = (props) => {
	return (
		<div id="practice-header">
			<h5>{props.text}</h5>
			<div className="clock">
				<div>{props.img}</div>
				<div>
					<h5> 1min</h5>
				</div>
			</div>
		</div>
	);
};

export default PracticeHeader;
