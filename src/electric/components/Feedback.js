import '../styles/feedback.css'

export default function Feedback() {

    const feedbacks = [
        {
            text: 'It\'s super efficient, no sweat, very stable and I get everywhere faster.',
            author: 'Luna, Berlin'
        },
        {
            text: 'My Dance bike just makes my commute light and fun.',
            author: 'James, Berlin'
        },
        {
            text: 'I don’t have to worry anymore about my old bike breaking down.',
            author: 'Travis, Hamburg'
        }
    ]

    function getFeedbacks() {
        return (
            feedbacks.map((feedback, index) => (
                <div className='feedback-item' key={index}>
                    <div className='feedback-text'>{feedback.text}</div>
                    <div className='feedback-author'>{feedback.author}</div>
                </div>
            )))
    }

    return (
        <div className='block-feedback'>
            <div className='title-feedback'>What our members say</div>
            <div className='feedback-list'>
                {getFeedbacks()}
            </div>
        </div>
    )
}
