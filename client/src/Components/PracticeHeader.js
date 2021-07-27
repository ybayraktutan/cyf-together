/*eslint linebreak-style: ["error", "windows"]*/
import React from "react";
import { Container, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import clockIcon from "@iconify-icons/feather/clock";

const PracticeHeader = ({ data }) => {
	return (
		<div id="practice-header">
			<Container>
				<Col>
					<p>Today&apos;s Practice.</p>
				</Col>
				<div className="clock">
					<Icon icon={clockIcon} />
					<span> {`${data[0].time_expectation} mins`}</span>
				</div>
			</Container>
		</div>
	);
};

export default PracticeHeader;
