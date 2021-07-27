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

const Practice = ({ data, setNoteDisplaying }) => {
	const linkStyle = {
		width: "20rem",
		borderRadius: "20px",
	};
	console.log(data);
	const categories = data[0].category.split(",");
	console.log(categories);
	return (
		<div id="practice">
			<Container style={linkStyle} className="container">
				<Card className="mb-3" style={linkStyle}>
					<PracticeHeader data={data} />
					<Card.Body className="practice-top">
						<div>
							<Card.Title style={{ color: "white" }}>
								{data[0].title}{" "}
							</Card.Title>
							<p>{data[0].subtitle}</p>
							<div className="category">
								{categories.map((category, index) => {
									return (
										<span key={index}>
											&nbsp;
											<Badge
												className="badge"
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
							</div>
						</div>
					</Card.Body>
					<Card.Body className="practice-bottom">
						<div className="practice-attribute">
							<div className="description">
								<Card.Subtitle
									className="mb-2 text-muted"
									style={{ fontSize: "12px" }}
								>
									Description
								</Card.Subtitle>
								<p>{data[0].description}</p>
							</div>
							<div className="show-more">
								<Link to="#" style={{ textDecoration: "none" }}>
									<p>Show more</p>
									<hr style={{ backgroundColor: "#91919F" }}></hr>
								</Link>
							</div>
							<div className="author">
								<Card.Subtitle
									className="mb-2 text-muted"
									style={{ fontSize: "12px" }}
								>
									{" "}
									{data[0].author}
								</Card.Subtitle>
								<div id="profile">
									<Icon icon={userIcon} />
									{/* <span>{name.name}</span> */}
								</div>
							</div>
						</div>
						<div className="btn-practice">
							<Button
								onClick={() => {
									console.log("clicked button");
									setNoteDisplaying(false);
								}}
								type="button"
								variant="primary"
								size="sm"
								style={{
									color: "white",
									backgroundColor: "#6360FF",
									width: "100%",
									borderRadius: "7px",
								}}
							>
								Practice
							</Button>
						</div>
					</Card.Body>
					<Card.Footer>
						<PracticeFooter />
					</Card.Footer>
				</Card>
			</Container>
		</div>
	);
};
export default Practice;
