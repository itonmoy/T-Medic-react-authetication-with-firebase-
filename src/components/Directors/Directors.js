import React from 'react';
import covid1 from "../../Images/Covid/covid1.jpg"
import covid2 from "../../Images/Covid/covid2.jpg"
import './Director.css'

const Directors = () => {
    return (
        <div className="bg-info mt-1">
            <h2>Special COVID Unit</h2>
             <div className="directorpic">
                 <div>
                 <img className="img-fluid" src={covid1} alt="" />
                 </div>
                 {/* <div>

                 <img src={covid2} alt="" />
                 </div> */}
                 </div>   
            <p>You will get upto 80% discount depend on your financial credit</p>
        </div>
    );
};

export default Directors;