import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	// faTwitter,
	faGithub,
	faLinkedin,
	faInstagram,
	faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import INFO from "../../data/user";

import "./styles/socials.css";

const Socials = () => {
	return (
		<React.Fragment>
			<div className="socials-and-contact">
				{/* Left: Social Media Links */}
				<div className="socials">
					<div className="social">
						<a
							href={`https://wa.me/${7504252870}`}
							target="_blank"
							rel="noreferrer"
						>
							<div className="social-icon">
								<FontAwesomeIcon
									icon={faWhatsapp}
									className="social-icon"
								/>
							</div>
							<div className="social-text">
								Connect on WhatsApp
							</div>
						</a>
					</div>

					<div className="social">
						<a
							href="https://github.com/Biswajitpattanayak"
							target="_blank"
							rel="noreferrer"
						>
							<div className="social-icon">
								<FontAwesomeIcon
									icon={faGithub}
									className="social-icon"
								/>
							</div>
							<div className="social-text">Follow on GitHub</div>
						</a>
					</div>
					<div className="social">
						<a
							href="https://www.linkedin.com/in/biswajit-pattanayak-393717267"
							target="_blank"
							rel="noreferrer"
						>
							<div className="social-icon">
								<FontAwesomeIcon
									icon={faLinkedin}
									className="social-icon"
								/>
							</div>
							<div className="social-text">
								Follow on LinkedIn
							</div>
						</a>
					</div>

					<div className="social">
						<a
							href="https://www.instagram.com/a__s.t.r.a.n.g.e.r_"
							target="_blank"
							rel="noreferrer"
						>
							<div className="social-icon">
								<FontAwesomeIcon
									icon={faInstagram}
									className="social-icon"
								/>
							</div>
							<div className="social-text">
								Follow on Instagram
							</div>
						</a>
					</div>

					<div className="email">
						<div className="email-wrapper">
							<a
								href={`mailto:codecrafter.biswajit@gmail.com`}
								target="_blank"
								rel="noreferrer"
							>
								<div className="social-icon">
									<FontAwesomeIcon icon={faEnvelope} />
								</div>
								<div className="social-text">
									{INFO.main.email}
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Socials;
