import React from "react";

function article_1() {
	return {
		date: "14 November 2024",
		title: "Building a Responsive Portfolio with React and Tailwind CSS",
		description:
			"Creating a responsive and visually appealing portfolio site can help showcase your skills as a front-end developer. This article walks through using React and Tailwind CSS to build an interactive portfolio.",
		keywords: [
			"Responsive Portfolio",
			"React",
			"Tailwind CSS",
			"Front-end Development",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>

					<div className="article-news bg-light p-4 rounded">
						<h2 className="text-center mb-4">
							Top Resources for Front-End Developers
						</h2>

						<div className="resource-item mb-4">
							<h3 className="h5">
								<a
									href="https://css-tricks.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									1. CSS Tricks
								</a>
							</h3>
							<p>
								CSS-Tricks is a fantastic resource for learning
								CSS and front-end development as a whole. It has
								in-depth tutorials, tips, and tricks on CSS,
								JavaScript, and responsive design.
							</p>
							<p>
								<strong>Notable Articles:</strong>
							</p>
							<ul className="list-unstyled">
								<li>
									<a
										href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
										target="_blank"
										rel="noopener noreferrer"
									>
										"A Complete Guide to Flexbox" - Great
										for understanding how to use Flexbox for
										layout.
									</a>
								</li>
								<li>
									<a
										href="https://css-tricks.com/snippets/css/css-grid/"
										target="_blank"
										rel="noopener noreferrer"
									>
										"A Complete Guide to Grid" - Learn about
										CSS Grid, another powerful layout
										system.
									</a>
								</li>
							</ul>
						</div>

						<div className="resource-item mb-4">
							<h3 className="h5">
								<a
									href="https://www.smashingmagazine.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									2. Smashing Magazine
								</a>
							</h3>
							<p>
								Smashing Magazine provides insightful articles
								on front-end and UX design, with a focus on
								performance and accessibility.
							</p>
							<p>
								<strong>Notable Reads:</strong>
							</p>
							<ul className="list-unstyled">
								<li>
									<a
										href="https://www.smashingmagazine.com/2018/11/front-end-performance-checklist-2018/"
										target="_blank"
										rel="noopener noreferrer"
									>
										"Front-End Performance Checklist" - A
										guide for optimizing front-end code for
										performance.
									</a>
								</li>
								<li>
									<a
										href="https://www.smashingmagazine.com/2016/06/design-systems-components/"
										target="_blank"
										rel="noopener noreferrer"
									>
										"Design Systems and Components" - Learn
										about design systems and component-based
										design.
									</a>
								</li>
							</ul>
						</div>

						<div className="resource-item mb-4">
							<h3 className="h5">
								<a
									href="https://javascript.info"
									target="_blank"
									rel="noopener noreferrer"
								>
									3. JavaScript.info
								</a>
							</h3>
							<p>
								JavaScript.info offers a comprehensive guide to
								JavaScript. It’s well-suited for both beginners
								and advanced developers.
							</p>
							<p>
								<strong>Recommended Topics:</strong>
							</p>
							<ul className="list-unstyled">
								<li>
									<a
										href="https://javascript.info/intro"
										target="_blank"
										rel="noopener noreferrer"
									>
										"The Modern JavaScript Tutorial" - An
										in-depth JavaScript course covering
										everything from basics to advanced
										concepts.
									</a>
								</li>
								<li>
									<a
										href="https://javascript.info/async"
										target="_blank"
										rel="noopener noreferrer"
									>
										"JavaScript Promises and Async/Await" -
										Detailed explanations of asynchronous
										programming in JavaScript.
									</a>
								</li>
							</ul>
						</div>

						<div className="resource-item mb-4">
							<h3 className="h5">
								<a
									href="https://dev.to"
									target="_blank"
									rel="noopener noreferrer"
								>
									4. Dev.to
								</a>
							</h3>
							<p>
								Dev.to is a community-driven platform where
								developers share articles and tutorials. Topics
								cover various front-end trends and tools.
							</p>
							<p>
								<strong>Must-Read Articles:</strong>
							</p>
							<ul className="list-unstyled">
								<li>
									<a
										href="https://dev.to/rossbulat/react-patterns-5bje"
										target="_blank"
										rel="noopener noreferrer"
									>
										"React Patterns" - Common patterns for
										structuring React apps.
									</a>
								</li>
								<li>
									<a
										href="https://dev.to/mauriciocsantos/understanding-state-management-in-javascript-39c9"
										target="_blank"
										rel="noopener noreferrer"
									>
										"Understanding State Management in
										JavaScript" - Covers state management
										strategies, including Redux and Context
										API.
									</a>
								</li>
							</ul>
						</div>

						<div className="resource-item mb-4">
							<h3 className="h5">
								<a
									href="https://rachelandrew.co.uk"
									target="_blank"
									rel="noopener noreferrer"
								>
									5. CSS Layout Newsletters
								</a>
							</h3>
							<p>
								Check out the CSS Layout Newsletters by Rachel
								Andrew, which provide updates on the latest in
								CSS layouts, new specifications, and upcoming
								browser changes.
							</p>
							<p>
								<strong>Topics Covered:</strong> New CSS layout
								features, practical layout techniques, and
								updates on Flexbox and Grid.
							</p>
						</div>

						<div className="resource-item mb-4">
							<h3 className="h5">
								<a
									href="https://frontendfocus.co"
									target="_blank"
									rel="noopener noreferrer"
								>
									6. Frontend Focus
								</a>
							</h3>
							<p>
								Frontend Focus is a weekly newsletter with
								curated links to the latest front-end news,
								tutorials, and updates.
							</p>
							<p>
								<strong>Highlights:</strong> Recent updates in
								CSS and JavaScript, along with tool suggestions
								for a better development experience.
							</p>
						</div>

						<div className="resource-item mb-4">
							<h3 className="h5">
								<a
									href="https://caniuse.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									7. Can I use
								</a>
							</h3>
							<p>
								Can I use is an essential resource for checking
								browser support for HTML, CSS, and JavaScript
								features. It’s helpful for ensuring your designs
								work across different browsers and versions.
							</p>
						</div>

						<div className="resource-item mb-4">
							<h3 className="h5">
								<a
									href="https://2023.stateofjs.com/en-US/"
									target="_blank"
									rel="noopener noreferrer"
								>
									8. State of CSS & JavaScript Survey
								</a>
							</h3>
							<p>
								Every year, the State of CSS and State of
								JavaScript surveys provide insights into current
								trends, popular libraries, and what developers
								are using worldwide.
							</p>
							<p>
								<strong>Insights:</strong> Discover the latest
								tools in front-end, popular frameworks, and
								emerging trends. The survey results offer a
								snapshot of the current front-end ecosystem.
							</p>
						</div>
					</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "14 November 2024",
		title: "Integrating APIs in JavaScript for Dynamic Content",
		description:
			"Learn how to integrate external APIs into your JavaScript projects to fetch and display dynamic content, enhancing interactivity and functionality.",
		style: ``,
		keywords: [
			"API Integration",
			"JavaScript",
			"Front-end Development",
			"Dynamic Content",
		],
		body: (
			<React.Fragment>
				<div className="article-content">
					<h2>How APIs Enhance Web Development</h2>
					<p>
						APIs (Application Programming Interfaces) allow your
						JavaScript applications to communicate with external
						services and retrieve data dynamically. By integrating
						APIs, you can enhance the functionality and
						interactivity of your websites and web applications.
					</p>

					<p>
						Whether you’re fetching data from a weather API,
						displaying social media content, or integrating
						third-party services like Google Maps, APIs are
						fundamental for creating modern, dynamic web
						applications. In this article, we will walk through the
						steps to successfully integrate APIs into your
						JavaScript projects.
					</p>

					<img
						src="https://static.vecteezy.com/system/resources/previews/010/376/649/large_2x/api-application-programming-interface-in-the-shape-of-sphere-with-hexagon-pattern-in-wireframe-hand-software-development-tool-information-technology-and-business-concept-illustration-vector.jpg"
						alt="API Integration"
						className="apiImage"
						style={{height: "300px" , width: "100%"}}
					/>

					<h3>Step-by-Step Guide to API Integration in JavaScript</h3>
					<p>
						Integrating APIs in JavaScript involves a few key steps:
						understanding the API documentation, sending requests,
						and handling responses. Let’s look at how we can fetch
						data from an API and display it dynamically on a
						webpage.
					</p>

					<h4>1. Understanding the API Endpoint</h4>
					<p>
						Before you can integrate an API, you need to understand
						its endpoint, which is the URL that your application
						will send requests to. APIs often require specific query
						parameters or headers, so it’s important to read through
						the API documentation to know exactly what to include in
						your request.
					</p>

					<h4>2. Fetching Data Using JavaScript</h4>
					<p>
						To send a request to an API in JavaScript, you can use
						the built-in <code>fetch()</code> function. Here’s an
						example of how to use it to retrieve data from an API:
					</p>
					{/* <pre>
            <code>
              fetch('https://api.example.com/data')
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error('Error:', error));
            </code>
          </pre> */}

					<h4>3. Displaying Data on Your Webpage</h4>
					<p>
						Once the data is fetched, you can use JavaScript to
						manipulate the DOM (Document Object Model) and display
						the data on your webpage. Here’s an example:
					</p>
					{/* <pre>
            <code>
              fetch('https://api.example.com/data')
                .then(response => response.json())
                .then(data => {
                  document.getElementById('content').innerHTML = data.message;
                });
            </code>
          </pre> */}

					<h4>4. Handling Errors and Edge Cases</h4>
					<p>
						It’s important to handle errors properly when working
						with APIs. You should account for network errors,
						invalid responses, and any other issues that may arise.
						Always use <code>try-catch</code> or the{" "}
						<code>catch()</code> method to ensure that your app
						doesn’t crash unexpectedly.
					</p>

					<h3>Why API Integration Matters</h3>
					<p>
						API integration allows you to pull in external data,
						expand the functionality of your site, and offer a more
						engaging experience to your users. For example,
						integrating a weather API can allow users to get
						real-time weather updates, while integrating a payment
						API can help you process transactions securely.
					</p>

					<p>
						As web development continues to evolve, understanding
						how to integrate APIs is becoming increasingly important
						for front-end developers. By mastering this skill, you
						can build more interactive, dynamic, and feature-rich
						web applications.
					</p>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
