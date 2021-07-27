import React from "react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import homeIcon from "@iconify-icons/feather/home";
import searchIcon from "@iconify-icons/feather/search";
import keyIcon from "@iconify-icons/feather/key";

import "../Style/Practice.css";

const ReflectFooter = () => {
	const linkStyle = {
		color: "#FF8181",
	};
	return (
		<div id="practice-footer">
			<div>
				<Icon icon={homeIcon} />
			</div>
			<span>
				<Icon icon={searchIcon} />
			</span>
			<span>
				<NavLink to="/reflects" style={linkStyle}>
					<Icon icon={keyIcon} />
					{/* <p>Today</p> */}
				</NavLink>
			</span>
		</div>
	);
};

export default ReflectFooter;
