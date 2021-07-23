/*eslint linebreak-style: ["error", "windows"]*/
import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Card, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Icon } from "@iconify/react";
import shareIcon from "@iconify-icons/feather/share";
import messageCircle from "@iconify-icons/feather/message-circle";
import { Emoji } from "emoji-mart";
import "../Style/Confirmation.css";

const Confirmation = () => {
	const linkStyle = {
		width: "22rem",
		height: "32rem",
		borderRadius: "20px",
	};

	const iconStyle = {
		fontWeight: "bold",
		fontSize: "18px",
	};

	return (
		<div id="confirm">
			<Container style={linkStyle} className="container">
				<Card className="mb-3" style={linkStyle}>
					<Card.Body className="confirm-top">
						<div className="top-contents">
							<div>
								<p style={{ fontSize: "11px" }}> Great job </p>
								<h5>Practice complete!</h5>
							</div>
							<div>
								<Emoji
									set={"apple"}
									emoji={"star-struck"}
									size={50}
									fallback={(emoji, props) => {
										return emoji ? `:${emoji.short_names[0]}:` : props.emoji;
									}}
								/>
							</div>
						</div>
					</Card.Body>
					<Card.Body className="confirm-bottom">
						<div>
							<Row id="share-icons">
								<Col>
									<Icon icon={shareIcon} style={iconStyle} />
									<p>Share practice</p>
								</Col>
								<Col>
									<Icon icon={messageCircle} style={iconStyle} />
									<p>Share your answer</p>
								</Col>
							</Row>
						</div>
						<div className="btn-confirm">
							<Link to="#">
								<Button
									type="button"
									variant="primary"
									size="sm"
									style={{
										color: "white",
										backgroundColor: "#7DC579",
										width: "100%",
										borderRadius: "7px",
										outline: "none",
										borderStyle: "none",
										borderColor: "none",
									}}
								>
									{" "}
									Continue
								</Button>
							</Link>
						</div>
					</Card.Body>
				</Card>
			</Container>
		</div>
	);
};

export default Confirmation;
