import '../styles/move-your-way.css'
import woman from "../image/woman.png";
import getBikes from "./getBikes";

export default function MoveYourWay() {
    return (
        <div className='block-items'>
            <div className='block-move-your-way'>
                <div className='move'>Move your way</div>
                <div className='desc'>Choose the electric ride that suits your lifestyle.</div>
                <div className='item-container'>
                    {getBikes()}
                </div>
                <div className='woman-container'>
                    <div className='block-just-ride'>
                        <div className='just-ride'>Just ride—we’ll take care of the rest</div>
                        <div className='just-ride-text'>Your local Concierge Team will repair or replace your ride
                            within 24 hours—all included with your subscription.
                        </div>
                        <div className='btn btn-secondary button-details' style={{height: "initial", marginTop: 39}}>See
                            details &#8594;</div>
                    </div>
                    <img src={woman} className='woman' alt='woman'/>
                </div>
            </div>
        </div>
    )
}
