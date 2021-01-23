import React from 'react';
import './product-displya.styles.scss';
import AddIcon from '@material-ui/icons/Add';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import {connect} from 'react-redux';
import {totalCartItems} from '../../store/select';
import {addItemToCart} from '../../store/action.creator';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }


class ProductDisplay extends React.Component{
    constructor(props){
        super(props);
        this.state ={open: false}
    }

   handleClick = () => {
    this.setState({open: true});
  };

   handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({open: false});
  };

    render(){
        let {product_brand,product_image, product_name,category, isAddToCart,addItems,totalItemsInCart} = this.props;
        return (
            <div className ='product-container'>
                <img src={product_image} alt={product_name} className='product-image'/>
                <div className='product-data-container'>
                        <div style={{width: 'inherit'}}>
                           <div className='each-product-data'> <span style={{width: '95%', minHeight: 45, margin: '10px auto', color:'brown', fontSize: '1.2rem'}}>  {product_name} </span> </div>
                           <div className='each-product-data'> <span>Brand </span>        <span style={{width: '60%'}}> {product_brand} </span> </div>
                           <div className='each-product-data'> <span> Category</span>     <span style={{width: '60%'}}> {category}  </span> </div>
                            
                        </div>
                       {isAddToCart && <button className='product-add-to-cart' onClick ={()=>{
                           addItems({product_brand,product_image, product_name,category})
                           this.handleClick();
                       }}>
                                    <AddIcon/>
                            <span>
                                    Add to cart
                            </span>
                        </button>}
                </div>
                <Snackbar open={this.state.open} autoHideDuration={1000} onClose={this.handleClose}
                         anchorOrigin={{vertical: 'top', horizontal: 'center' }}>
                            <Alert onClose={this.handleClose}   severity="info">
                                 Item added to cart <br/>
                                 total items in cart are {totalItemsInCart}
                            </Alert>
                </Snackbar>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    totalItemsInCart : totalCartItems(state)
})

const mapDispatchToProps = dispatch => ({
    addItems : (data) => dispatch(addItemToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDisplay); 
