import React from "react";
import {Routes, Route } from "react-router-dom";
import {IndexPage, NotFoundPage, AboutPage, RepoPage } from "./pages";
import {default as Layout} from "./layouts";
import './App.css';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<IndexPage />}/>   
                <Route path="/about" element={<AboutPage />}/>    
                <Route path="/repo" element={<RepoPage />}/>          
            </Route>   
            <Route path="/" element={<Layout />}>         
                <Route path="*" element={<NotFoundPage />}/>
            </Route>  
        </Routes>
    )
}

export default App;