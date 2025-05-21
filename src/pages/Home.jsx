import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getListElements } from "../services/api.js";
import CardElement from "../components/CardElement.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()


	const handleGetListElements = async (type, action) => {
			const list = await getListElements(type)
			dispatch({ type: action, payload: list })
		}


	useEffect(() => {

		handleGetListElements("people", "get_people")

		handleGetListElements("planets", "get_planets")

		handleGetListElements("vehicles", "get_vehicles")

	}, [])

	return (
		<div className="mt-5">

			{/* CHARACTERS */}
			<h2>Characters</h2>
			<div>
				<ul className="d-flex">
					{
						store.people.map((people) => (
							<li key={people.uid}>
								{/* INICIO CARD */}
								<CardElement name={people.name} id={Number(people.uid)} type={"people"}/>
								{/* FIN CARD */}
							</li>
						))
					}
				</ul>

			</div>

			{/* PLANETS */}
			<h2>Planets</h2>
			<div>
				<ul className="d-flex">
					{
						store.planets.map((planets) => (
							<li key={planets.uid}>
								{/* INICIO CARD */}
								<CardElement name={planets.name} id={planets.uid} type={"planets"}/>
								{/* FIN CARD */}
							</li>
						))
					}
				</ul>

			</div>

			{/* VEHICLES */}
			<h2>Vehicles</h2>
			<div>
				<ul className="d-flex">
					{
						store.vehicles.map((vehicles) => (
							<li key={vehicles.uid}>
								{/* INICIO CARD */}
								<CardElement name={vehicles.name} id={vehicles.uid} type={"vehicles"}/>
								{/* FIN CARD */}
							</li>
						))
					}
				</ul>

			</div>


		</div>
	);
}; 