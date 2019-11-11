import React from 'react';
// import logo from '../logo.svg';
import '../styles/App.css';
import { TopNavBar } from './TopNavBar';
import { Main } from './Main';

function App() {
    // render()
        return (
            <div className="App">
                <TopNavBar/>
                <Main/>
            </div>
        );
}

export default App;
// extends Component