
const CardElement = ({name, type, id}) => {

    return (
        <div className="card" style={{ width: "10rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <a href={"/single/" + type + "/" + id} className="btn btn-primary">More</a>
            </div>
        </div>
    )

}



export default CardElement