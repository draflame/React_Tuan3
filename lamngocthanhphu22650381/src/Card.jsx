import './css/Card.css'
import flag from './assets/img/Icon Button 73.png'
function Card( {data}){
    return(
        <>
            <div className="card-container" key={data.id}>
                <img src={data.img} alt="" />
                <div className="content">
                    <div className="content-title">
                        <span>{data.name}</span>
                        <img src={flag} alt="" />
                    </div>
                    <div className="time">{data.time} minutes</div>
                </div>
            </div>
        </>
    )
}
export default Card