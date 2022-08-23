import React from 'react';
import { Link } from "react-router-dom";

const WelcomePage = () => {
    return (
        <>
            <h1>Welcom New Page!</h1>
            <Link className="App-link" to="/">Back to Index Page</Link>
        </>
    )
}

export default WelcomePage;
