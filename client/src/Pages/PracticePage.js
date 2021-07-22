import React,{ useEffect,useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Container, Button, Card, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PracticeFooter from "../Components/PracticeFooter";
import PracticeHeader from "../Components/PracticeHeader";
import { Icon } from "@iconify/react";
import userIcon from "@iconify-icons/feather/user";
import "../Style/Practice.css";
//import { Database } from "react-feather";

const PracticePage = () => {
	const[data, setData] = useState([]);


	useEffect(() => {
	fetch("http://localhost:3100/api/practise", {
		method: "GET",
		// body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
			// Accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InlAZ21haWwuY29tIiwidXNlcmlkIjoiZjhlZDM4ODAtYTIxMi00NzBjLTgzYjUtZWRhZTNlNWUwNjQ0IiwidXNlcnR5cGUiOiJ1c2VyIiwiaWF0IjoxNjI2OTY1MDg1LCJleHAiOjE2MjY5Njg2ODV9.7DpSnToavXjmKJTb12EIIlZlwLDRvDbaOqVnmjbIrOA"
,
		},
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data[0].title);
			setData(data);
		});
}, []);

	const history = useHistory();
	const note = () => history.push("/notes");

	const linkStyle = {
		width: "20rem",
		borderRadius: "20px",
	};
  const test="Etesting all day baby";
  console.log(data);
	return (
		<div id="practice">
			{data[0] && (
				<Container style={linkStyle} className="container">
					<Card className="mb-3" style={linkStyle}>
						<PracticeHeader data={data}/>
						<Card.Body className="practice-top">
							<div>
								<Card.Title style={{ color: "white" }}>{data[0].title} </Card.Title>
			<p>{data[0].subtitle}</p>
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
										{data[0].description}
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
			)}
		</div>
	);
};

export default PracticePage;
