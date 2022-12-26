import '../styles/footer.css'
import arrow from '../image/arrow.png'

export default function Footer() {
    return (
        <footer>
            <div className='block-footer'>
                <div className='block-links'>
                    <div>
                        <div className='stay-to-speed-title'>Stay to speed</div>
                        <div className='stay-to-speed-text'>Sign up to get the latest Dance offers, updates, and tips
                            straight
                            to your inbox.
                        </div>
                        <div className="input-group">
                            <div className="email-form">
                                <input type="text" className="email-field" placeholder="your@email.ua"/>
                                <button className="button-arrow" type="submit"><img src={arrow} alt='arrow'/></button>
                            </div>
                        </div>
                        <div className='stay-to-description'>By checking this box, you allow Dance to collect data
                            relating
                            to
                            the Dance newsletter, including whether it has been opened and clicked through. For more
                            information.
                        </div>
                    </div>

                    <ul className="list-group footer-links">Menu
                        <a className="footer-item" href="/#">Rides</a>
                        <a className="footer-item" href="/#">Concierge</a>
                        <a className="footer-item" href="/#">For Business</a>
                        <a className="footer-item" href="/#">Start now</a>
                    </ul>

                    <ul className="list-group footer-links">Products
                        <a className="footer-item" href="/#">Ebikes</a>
                        <a className="footer-item" href="/#">Moped</a>
                    </ul>

                    <ul className="list-group footer-links">Company
                        <a className="footer-item" href="/#">About</a>
                        <a className="footer-item" href="/#">Blog</a>
                        <a className="footer-item" href="/#">Press</a>
                        <a className="footer-item" href="/#">FAQ</a>
                        <a className="footer-item" href="/#">Jobs</a>
                    </ul>

                    <ul className="list-group footer-links">Legal
                        <a className="footer-item" href="/#">Privacy</a>
                        <a className="footer-item" href="/#">Imprint</a>
                        <a className="footer-item" href="/#">Cancel subscription</a>
                    </ul>
                </div>
                <div className='author'>
                    HTML created by: <a href="https://github.com/AMatiunin/react-test">Matiunin Anton</a>
                </div>
            </div>
        </footer>
    )
}

