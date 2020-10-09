import React, {useEffect, useState} from 'react';
import formatCurrency from '../helper/currency';
import Fade from 'react-reveal/Fade';

function Product(props) {

    
    const productData = props.data;
    let data = [];

    useEffect(() =>{
        console.log(props.data);
    }) 

   
  
    return (
        <div class="row">
            { productData &&
                productData.map((item, index) => {
                    return <div class="col s12 m4">
                        <Fade top cascade>
                        <div key={index}>
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
                                    <a class="btn-floating btn-large waves-effect waves-light green"><i onClick={() => props.getAddtoCardId(item._id)} class="material-icons">add</i></a>
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

export default Product;