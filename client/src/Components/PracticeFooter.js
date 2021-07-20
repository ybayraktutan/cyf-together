import React from "react";
import { Icon } from "@iconify/react";
import homeIcon from "@iconify-icons/feather/home";
import searchIcon from "@iconify-icons/feather/search";
import keyIcon from "@iconify-icons/feather/key";
import "../Style/Home.css";

const PracticeFooter = () => {
	return (
		<div id="practice-footer">
			<div>
				<Icon icon={homeIcon} />
			</div>
			<div>
				<Icon icon={searchIcon} />
			</div>
			<div>
				<Icon icon={keyIcon} />
			</div>
		</div>
	);
};

export default PracticeFooter;
