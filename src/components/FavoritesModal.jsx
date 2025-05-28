import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

const FavoritesModal = () => {
    const [show, setShow] = useState(false);
    const { store, dispatch } = useGlobalReducer();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const removeFavorite = (index) => {
        const updatedFavorites = [...store.favorites];
        updatedFavorites.splice(index, 1);
        dispatch({
            type: "update_favorites",
            payload: updatedFavorites
        });
    };

    return (
        <>
            <Button variant="warning" onClick={handleShow}>
                Favorites <i className="fa-solid fa-heart"></i> {store.favorites.length}
            </Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton style={{ backgroundColor: "black", color: "#FFD700" }}>
                    <Modal.Title>Your Favorites</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: "black", color: "white" }}>
                   
                        <ul className="list-group">
                            {store.favorites.map((item, index) => (
                                <li 
                                    key={`${item.id}-${index}`} 
                                    className="list-group-item d-flex justify-content-between align-items-center"
                                    style={{ backgroundColor: "#333", color: "white" }}
                                >
                                    {item.name}
                                    <button 
                                        onClick={() => removeFavorite(index)}
                                        className="btn btn-sm"
                                        style={{color: "#D11111"}}
                                    >
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    
                </Modal.Body>
            </Modal>
        </>
    );
};


export default FavoritesModal