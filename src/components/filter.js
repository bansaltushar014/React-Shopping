import React, { Component } from 'react';
import M from 'materialize-css';
import { connect } from "react-redux";
import { filterProducts, sortProducts } from "../actions/productActions";   

class Filter extends Component {

    constructor(props) {
        super(props);
        this.initializeDropdown = this.initializeDropdown.bind(this);
    }

    componentDidMount() {
        this.initializeDropdown();     
    }

    initializeDropdown = () => {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            var options = {};
            var instances = M.FormSelect.init(elems, options);
          });
    }

    render() {
        return (
            <>
                <div class="row">
                    <div class="col s4 m2">
                       
                     </div>
                    <div class="col s4 m2">
                        <select  onChange={(e) => this.props.sortProducts(this.props.products, e.target.value)}>
                            <option value="" defaultValue>Order</option>
                            <option value="Latest">Latest</option>
                            <option value="Lowest">Lowest</option>
                            <option value="Highest">Highest</option>
                        </select>
                        <label>Materialize Select</label>
                    </div>
                    <div class="col s4 m2">
                        <select onChange={(e) => this.props.filterProducts(this.props.products, e.target.value)}>
                            <option value="" defaultValue>Size</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
                        <label>Materialize Select</label>
                    </div>
                </div>
            </>
        )
    }
}

// HOW? 
export default connect(
    (state) => ({
      size: state.products.size,
      sort: state.products.sort,
      products: state.products.items,
      filteredProducts: state.products.filteredItems,
    }),
    {
      filterProducts,
      sortProducts,
    }
  )(Filter);