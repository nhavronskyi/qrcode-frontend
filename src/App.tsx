import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="/MainPage" element={<MainPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
