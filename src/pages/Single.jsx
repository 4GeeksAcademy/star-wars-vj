// Import necessary hooks and components from react-router-dom and other libraries.
import { Link, useParams } from "react-router-dom";  // To use link for navigation and useParams to get URL parameters
import PropTypes from "prop-types";  // To define prop types for this component
import rigoImageUrl from "../assets/img/rigo-baby.jpg"  // Import an image asset
import useGlobalReducer from "../hooks/useGlobalReducer";  // Import a custom hook for accessing the global state
import { useEffect, useState } from "react";
import { getElement } from "../services/api";

// Define and export the Single component which displays individual item details.
export const Single = props => {
  // Access the global state using the custom hook.
  const { store } = useGlobalReducer()

  // Retrieve the 'theId' URL parameter using useParams hook.
  const { idElement, typeElement } = useParams()

  const [element, setElement] = useState(null)

  const handleGetElement = async (type, id) => {
    const element = await getElement(type, id)
    setElement(element)
  }

  useEffect(() => {

    handleGetElement(typeElement, idElement)
    console.log(typeElement, idElement);



  }, [idElement, typeElement])

  return (
    <div className="container text-center">
      {/* Display the title of the todo element dynamically retrieved from the store using theId. */}
      <h1 style={{color: "white"}}>Vista de detalle <br/> <br/>
        {element && (
          <div className="card mb-3 single-card">
            <div className="row g-0">
              <div className="col-md-4 d-flex align-items-center">
                <img
                  src="https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg?s=612x612&w=0&k=20&c=hnh2OZgQGhf0b46-J2z7aHbIWwq8HNlSDaNp2wn_iko="
                  className="img-fluid rounded-start single-card-img"
                  alt={element.properties?.name}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title single-card-title">
                    {element.properties?.name}
                  </h3>

                  <div className="card-text single-card-text">
                    {/* People */}
                    {typeElement === 'people' && (
                      <>
                        <div><span className="single-card-property">Height:</span> {element.properties?.height} cm</div>
                        <div><span className="single-card-property">Mass:</span> {element.properties?.mass} kg</div>
                        <div><span className="single-card-property">Gender:</span> {element.properties?.gender}</div>
                      </>
                    )}

                    {/* Planets */}
                    {typeElement === 'planets' && (
                      <>
                        <div><span className="single-card-property">Population:</span> {element.properties?.population}</div>
                        <div><span className="single-card-property">Terrain:</span> {element.properties?.terrain}</div>
                        <div><span className="single-card-property">Climate:</span> {element.properties?.climate}</div>
                      </>
                    )}

                    {/* Vehicles */}
                    {typeElement === 'vehicles' && (
                      <>
                        <div><span className="single-card-property">Model:</span> {element.properties?.model}</div>
                        <div><span className="single-card-property">Manufacturer:</span> {element.properties?.manufacturer}</div>
                        <div><span className="single-card-property">Class:</span> {element.properties?.vehicle_class}</div>
                        <div><span className="single-card-property">Cost:</span> {element.properties?.cost_in_credits} credits</div>
                        <div><span className="single-card-property">Max Speed:</span> {element.properties?.max_atmosphering_speed} km/h</div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </h1>

      <hr className="my-4" />  {/* A horizontal rule for visual separation. */}

      {/* A Link component acts as an anchor tag but is used for client-side routing to prevent page reloads. */}
      <Link to="/">
        <span className="btn btn-warning btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};

// Use PropTypes to validate the props passed to this component, ensuring reliable behavior.
Single.propTypes = {
  // Although 'match' prop is defined here, it is not used in the component.
  // Consider removing or using it as needed.
  match: PropTypes.object
};
