import React from "react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import activityIcon from "@iconify-icons/feather/activity";
import homeIcon from "@iconify-icons/feather/home";
import searchIcon from "@iconify-icons/feather/search";
import keyIcon from "@iconify-icons/feather/key";

import "../Style/Reflections.css";

const ReflectFooter = () => {
	const linkStyle = {
		color: "#FF8181",
		fontSize: "3vw",
	};

	const linkSize = {
		fontSize: "3vw",
		color: "black",
	};

	return (
		<Container fluid id="reflect-footer">
			<Row>
				<Col sm>
					<NavLink to="/home">
						<Icon icon={activityIcon} style={linkSize} />
					</NavLink>
				</Col>
				<Col sm>
					<Icon icon={searchIcon} style={linkSize} />
				</Col>
				<Col sm>
					<NavLink to="/reflects" style={linkStyle}>
						<Icon icon={keyIcon} />
					</NavLink>
				</Col>
			</Row>
		</Container>
	);
};

export default ReflectFooter;
