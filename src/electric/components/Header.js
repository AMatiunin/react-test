import logo from "../image/pngwing.com.png";

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-sm header">
                <div className="container-fluid">
                    <a className="nav-link" href="#/"><img className='logo' src={logo} alt='logo'/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto heads">
                            <li className="nav-item">
                                <a className="nav-link" href="#/edit">Edit example</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#/">Concierge</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#/">Rides</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#/">For Business</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#/">En</a>
                            </li>
                            <button type="button" className="btn btn-primary button-start-now">Start now</button>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
