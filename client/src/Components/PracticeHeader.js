/*eslint linebreak-style: ["error", "windows"]*/
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import clockIcon from "@iconify-icons/feather/clock";

const PracticeHeader = ({ data }) => {
	return (
		<Container fluid className="practice-header">
			<Row>
				<Col>Today&apos;s Practice.</Col>
				<Col className="clock">
					<Icon icon={clockIcon} style={{ fontSize: "4vw" }} />
					<span> {data[0].time_expectation} min</span>
				</Col>
			</Row>
		</Container>
	);
};

export default PracticeHeader;
