import React from "react";
import "./WorkCard.css";

const WorkCard = (props) => {
	const sourceCode = () => {
		window.open(props.linkSite);
		console.log("click");
	};
	const siteCode = () => {
		window.open(props.linkGit);
		console.log("click");
	};

	return (
		<div className="container">
			<div className="row g-0">
				<div className="col-md-6">
					<div className="quadro">
						<img src={props.src} alt="teste" width={"100%"} />
					</div>
				</div>
				<div className="col-md-6">
					<h2 className="heading">{props.heading}</h2>
					<p className="description">{props.description}</p>
					<button className="project_button" onClick={sourceCode}>
						Application deployment
					</button>
					<button className="project_button" onClick={siteCode}>
						Source code on Github
					</button>
				</div>
			</div>
		</div>
	);
};

export default WorkCard;
