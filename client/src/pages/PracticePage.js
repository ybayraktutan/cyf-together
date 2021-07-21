import React from "react";
import { useHistory, Link } from "react-router-dom";
import { Container, Button, Card, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PracticeFooter from "../Components/PracticeFooter";
import PracticeHeader from "../Components/PracticeHeader";
import { Icon } from "@iconify/react";
import userIcon from "@iconify-icons/feather/user";
import "../Style/Practice.css";

const PracticePage = () => {
	const history = useHistory();
	const note = () => history.push("/notes");

	const linkStyle = {
		width: "20rem",
		borderRadius: "20px",
	};

	return (
		<div id="practice">
			<Container style={linkStyle} className="container">
				<Card className="mb-3" style={linkStyle}>
					<PracticeHeader />
					<Card.Body className="practice-top">
						<div>
							<Card.Title style={{ color: "white" }}>Let it Go</Card.Title>
							<p>Let go of a small grudge that is holding you back</p>
							<div className="category">
								<span>
									<Badge
										className="badge"
										pill
										bg="secondary"
										text="light"
										style={{ backgroundColor: "#F1F1FA" }}
									>
										Gratitude
									</Badge>{" "}
								</span>
								&nbsp;
								<span>
									<Badge
										pill
										bg="secondary"
										text="light"
										style={{ backgroundColor: "#F1F1FA" }}
									>
										Connection
									</Badge>{" "}
								</span>
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
								<p>
									Negative words weigh much more in our brains and we will often
									ruminate over them far more than we remember or appreciate
									positive words and experiences.
								</p>
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
									Author
								</Card.Subtitle>
								<div id="profile">
									<Icon icon={userIcon} />
									{/* <span>{name.name}</span> */}
								</div>
							</div>
						</div>
						<div className="btn-practice">
							<Link to="/notes" onClick={note}>
								<Button
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
							</Link>
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

export default PracticePage;
