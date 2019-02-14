import Axios from 'axios';
import c from './constants';

// const token = window ? window.localStorage.getItem('token') : null;

const instance = Axios.create({
	baseURL: c.BASE_URL + '/api/',
	headers: {
		'Content-Type': 'application/json'
	}
});

instance.interceptors.request.use(
	function(config) {
		console.log(config);
		return config;
	},
	function(error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

instance.interceptors.response.use(
	function(response) {
		return response;
	},
	function(error) {
		console.log('Catched error');
	}
);

export default instance;
