import React from 'react';
import './carrt.styles.scss';
import ProductDisplay from '../product/product-display.component';

import {connect} from 'react-redux';
import {cartItems} from '../../store/select'


const DisplayCart =({cartItems}) =>{
    return (
        <div className='category-items-container'>
                {cartItems.length>0 && <h1 className='category-header'>Cart Items are</h1> }
                {cartItems.length>0 ? cartItems.map(eachItem => (
                        <ProductDisplay key={eachItem.product_id}
                                        category={eachItem.category} {...eachItem}
                        />
                ))   : <div className ='empty-cart'>Your Cart is Empty</div>
            }
        </div>
    )
}
const mapStateToProps = state =>({
    cartItems : cartItems(state) 
})
export default connect(mapStateToProps)(DisplayCart);