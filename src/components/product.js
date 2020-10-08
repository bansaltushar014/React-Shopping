import React, {useEffect} from 'react';
import formatCurrency from '../helper/currency';

function Product(props) {

    useEffect(() =>{
        console.log(props.data);
    }) 

    const productData = props.data;
    let data = [];
    return (
        <div class="row">
            { productData &&
                productData.map((item, index) => {
                    return <div class="col s12 m4">
                        <div key={index}>
                            <div class="card" style={{ maxWidth: 300 }}>
                                <div class="card-image waves-effect waves-block waves-light">
                                    <img class="activator" style={{ maxWidth: 350 }} src={item.image} />
                                </div>
                                <div class="card-content">
                                    <h6 class="card-title activator grey-text text-darken-4">  {item.title}<i class="material-icons right">more_vert</i></h6>
                                    <p><a href="#">{formatCurrency(item.price)}</a></p>
                                </div>
                                <div class="card-reveal">
                                    <h6 class="card-title grey-text text-darken-4">{item.title}<i class="material-icons right">close</i></h6>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                })
            }
        </div>
    );
}

export default Product;