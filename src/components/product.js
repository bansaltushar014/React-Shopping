import React from 'react';

function Product(props) {

    const productData = props.data.products;
    return (
        <div>
            {
                productData.map((item, index) => {
                    return <div key={index}>

                            <div class="card"  style={{ maxWidth: 300 }}>
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator" style={{ maxWidth: 250 }} src={item.image}/>
                                </div>
                                <div class="card-content">
                                    <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
                                    <p><a href="#"> {item.price}</a></p>
                                </div>
                                <div class="card-reveal">
                                    <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                                </div>
                            </div>

                            {/* {item.price}
                            <img src={item.image} alt="" /> */}
                        </div>
                })
        }
        </div>
    );
}

export default Product;