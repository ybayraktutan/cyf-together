/*eslint linebreak-style: ["error", "windows"]*/
import React from "react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import activityIcon from "@iconify-icons/feather/activity";
import searchIcon from "@iconify-icons/feather/search";
import keyIcon from "@iconify-icons/feather/key";
import { Container, Row, Col } from "react-bootstrap";

import "../Style/Practice.css";

const PracticeFooter = () => {
	const linkStyle = {
		color: "#FF8181",
	};
	return (
		<Container fluid id="practice-footer">
			<Row>
				<Col>
					<NavLink to="/home" style={linkStyle}>
						<Icon icon={activityIcon} />
					</NavLink>
				</Col>
				<Col>
					<Icon icon={searchIcon} />
				</Col>
				<Col>
					<Icon icon={keyIcon} />
				</Col>
			</Row>
		</Container>
	);
};

export default PracticeFooter;
