import React from "react";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Style/Reflections.css";

const ReflectionItem = (props) => {
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
							<p style={({ fontSize: "13px" }, { fontWeight: "bold" })}>
								{props.title}
							</p>
						</div>
						<div>
							<p>{props.date}</p>
						</div>
					</Badge>
				</li>
			</Link>
		</div>
	);
};

export default ReflectionItem;
