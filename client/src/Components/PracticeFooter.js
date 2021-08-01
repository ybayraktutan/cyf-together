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

	return (
		<Container fluid id="practice-footer">
			<Row>
				<Col>
					<NavLink to="/home" style={{ color: "#FF8181", fontSize: "3vh" }}>
						<Icon icon={activityIcon} />
					</NavLink>
				</Col>
				<Col>
					<Icon icon={searchIcon} />
				</Col>
				<Col>
					<NavLink to="/reflects" style={{ color: "black", fontSize: "3vh" }}>
						<Icon icon={keyIcon} />
					</NavLink>
				</Col>
			</Row>
		</Container>
	);
};

export default PracticeFooter;
