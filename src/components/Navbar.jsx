import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import FavoritesModal from '/src/components/FavoritesModal.jsx';


export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<nav className="navbar navbar-light" style={{ backgroundColor: "black", marginBottom: "50px" }}>
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">

						<img style={{ width: "125px" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" />
					</span>
				</Link>
				<div className="ml-auto">
					<div className="ml-auto">
						<FavoritesModal />
					</div>
				</div>
			</div>
		</nav>
	);
};