import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";


import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://avatars.githubusercontent.com/u/102237909?s=280&v=4"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Bariflo Cybernetics</div>
							<div className="work-subtitle">
								Frontend Developer(Intern)
							</div>
							<div className="work-duration">Oct-2024 - Present</div>
						</div>

						<div className="work">
							<img
								src="https://th.bing.com/th/id/OLC.i8WCRip8q1cBWQ480x360?&rs=1&pid=ImgDetMain"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">QuackLabs technologies</div>
							<div className="work-subtitle">
								UI Developer(Intern)
							</div>
							<div className="work-duration">May-2024 - Sep-2024</div>
						</div>

						<div className="work">
							<img
								src="https://pages.edureka.co/hubfs/edureka.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Edureka Learning Center</div>
							<div className="work-subtitle">
								MERN Developer(Intern)
							</div>
							<div className="work-duration">Mar-2024 - Apr-2024</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
