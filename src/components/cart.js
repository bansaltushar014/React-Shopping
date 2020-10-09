import React, { useEffect, useState } from 'react';
import formatCurrency from '../helper/currency';
import Fade from 'react-reveal/Fade';

function Cart(props) {

    const [proceed, setProceed] = useState(false);

    // useEffect(() =>{
       
    // },[]) 

    console.log(props.cardItems);

    const funProceed = () => {
        setProceed(true);
    }

    return (
        <>
        <ul class="collection">
            {
                props.cardItems.map((item, index) => {
                    return <Fade left cascade>
                    <li class="collection-item avatar">
                    <img style={{ maxWidth: 30 }} src={item.image} alt="" class="circle"/>
                    <span class="title">Title {item.title}</span>
                    <p>Price {formatCurrency(item.price)} * {item.count} = {formatCurrency(item.price * (item.count))}<br/>
                    <a class="btn-floating btn-small waves-effect waves-light red" onClick={() => {props.removeFromCart(item._id)}}><i class="material-icons">clear</i></a>
                    </p>
                  </li>
                  </Fade>
                 })
             }
        </ul>     
             
             Total : {formatCurrency(props.cardItems.reduce((a, c) => a + c.price * c.count, 0))} <br/>
            

            { props.cardItems.length && 
                <button onClick={funProceed}> Proceed </button>             
            }

            {proceed &&
                <div class="row">
                <Fade right cascade>
                <form class="col s12">
                 
                  <div class="row">
                    <div class="input-field col s12">
                      <input id="email" type="email" class="validate" />
                      <label for="email">Email</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <input id="password" type="password" class="validate" />
                      <label for="password">Password</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <input id="Address" type="text" class="validate" />
                      <label for="Address">Address</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <input type="submit" value="Submit" />
                    </div>
                  </div>
                 
                </form>
                </Fade>
              </div>
            }
            
      
        </>
    );
}

export default Cart;

