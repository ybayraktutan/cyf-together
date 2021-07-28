/*eslint linebreak-style: ["error", "windows"]*/
import React from "react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import homeIcon from "@iconify-icons/feather/home";
import searchIcon from "@iconify-icons/feather/search";
import keyIcon from "@iconify-icons/feather/key";
import { Container, Row, Col } from "react-bootstrap";

import "../Style/Practice.css";

const PracticeFooter = () => {
	const linkStyle = {
		color: "#FF8181",
	};
	return (
		<Container fluid className="practice-footer">
			<Row>
				<Col>
					<NavLink to="/home" style={linkStyle}>
						<Icon icon={homeIcon} />
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

/*
		<div id="practice-footer">
			<div>
				<NavLink to="/home" style={linkStyle}>
					<Icon icon={homeIcon} />
					{/* <p>Today</p> }
				</NavLink>
			</div>
			<span>
				<Icon icon={searchIcon} />
			</span>
			<span>
				<Icon icon={keyIcon} />
			</span>
		</div>
*/
