import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			
			<div >
				<Link to="/add">
					<button className="btn btn-primary d-flex justify-content-end">Create new contact</button>
				</Link>
			</div>
		</nav>
	);
};
