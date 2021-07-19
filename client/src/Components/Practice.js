/*eslint linebreak-style: ["error", "windows"]*/
import React from "react";
import { useHistory } from "react-router-dom";
import "../Style/Home.css";
import PracticeFooter from "./PracticeFooter";
import PracticeHeader from "./PracticeHeader";
import { Icon } from "@iconify/react";
import clockIcon from "@iconify-icons/feather/clock";
import userIcon from "@iconify-icons/feather/user";

const Practice = () => {
	const history = useHistory();
	const newPage = () => history.push("/newpage");
	return (
		<div>
			<PracticeHeader text="Today's Practice" img={<Icon icon={clockIcon} />} />
			<div className="container">
				<div className="container-option">
					<h2 className="section__title">Let it Go</h2>
					<p>Let go of a small grudge that is holding you back</p>
					<div>
						<button>Gratitude</button>
						<button>Connection</button>
					</div>
				</div>
				<div className="practice-attribute">
					<div className="description">
						<h5>Description</h5>
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
						<h5>Author</h5>
						<div className="profile">
							<img alt="" src={<Icon icon={userIcon} />} />
							<Icon icon={userIcon} />
							<span>Firstname Lastname</span>
						</div>
					</div>
				</div>
			</div>
			<div>
				<button type="button" className="btn-practice" onClick={newPage}>
					Practice
				</button>
			</div>
			<div>
				<PracticeFooter />
			</div>
		</div>
	);
};

export default Practice;
