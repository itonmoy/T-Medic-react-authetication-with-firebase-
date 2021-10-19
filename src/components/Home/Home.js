import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../services/Services';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Home = () => {
   
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div className="">
                <Banner></Banner>
            </div>
            <div>
                <Services></Services>
            </div>
           <div>
               <Footer></Footer>
           </div>
        </div>
    );
};

export default Home;