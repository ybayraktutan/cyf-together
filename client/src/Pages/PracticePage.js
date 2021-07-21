import React from "react";
import { useHistory } from "react-router-dom";
import "../Style/Home.css";
import { Container, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PracticeFooter from "./PracticeFooter";
import PracticeHeader from "./PracticeHeader";
import { Icon } from "@iconify/react";
import clockIcon from "@iconify-icons/feather/clock";
import userIcon from "@iconify-icons/feather/user";

const PracticePage = () => {
	const history = useHistory();
	const note = () => history.push("/notes");
	return (
		<div>
			<Container>
				<Card className="mb-3">
					<PracticeHeader
						text="Today's Practice"
						img={<Icon icon={clockIcon} />}
					/>
					<Card.Body>
						<Card.Title>Let it Go</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">
							Let go of a small grudge that is holding you back
						</Card.Subtitle>
						<div>
							<button>Gratitude</button>
							<button>Connection</button>
						</div>
						<div className="practice-attribute">
							<div className="description">
								<Card.Subtitle className="mb-2 text-muted">
									Description
								</Card.Subtitle>
								<p>
									Negative words weigh much more in our brains and we will often
									ruminate over them far more than we remember or appreciate
									positive words and experiences.
								</p>
							</div>
							<div className="show-more">
								<p>Show more</p>
							</div>
							<div className="author">
								<Card.Subtitle className="mb-2 text-muted">
									Author
								</Card.Subtitle>
								<div className="profile">
									<img alt="" src={<Icon icon={userIcon} />} />
									<Icon icon={userIcon} />
									<span>Firstname Lastname</span>
								</div>
							</div>
						</div>
						<Button type="button" className="btn-practice" onClick={note}>
							Practice
						</Button>
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
