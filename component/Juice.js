import React from 'react'
import {useState} from 'react'
import './Fruits.css'
import fruit from '../Images/fruits.jpg'
import fruit1 from '../Images/juice1.jpg'
import fruit2 from '../Images/juice2.jpg'
import fruit3 from '../Images/juice3.png'
import fruit4 from '../Images/juice4.jpg'
import fruit5 from '../Images/juice5.jpg'
import fruit6 from '../Images/juice6.jpg'
import fruit7 from '../Images/juice7.jpg'
import fruit8 from '../Images/juice8.jpg'
import logo1 from '../Images/logo.jpg';
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






export default function Juice() {
    const [item1,updateitem1]=useState({count:0});
    const [item2,updateitem2]=useState({count:0});
    const [item3,updateitem3]=useState({count:0});
    const [item4,updateitem4]=useState({count:0});
    const [item5,updateitem5]=useState({count:0});
    const [item6,updateitem6]=useState({count:0});
    const [item7,updateitem7]=useState({count:0});
    const [item8,updateitem8]=useState({count:0});

    
    function handlebuttonIncrement1(){
      updateitem1({count:item1.count+1})
    }
    function handlebuttonIncrement2(){
      updateitem2({count:item2.count+1})
    }
    function handlebuttonIncrement3(){
      updateitem3({count:item3.count+1})
    }
    function handlebuttonIncrement4(){
      updateitem4({count:item4.count+1})
    }
    function handlebuttonIncrement5(){
      updateitem5({count:item5.count+1})
    }
    function handlebuttonIncrement6(){
      updateitem6({count:item6.count+1})
    }
    function handlebuttonIncrement7(){
      updateitem7({count:item7.count+1})
    }

    function handlebuttonIncrement8(){
      updateitem8({count:item8.count+1})
    }
  


    function handlebuttonDecrement1(){
      updateitem1({count:item1.count-1})
    }
    function handlebuttonDecrement2(){
      updateitem2({count:item2.count-1})
    }
    function handlebuttonDecrement3(){
      updateitem3({count:item3.count-1})
    }
    function handlebuttonDecrement4(){
      updateitem4({count:item4.count-1})
    }
    function handlebuttonDecrement5(){
      updateitem5({count:item5.count-1})
    }
    function handlebuttonDecrement6(){
      updateitem6({count:item6.count-1})
    }
    function handlebuttonDecrement7(){
      updateitem7({count:item7.count-1})
    }
    function handlebuttonDecrement8(){
      updateitem8({count:item8.count-1})
    }

    function total1(){
      console.log({count:item1.count*200})
    }
    function total2(){
      console.log({count:item2.count*170})
    }
    function total3(){
      console.log({count:item3.count*240})
    }
    function total4(){
      console.log({count:item4.count*190})
    }
    function total5(){
      console.log({count:item5.count*350})
    }
    function total6(){
      console.log({count:item6.count*300})
    }
    function total7(){
      console.log({count:item7.count*280})
    }
    function total8(){
        console.log({count:item8.count*280})
      }
  
  return (
    <div>
      <div className='FruitDiv1'>
        <img className='fruitlogo1' src={juice} alt="fruit" />
        <h1>Juice's <img className='logo' src={logo1} alt='logo'/></h1>
        
      </div>

      <div className='FruitDiv2'>
       <div className='firstfruit'>
         <img className='fruitlogo2' src={fruit1} alt="fruit" />
         <h1>Pomegranate</h1>
         <h3>Rs.200</h3>
        <button className='button1' onClick={handlebuttonDecrement1}>-</button>
        <h2 className='button1'>{item1.count}</h2>
        <button className='button1' onClick={handlebuttonIncrement1}>+</button><br /><br />
        <button onClick={total1}>Add to Cart</button>
       </div>

       <div className='firstfruit'>
         <img className='fruitlogo2' src={fruit2} alt="fruit" />
         <h1>Burro(Orinoco)</h1>
         <h3>Rs.170</h3>
        <button className='button1' onClick={handlebuttonDecrement2}>-</button>
        <h2 className='button1'>{item2.count}</h2>
        <button className='button1' onClick={handlebuttonIncrement2}>+</button><br /><br />
        <button onClick={total2}>Add to Cart</button>
       </div>

       <div className='firstfruit'>
         <img className='fruitlogo2' src={fruit3} alt="fruit" />
         <h1>Graps</h1>
         <h3>Rs.240</h3>
        <button className='button1' onClick={handlebuttonDecrement3}>-</button>
        <h2 className='button1'>{item3.count}</h2>
        <button className='button1' onClick={handlebuttonIncrement3}>+</button><br /><br />
        <button onClick={total3}>Add to Cart</button>
       </div>

       <div className='firstfruit'>
         <img className='fruitlogo2' src={fruit4} alt="fruit" />
         <h1>Red Banana</h1>
         <h3>Rs.190</h3>
        <button className='button1' onClick={handlebuttonDecrement4}>-</button>
        <h2 className='button1'>{item4.count}</h2>
        <button className='button1' onClick={handlebuttonIncrement4}>+</button><br /><br />
        <button onClick={total4} >Add to Cart</button>
       </div>

       <div className='firstfruit'>
         <img className='fruitlogo2' src={fruit5} alt="fruit" />
         <h1>Strawberry</h1>
         <h3>Rs.350</h3>
        <button className='button1' onClick={handlebuttonDecrement5}>-</button>
        <h2 className='button1'>{item5.count}</h2>
        <button className='button1' onClick={handlebuttonIncrement5}>+</button><br /><br />
        <button onClick={total5}>Add to Cart</button>
       </div>

       <div className='firstfruit'>
         <img className='fruitlogo2' src={fruit6} alt="fruit" />
         <h1>Fig Fruit</h1>
         <h3>Rs.300</h3>
        <button className='button1' onClick={handlebuttonDecrement6}>-</button>
        <h2 className='button1'>{item6.count}</h2>
        <button className='button1' onClick={handlebuttonIncrement6}>+</button><br /><br />
        <button onClick={total6}>Add to Cart</button>
       </div>

       <div className='firstfruit'>
         <img className='fruitlogo2' src={fruit7} alt="fruit" />
         <h1>Avacado</h1>
         <h3>Rs.280</h3>
        <button className='button1' onClick={handlebuttonDecrement7}>-</button>
        <h2 className='button1'>{item7.count}</h2>
        <button className='button1' onClick={handlebuttonIncrement7}>+</button><br /><br />
        <button onClick={total7} >Add to Cart</button>
       </div>

       <div className='firstfruit'>
         <img className='fruitlogo2' src={fruit8} alt="fruit" />
         <h1>Morris Banana</h1>
         <h3>Rs.280</h3>
        <button className='button1' onClick={handlebuttonDecrement8}>-</button>
        <h2 className='button1'>{item8.count}</h2>
        <button className='button1' onClick={handlebuttonIncrement8}>+</button><br /><br />
        <button onClick={total8} >Add to Cart</button>
       </div>
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
    </div>
  )
}