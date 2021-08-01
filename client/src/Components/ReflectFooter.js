import React from "react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import activityIcon from "@iconify-icons/feather/activity";
import searchIcon from "@iconify-icons/feather/search";
import keyIcon from "@iconify-icons/feather/key";

import "../Style/Reflections.css";

const ReflectFooter = () => {
	const linkStyle = {
		color: "#FF8181",
		fontSize: "3vh",
	};

	const linkSize = {
		fontSize: "3vh",
		color: "black",
	};

	return (
		<Container fluid id="reflect-footer">
			<Row>
				<Col>
					<NavLink to="/home">
						<Icon icon={activityIcon} style={linkSize} />
					</NavLink>
				</Col>
				<Col>
					<Icon icon={searchIcon} style={linkSize} />
				</Col>
				<Col>
					<NavLink to="/reflects" style={linkStyle}>
						<Icon icon={keyIcon} />
					</NavLink>
				</Col>
			</Row>
		</Container>
	);
};

export default ReflectFooter;
