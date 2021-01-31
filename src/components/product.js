import React, {useEffect, useState} from 'react';
import formatCurrency from '../helper/currency';
import Fade from 'react-reveal/Fade';
import { connect } from "react-redux";
import { fetchProducts, getAddtoCardId } from "../actions/productActions";

function Product(Products) {

    const productData = Products.Products;

    useEffect(() =>{
        // Invoke the Fetch product on first call
        Products.fetchProducts();
    },[]) 

    useEffect(() =>{
        console.log(Products);     
    }) 

    return (
        <div class="row">
            { productData &&
                productData.map((item, index) => {
                    return <div key={index} class="col s12 m4">
                        <Fade top cascade>
                        <div>
                            <div class="card" style={{ maxWidth: 300 }}>
                                <div class="card-image waves-effect waves-block waves-light">
                                    <img class="activator" style={{ maxWidth: 350 }} src={item.image} />    
                                </div>
                                <div class="card-content">
                                    <h6 class="card-title activator grey-text text-darken-4">  {item.title}<i class="material-icons right">more_vert</i></h6>
                                    <div class="row">
                                    <div class="col s6">
                                    <p><a href="#">{formatCurrency(item.price)}</a></p>
                                    </div>
                                    <div class="col s6">
                                    <a class="btn-floating btn-large waves-effect waves-light green">
                                        <i  onClick={() =>
                                                Products.getAddtoCardId(Products.Products, Products.CartData, item._id)
                                            } 
                                            class="material-icons">
                                            add
                                        </i>
                                    </a>
                                    </div>
                                    </div>
        
                                </div>
                                <div class="card-reveal">
                                    <h6 class="card-title grey-text text-darken-4">{item.title}<i class="material-icons right">close</i></h6>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                        </Fade>
                    </div>
                  
                })
            }
        </div>
    );
}

export default connect((state) => ({
    Products: state.products.filteredItems, 
    CartData: state.products.cartItems
}), {fetchProducts, getAddtoCardId})(Product);