import React from 'react';
import Banner from '../Banner/Banner';
import Directors from '../Directors/Directors';
import Services from '../services/Services';
import Tmedic from '../Tmedic/Tmedic';


const Home = () => {
   
    return (
        <div id="home">
            <div>
                
            </div>
            <div className="">
                <Banner></Banner>
            </div>
            <div>
                <Services></Services>
            </div>
           <div>
                <Tmedic></Tmedic>
           </div>
           <div>
               <Directors></Directors>
           </div>
        </div>
    );
};

export default Home;