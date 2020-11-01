import React, { useEffect, useState } from 'react';
import formatCurrency from '../helper/currency';
import Fade from 'react-reveal/Fade';
import { connect } from "react-redux";
import { removeFromCart } from "../actions/productActions";

function Cart(CartData) {

  const [proceed, setProceed] = useState(false);

  useEffect(() => {
    // console.log(CartData)
  }, [])


  const funProceed = () => {
    setProceed(true);
  }

  return (
    <>
      <br /><br /><br />
      <ul class="collection">
        {CartData.CartData &&
          CartData.CartData.map((item, index) => {
            return <Fade left cascade>
              <li key={index} class="collection-item avatar">
                <div class="col s12 m12 ">
                  <div class="card-panel grey lighten-5 z-depth-1">
                    <div class="row valign-wrapper">
                      <div class="col s2">
                        <img style={{ maxWidth: 30, paddingTop: '1rem' }} src={item.image} alt="" class="circle" />
                      </div>
                      <div class="col s10">
                        <span class="black-text">
                          Title {item.title}
                        </span>
                      </div>
                    </div>
                  </div>


                  <div class="row valign-wrapper ">
                    <div class="col s2 offset-m1">
                      <a class="btn-floating btn-small waves-effect waves-light red"
                        onClick={() => { CartData.removeFromCart(CartData.CartData, item._id) }}>
                        <i class="material-icons">
                          clear
                        </i>
                      </a>
                    </div>
                    <div class="col s10">
                      <span class="black-text">
                        <p>Price {formatCurrency(item.price)} * {item.count} = {formatCurrency(item.price * (item.count))}<br />
                        </p>
                      </span>
                    </div>
                  </div>


                </div>


              </li>
            </Fade>
          })
        }
      </ul>

             Total : { CartData.CartData &&
        formatCurrency(CartData.CartData.reduce((a, c) => a + c.price * c.count, 0))
      } <br />


      { CartData.CartData &&
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


export default connect((state) => ({
  CartData: state.products.cartItems
}), { removeFromCart })(Cart);

