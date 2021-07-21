import React from "react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import homeIcon from "@iconify-icons/feather/home";
import searchIcon from "@iconify-icons/feather/search";
import keyIcon from "@iconify-icons/feather/key";

import "../Style/Practice.css";

const PracticeFooter = () => {
	const linkStyle = {
		color: "#FF8181",
	};
	return (
		<div id="practice-footer">
			<div>
				<NavLink to="/practice" style={linkStyle}>
					<Icon icon={homeIcon} />
					{/* <p>Today</p> */}
				</NavLink>
			</div>
			<span>
				<Icon icon={searchIcon} />
			</span>
			<span>
				<Icon icon={keyIcon} />
			</span>
		</div>
	);
};

export default PracticeFooter;
