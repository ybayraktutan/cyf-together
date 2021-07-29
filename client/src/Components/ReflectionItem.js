import React from "react";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Style/Reflections.css";
import moment from "moment";
//import _ from "lodash";

const ReflectionItem = (props) => {

	let dated = moment(props.date).format("dddd, MMMM D");

	return (
		<div>
			<Link className="btn" to={`/reflects/${props.id}`}>
				<li className="item">
					<Badge
						className="badge-ref"
						pill
						bg="secondary"
						text="light"
						style={{ backgroundColor: "white" }}
					>
						<div>
							<p style={({ fontSize: "14px" }, { fontWeight: "bold" })}>
								{props.title}
							</p>
						</div>
						<div>
							<p style={{ color: "91919F" }}>
								{dated}
							</p>
						</div>
					</Badge>
				</li>
			</Link>
		</div>
	);
};

export default ReflectionItem;
