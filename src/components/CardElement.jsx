
const CardElement = ({name, type, id}) => {

    return (
        <div className="card" style={{ width: "10rem" }}>
            <img src="https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg?s=612x612&w=0&k=20&c=hnh2OZgQGhf0b46-J2z7aHbIWwq8HNlSDaNp2wn_iko=" className="card-img-top" alt="..." />
            <div className="card-body" style={{backgroundColor: "#8A8A8A"}}>
                <h5 className="card-title">{name}</h5>
                <a href={"/single/" + type + "/" + id} className="btn btn-warning">More</a>
            </div>
        </div>
    )

}



export default CardElement