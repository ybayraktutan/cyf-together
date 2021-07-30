/*eslint linebreak-style: ["error", "windows"]*/
import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Emoji } from "emoji-mart";
import "../Style/Confirmation.css";

const Confirmation = () => {
	
	return (
		<Container
			fluid
			className="confirmation-container"
			style={{ margin: "0", padding: "0" }}
		>
			<Card
				className="confirmation-top"
				variant="default"
				style={{ backgroundColor: "#6360FF", border: "none" }}
			>
				<Card.Body>
					<Card.Title as="h6">Great job</Card.Title>
					<Card.Title as="h2">Practice complete!</Card.Title>
					<Emoji
						set={"apple"}
						emoji={"star-struck"}
						size={150}
						fallback={(emoji, props) => {
							return emoji ? `:${emoji.short_names[0]}:` : props.emoji;
						}}
					/>
				</Card.Body>
			</Card>
			<Card
				className="confirmation-bottom"
				style={{ backgroundColor: "#F1F1FA", margin: "0", padding: "0" }}
			>
				<Link to="/home">
					<Button
						className="button-continue"
						type="button"
						variant="default"
						style={{
							color: "#FFF",
							backgroundColor: "#7DC579",
							padding: "30px",
							fontSize: "4vw",
							borderRadius: "20px",
						}}
					>
						Continue
					</Button>
				</Link>
			</Card>
		</Container>
	);
};


export default Confirmation;
