import React from 'react';
import './Welcome.css';
import logo1 from '../Images/logo.jpg';
import fruit from '../Images/fruits.jpg';
import berries from '../Images/Dry-berries.jpg';
import veggetable from '../Images/vegetables.jpg';
import seed from '../Images/seeds.jpg';
import icecream from '../Images/ice-cream.jpg';
import juice from '../Images/juice.jpg';
import Facebook from '../Images/media1.jpg';
import Insta from '../Images/media2.jpg';
import Twitter from '../Images/media3.png'; 
import youtube from '../Images/media4.png';
import phonepe from '../Images/payment1.jpg';
import Googlepay from '../Images/payment2.jpg';
import paytm from '../Images/payment3.jpg';
import Paypal from '../Images/payment4.jpg';



 function Welcome() {


  return (
    <div>
     <div className='FirstDiv'>
      <img className='logo' src={logo1} alt='logo'/>
      <h1 className='heading'>Green's Fruit & Vegtable Shop</h1>
     </div>


     <div className='mainDiv2'>
        <div className='twoDiv'>
         <h1 className='heading1'>Fruit's</h1>
         <img className='logo1' src={fruit}  alt='fruit'/>
         <button className='button'> To Click</button>
        </div>

        <div className='twoDiv'>
         <h1 className='heading1'>Sun dry fruit's & berrie's</h1>
         <img className='logo1' src={berries} alt='berries'/>
         <button className='button'> To Click</button>
        </div>

        <div className='twoDiv'>
         <h1 className='heading1'> veggie's</h1>
         <img className='logo1' src={veggetable} alt='veggetable'/>
         <button className='button'> To Click</button>
        </div>

        <div className='twoDiv'>
         <h1 className='heading1'>seed's</h1>
         <img className='logo1' src={seed} alt='seed'/>
         <button className='button'> To Click</button>
        </div>

         <div className='twoDiv'>
         <h1 className='heading1'>ice cream's</h1>
         <img className='logo1' src={icecream} alt='icecream'/>
         <button className='button'> To Click</button>
        </div>

        <div className='twoDiv'>
         <h1 className='heading1'>Juice's</h1>
         <img className='logo1' src={juice} alt='juice'/>
         <button className='button'> To Click</button>
        </div>
     </div>

     <div className='thiredDiv'>
      <div className='threeDiv'>
         <h1 className='heading1'>information</h1>
         <h2 className='hover'>Return Policy</h2>
         <h2 className='hover'>Terms&Condition</h2>
         <h2 className='hover'>Contact Us</h2>
         <h2 className='hover'>About Us</h2>
      </div>

      <div className='threeDiv'>
         <h1 className='heading1'>Stay connect</h1>
        
         <h2 className='hover'>Facebook <img className='logo2' src={Facebook} alt="facebook" /></h2>
         <h2 className='hover'>Instagram <img className='logo2' src={Insta} alt="insta" /></h2>     
         <h2 className='hover'>Twitter <img className='logo2' src={Twitter} alt="twitter" /></h2>
         <h2 className='hover'>You Tube <img className='logo2' src={youtube} alt="youtube" /></h2>
        
      </div>

      <div className='threeDiv'>
         <h1 className='heading1'>We Accept</h1>
         <h2 >phonepe <img className='logo2' src={phonepe} alt="phonepe" /></h2>
         <h2 >Googlepay <img className='logo2' src={Googlepay} alt="Googlepay" /></h2>
         <h2 >paytm <img className='logo2' src={paytm} alt="paytm" /></h2>
         <h2 >Paypal <img className='logo2' src={Paypal} alt="paypal" /></h2>
         
      </div>

      <div className='fourthDiv'> 
         <p>CopyRight&copy;2023,The Green's Fruit &Vegtable Shop.All right Reserved.</p>
      </div>
     </div>
     </div>
   
  )
}

export default Welcome