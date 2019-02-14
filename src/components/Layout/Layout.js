import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Messages from './Messages/Messages';

class Layout extends React.Component {
	// DO LOGGIN CHECK HERE

	render() {
		return (
			<React.Fragment>
				<Navbar />
				<Messages message={this.props.message} />
				{this.props.children}
				<Footer />
			</React.Fragment>
		);
	}
}

export default Layout;
