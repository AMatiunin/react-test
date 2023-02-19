import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Electric from "./electric/Electric";
import Login from "./electric/components/Login";
import Edit from "./electric/components/Edit";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="react-test/login" element={<Login/>}/>
                <Route path="*" element={<Electric/>}/>
                <Route path="react-test/edit" element={<Edit/>}/>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

