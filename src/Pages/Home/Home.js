import React from 'react';
import TopLandingPage from './TopLandingPage/TopLandingPage';
import Items from './Items/Items';
import PetFoodies from './PetFoodies/PetFoodies';
import Medicine from './Medicine/Medicine';
import Discount from './Discount/Discount';
import Footer2 from './Footer/Footer2';

const Home = () => {
     return (
          <div className=''>
               <TopLandingPage></TopLandingPage>
               <div className='2xl:max-w-7xl 2xl:mx-auto xl:mx-auto xl:max-w-5xl lg:mx-20 md:mx-12 mx-5'>
                    <Items></Items>
                    <PetFoodies></PetFoodies>
                    <Medicine></Medicine>
                    
               </div>
               <Discount></Discount>
               <Footer2></Footer2>
          </div>
     );
};

export default Home;