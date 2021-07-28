/*eslint linebreak-style: ["error", "windows"]*/
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Button, Card, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PracticeFooter from "./PracticeFooter";
import PracticeHeader from "./PracticeHeader";
import { Icon } from "@iconify/react";
import userIcon from "@iconify-icons/feather/user";
import "../Style/Practice.css";

const Practice = ({ data, setPracticeDisplaying }) => {
	// const linkStyle = {
	// 	width: "20rem",
	// 	borderRadius: "20px",
	// };

	const categories = data[0].category.split(",");

	return (
		<Container
			fluid
			className="practice-container"
			style={{ margin: "0", padding: "0" }}
		>
			<Card
				className="mb-3 practice-top"
				variant="default"
				style={{ backgroundColor: "#6360FF", border: "none" }}
			>
				<PracticeHeader data={data} />
				<Card.Body className="practice-title">
					<Card.Title as="h2">{data[0].title}</Card.Title>
					<Card.Text as="p">{data[0].subtitle}</Card.Text>
					{categories.map((category, index) => {
						return (
							<span key={index}>
								&nbsp;
								<Badge
									className="category"
									pill
									bg="secondary"
									text="light"
									style={{ backgroundColor: "#F1F1FA" }}
								>
									{category}
								</Badge>{" "}
							</span>
						);
					})}
				</Card.Body>
			</Card>
			<Card className="practice-bottom" style={{ backgroundColor: "#FCFCFF" }}>
				<Card.Body className="description">
					<Card.Title as="h4" className="mb-2 text-muted">
						Description
					</Card.Title>
					<Card.Text as="p">{data[0].description}</Card.Text>
					<Link to="#" style={{ textDecoration: "none" }}>
						<Card.Title className="mb-2 text-muted">
							<h4>Show more</h4>
						</Card.Title>
						<hr style={{ backgroundColor: "#91919F" }}></hr>
					</Link>
					<Card.Title className="mb-2 text-muted author">Author</Card.Title>
					<Card.Title className="profile">
						<Icon icon={userIcon} />
						<span>{data[0].author}</span>
					</Card.Title>
					<Button
						onClick={() => {
							console.log("clicked button");
							setPracticeDisplaying(false);
						}}
						type="button"
						variant="default"
						className="btn-practice"
						style={{
							color: "white",
							backgroundColor: "#6360FF",
							width: "100%",
							fontSize: "3vw",
							borderRadius: "20px",
							padding: "2vh",
						}}
					>
						Practice
					</Button>
				</Card.Body>
				<PracticeFooter />
			</Card>
		</Container>
	);
};
export default Practice;
