import Header from "./Header";
import '../styles/auth.css'

export default function Login() {
    return (
        <div className='block-initial'>
            <Header/>
            <div className='login-page'>Hi, here is login page!
                    <div className="login-form">
                        <input type="email" className="login-email" placeholder="email"/>
                        <input type="password" className="login-password" placeholder="password"/>
                        <button className='login-button' >Login</button>
                    </div>
            </div>
        </div>
    )
}
