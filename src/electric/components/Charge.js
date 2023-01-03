import {useState} from "react";
import '../styles/charge.css'
import getBikes from "./getBikes";

export default function HowWorks() {
    const cities = ['Berlin', 'Hamburg', 'Munich', 'Paris', 'Vienna']
    const checks = [
        'Repairs within 24 hours',
        'Replacements in case of theft',
        'App to track your rides',
        'Cancel anytime'
    ]
    const faqs = [
        {
            question: 'How does Dance work?',
            answer: 'You pay for a rent e-vehicle and drive'
        },

        {
            question: 'How do I charge my Dance eride?',
            answer: 'Just switch to another vehicle'
        },
        {
            question: 'What accessories can I use with my ebike and emoped?',
            answer: 'Maybe flashlight and phone holder'
        },
        {
            question: 'How do repairs work?',
            answer: 'Our skilled techs repair all for you'
        },
        {
            question: 'Can I test the ride before buying?',
            answer: 'Yeah, sure'
        },
        {
            question: 'How do I cancel my membership?',
            answer: 'In app always can cancel membership'
        },
        {
            question: 'What happens if my vehicle gets stolen?',
            answer: 'You need to get in mobile app and press button `vehicle stolen`'
        }
    ]

    const showAnswer = (index) => {
        let answer = document.getElementById(index).style
        answer.display = (answer.display === 'none')? 'initial' : 'none'
    }

    function renderFaq() {
        return (
            faqs.map((faq, index) => (
                <div className='faq-item' key={index}>
                    <div className='faq-item' onClick={() => showAnswer(index)}>&#10133; &nbsp; {faq.question}</div>
                    <div className='faq-answer' style={{display: "none"}} id={index}>{faq.answer}</div>
                </div>
            )))
    }

    function checkList() {
        return (
            checks.map((check, index) => (
                <div className='check-item' key={index}>&#10004; {check}</div>
            )))
    }

    function renderCities() {
        return (
            cities.map((city, index) => (
                <div key={index}>{city}</div>
            )))
    }

    return (
        <div className='block-charge'>

            <div className='block-man'>
                <div className='block-your-city'>
                    <div className='your-city'>Your city is our city</div>
                    <div className='our-rides'>Our rides are available in 5 European cities — and counting.</div>
                    <button type="button" className="btn btn-primary button-start-now button-charge">Start now</button>
                    <div className='want-see'>Want to see Dance in your city?</div>
                </div>
                <div className='cities'>
                    {renderCities()}
                </div>
            </div>

            <div className='block-move-your-way'>
                <div className='item-container'>
                    <div className='your-in-charge'>
                        <div className='your'>You’re in charge</div>
                        <div className='your-subscription'>Your subscription is fully flexible—with free cancelation at
                            any time and no sign-up fees.
                        </div>
                        <div className='your-list'>
                            {checkList()}
                        </div>
                    </div>
                    {getBikes(60, '#F5F5F7')}
                </div>
            </div>

            <div className='block-want-more'>
                <div className='want-container'>
                    <div className='want'>Want to know more?</div>
                    <div className='btn btn-secondary button-details' style={{height: 39, marginTop: 53}}>Learn
                        more &#8594;</div>
                </div>
                <div className='faq-list'>
                    {renderFaq()}
                </div>
            </div>
        </div>
    )
}

