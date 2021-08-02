/*eslint linebreak-style: ["error", "windows"]*/
import React from "react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import homeIcon from "@iconify-icons/feather/home";
import activityIcon from "@iconify-icons/feather/activity";
import searchIcon from "@iconify-icons/feather/search";
import keyIcon from "@iconify-icons/feather/key";
import { Container, Row, Col } from "react-bootstrap";
import "../Style/Practice.css";

const PracticeFooter = () => {
	const linkStyle = {
		color: "#FF8181",
		fontSize: "2.5vh",
	};

	const linkSize = {
		fontSize: "2.5vh",
		color: "black",
	};

	return (
		<Container fluid id="practice-footer">
			<Row>
				<Col>
					<NavLink to="/home" style={linkSize}>
						<Icon icon={homeIcon} />
					</NavLink>
				</Col>
				<Col>
					<NavLink to="/practice" style={linkStyle}>
						<Icon icon={activityIcon} />
					</NavLink>
				</Col>
				<Col>
					<Icon icon={searchIcon} />
				</Col>
				<Col>
					<NavLink to="/reflects" style={linkSize}>
						<Icon icon={keyIcon} />
					</NavLink>
				</Col>
			</Row>
		</Container>
	);
};

export default PracticeFooter;
