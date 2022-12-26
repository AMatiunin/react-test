import '../styles/how-works.css'
import bikes from '../image/bikes.png'

export default function HowWorks() {
    return (
        <div className='how-works-container'>
            <div className='block-how-works'>
                <div className="how">How it works</div>
                <ol className="list-group list-group-numbered how-table">
                    <li className="list-group-item">Pick your city</li>
                    <li className="list-group-item">Choose your ride</li>
                    <li className="list-group-item">Delivery to your door</li>
                    <li className="list-group-item">Ride freely</li>
                </ol>
                <button type="button" className="btn btn-primary button-start-now button-how-works">Start now</button>
            </div>
            <img src={bikes} className='bikes' alt='bikes'/>
        </div>
    )
}

