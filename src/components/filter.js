import React, { Component } from 'react';
import M from 'materialize-css';

export default class Filter extends Component {

    constructor(props) {
        super(props);
        this.initializeDropdown = this.initializeDropdown.bind(this);
    }

    componentDidMount() {
        this.initializeDropdown();
        console.log(this.props);
    }

    initializeDropdown = () => {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            var options = {};
            var instances = M.FormSelect.init(elems, options);
          });
    }

    // OrderValue = (e) => {
    //     console.log(e.target.value);
    //     this.props.setOrder(e.target.value);
    // }

    render() {
        return (
            <>
                <div class="row">
                    <div class="col s4 m2">
                        Count: {this.props.count}
                     </div>
                    <div class="col s4 m2">
                        <select  onChange={this.props.setOrder}>
                            <option value="" selected>Order</option>
                            <option value="Latest">Latest</option>
                            <option value="Lowest">Lowest</option>
                            <option value="Highest">Highest</option>
                        </select>
                        <label>Materialize Select</label>
                    </div>
                    <div class="col s4 m2">
                        <select onChange={this.props.setSize}>
                            <option value="" selected>Size</option>
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