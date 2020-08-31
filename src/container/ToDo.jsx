import React from 'react';

import Header from '../components/header';


const ToDo = props =>{
    return(
        <div className="container">
            
            <div className="row mt-4">
                <div className="col">
                    <h2 className="text-light text-center">My To do</h2>
                </div>
            </div>
            
            <div className="row mt-4">
                <div className="col">
                    <Header />
                </div>
            </div>
            
        </div>
    );
}

export default ToDo;