import React, { Component } from 'react';
import s from './Login.css';
import api from '../../util/api';
import c from '../../util/constants';

export default class Login extends Component {
	state = {
		email: '',
		password: ''
	};

	onChangeInput = (e, input) => {
		this.setState({ [input]: e.target.value });
	};

	onLogin = e => {
		e.preventDefault();
		api.post('/signin', {
			data: this.state
		});
	};

	render() {
		return (
			<main className={s.main}>
				<div className={s.loginWrap}>
					<h2>Bienvenido</h2>

					<div className={s.form}>
						<input
							type="text"
							placeholder="Email"
							name="un"
							value={this.state.email}
							onChange={e => this.onChangeInput(e, 'email')}
						/>
						<input
							type="password"
							placeholder="Contraseña"
							name="pw"
							value={this.state.password}
							onChange={e => this.onChangeInput(e, 'password')}
						/>
						<button onClick={this.onLogin}> Ingresar </button>
						<a href="#">
							{' '}
							<p> ¿No tenés cuenta? Registrate </p>
						</a>
					</div>
				</div>
			</main>
		);
	}
}
