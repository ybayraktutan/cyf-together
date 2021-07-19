import React from "react";
import { useHistory, Link } from "react-router-dom";
import NoteHeader from "./NoteHeader";
import "../Style/Home.css";
import { Icon } from "@iconify/react";
import chevronLeft from "@iconify-icons/feather/chevron-left";

const Note = () => {
	const history = useHistory();
	const confirmation = () => history.push("/confirmation");
	return (
		<div>
			<NoteHeader img={<Icon icon={chevronLeft} />} text="Today's Practice" />
			<div className="container">
				<div className="container-option">
					<h2 className="section__title">Let it Go</h2>
					<p>Let go of a small grudge that is holding you back</p>
					<div>
						<button>Gratitude</button>
						<button>Connection</button>
					</div>
				</div>
			</div>
			<div className="text-area">
				<textarea value="" onChange="" />
			</div>
			<div>
				<Link to="/confirmation" onClick={confirmation}>
					<button type="button" className="btn-done">
						Done
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Note;
