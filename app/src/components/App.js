import './App.css';
import React from 'react';
import Header from './Header.js';
import Calculator from './Calculator';
import Result from './Result';

const App = () =>
{
    return (
        <div id='app'>
            <Header />
            <Calculator />
            <Result />
        </div>
    );
}

export default App;
