import React from 'react';

// IF YOU WANNA INCLUDE IMAGES DIRECTLY HERE, YOU WILL HAVE TO REQUIRE THEM IN MAIN.JS FIRST

class HTML extends React.Component {
	render() {
		return (
			<html>
				<head>
					<link rel="stylesheet" href="min.css" />
					<link
						rel="stylesheet"
						href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
						integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
						crossOrigin="anonymous"
					/>
				</head>
				<body>
					<div id="react-root">{this.props.children}</div>
					<script src="vendor-bundle.js" />
					<script src="main-bundle.js" />
				</body>
			</html>
		);
	}
}

export default HTML;
