import './styles/app.css';
import Header from './components/Header'
import Homepage from "./components/Homepage";
import HowWorks from "./components/HowWorks";
import MoveYourWay from "./components/MoveYourWay";
import Charge from "./components/Charge";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <div className='block-initial'>
                <Header/>
                <Homepage/>
            </div>
            <HowWorks/>
            <MoveYourWay/>
            <Charge/>
            <Feedback/>
            <Footer/>
        </div>
    );
}

export default App;
