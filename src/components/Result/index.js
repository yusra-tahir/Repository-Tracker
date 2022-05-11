import React from 'react';
import './style.css';

export default function ({ result }) {
    return (
        <section>
            <div className="jumbotron text-center" id="title">
                <h1 id="titleH1">{result.forks}</h1>
                <br/>
            </div>
        </section>
    )
}
