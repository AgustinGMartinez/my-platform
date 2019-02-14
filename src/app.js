import React from 'react';
import { hot } from 'react-hot-loader/root';
import Layout from './components/Layout/Layout';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import auth from './reducers/auth';
import messages from './reducers/messages';
import logger from 'redux-logger';

const reducers = combineReducers({
	auth: auth,
	messages: messages
});

const composeEnhancers = compose;

const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(ReduxThunk, logger))
);

class App extends React.Component {
	componentDidMount() {
		console.log(process.env.NODE_ENV);
	}

	render() {
		return (
			<Provider store={store}>
				<Layout>
					{/* ROUTES, DONT TOUCH. Work solely on layout and pages */}
					{this.props.children}
				</Layout>
			</Provider>
		);
	}
}

export default hot(App);
