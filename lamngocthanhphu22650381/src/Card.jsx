import './css/Card.css'
function Card( {data}){
    return(
        <>
            <div className="card-container" key={data.id}>
                <img src={data.img} alt="" />
                <div className="content">
                    <div className="content-title">
                        <span>{data.name}</span>
                    </div>
                    <div className="time">{data.time}</div>
                </div>
            </div>
        </>
    )
}
export default Card