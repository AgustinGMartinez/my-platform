import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
	logout = e => {
		e.preventDefault();
		console.log('logout here');
	};

	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<Link className="navbar-brand" to="/">
					Flame
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<Link className="nav-link" to="/carrito">
								Carrito{' '}
								<span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item active">
							<Link className="nav-link" to="/pagar">
								Pagar <span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item active">
							<Link className="nav-link" to="/ingresar">
								Ingresar{' '}
								<span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item active" onClick={this.logout}>
							<a className="nav-link" href="#">
								Salir <span className="sr-only">(current)</span>
							</a>
						</li>
					</ul>
					<form className="form-inline my-2 my-lg-0">
						<input
							className="form-control mr-sm-2"
							type="search"
							placeholder="Buscar"
							aria-label="Buscar"
						/>
						<button
							className="btn btn-outline-success my-2 my-sm-0"
							type="submit"
						>
							Buscar
						</button>
					</form>
				</div>
			</nav>
		);
	}
}

export default Navbar;
