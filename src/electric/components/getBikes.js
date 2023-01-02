import bike1 from '../image/bike1.png'
import bike2 from '../image/bike2.png'
import bike3 from '../image/bike3.png'

export default function getBikes(maximumPrice = 100, background) {
    let bikes = [
        {
            image: bike1,
            price: 59,
            month: 39,
            type: 'Ebike',
            name: 'Dance One Step'
        },
        {
            image: bike2,
            price: 59,
            month: 39,
            type: 'Ebike',
            name: 'Dance One'
        },
        {
            image: bike3,
            price: 89,
            month: 39,
            type: 'Emoped',
            name: 'Dance Moped'
        }
    ]

    return (
        bikes.map((bike, index) => (
            (bike.price < maximumPrice) ?
                <div className="item" style={{background}} key={index}>
                    <img src={bike.image} className='bike-photo' alt='bike'/>
                    <div style={{display: "inline-block"}}>
                        <div className='price'>From €{bike.price} €{bike.month} /mo</div>
                        <div className='btn btn-primary button-offer'>Winter offer</div>
                    </div>
                    <div className='bike-name'>{bike.name}</div>
                    <div className='bike-type'>{bike.type}</div>
                    <div className='btn btn-secondary button-details'>See details &#8594;</div>
                </div>
                :
                null
        )))
}
