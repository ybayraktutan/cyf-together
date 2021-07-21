import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../Style/Home.css";

const PracticeHeader = (props) => {
	return (
		<div id="practice-header">
			<Container>
				<Row>
					<Col>
						<h5>{props.text}</h5>
					</Col>
					<Col>
						<div className="clock">
							<div>{props.img}</div>
							<div>
								<h5> 1min</h5>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default PracticeHeader;
