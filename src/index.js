import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Electric from "./electric/Electric";
import Login from "./electric/components/Login";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<Login/>}/>
                <Route path="*" element={<Electric/>}/>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

