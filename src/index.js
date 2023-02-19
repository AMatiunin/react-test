import React from 'react';
import ReactDOM from 'react-dom/client';
import {Routes, Route, HashRouter} from "react-router-dom";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Electric from "./electric/Electric";
import Login from "./electric/components/Login";
import Edit from "./electric/components/Edit";

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="login" element={<Login/>}/>
                <Route path="*" element={<Electric/>}/>
                <Route path="edit" element={<Edit/>}/>
            </Routes>
        </HashRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

