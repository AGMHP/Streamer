import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const App = () =>{
    return(
        <div className="ui second pointing menu">
            <Link to="/" className="item">
                Streamer
            </Link>
            <h1>Hi, Maulik. Remember changing Google auth 2.0 before 12 Aug 2021.</h1>
            <div className ="right menu">
                <Link to="/" className="item">
                    Log IN
                </Link>
                <GoogleAuth />
            </div>
        </div>
    );
}

export default App;