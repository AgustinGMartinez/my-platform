import React from 'react';
import PropTypes from 'prop-types';
import s from './Messages.css';
import { connect } from 'react-redux';

class Message extends React.Component {
	static propTypes = {
		message: PropTypes.shape({
			show: PropTypes.bool.isRequired,
			type: PropTypes.string
		}).isRequired
	};

	componentDidUpdate() {
		if (this.props.message.show) $('#layoutMessageAlert').addClass('show');
		else $('#layoutMessageAlert').removeClass('show');
	}
	render() {
		const msgOpts = this.props.message;
		return (
			<div
				id="layoutMessageAlert"
				className={`alert alert-${msgOpts.type} fade ${s.floating}`}
				role="alert"
			>
				{msgOpts.message}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		message: state.messages
	};
};

export default connect(mapStateToProps)(Message);
