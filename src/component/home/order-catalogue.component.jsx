import React from 'react';

import './order-catalogue.styless.scss';
import ProductDisplay from '../product/product-display.component'
// raect materila
import SearchIcon from '@material-ui/icons/Search';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {withStyles} from '@material-ui/core/styles'
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import CloseIcon from '@material-ui/icons/Close';


import CATALOGUE_DATA from '../../assests/CatalogueData.json';
import {updateSearchResult , updateFilterResult} from '../../utils/search-utils';
import { TrackChangesTwoTone } from '@material-ui/icons';

const styles = theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 310,
      maxWidth: 350
    }
  });

class OrderCatalogue extends React.Component{
    constructor(){
        super()
        this.state={
            catalogue           :  CATALOGUE_DATA.Catalogue,
            brands              :  CATALOGUE_DATA.all_brands,
            searchedData        :  CATALOGUE_DATA.Catalogue,
            hasDisplayCloseIcon : true,
            selectedFilters     : []
        }
    }
    onSearch = ({target}) =>{
       let searchResult =  updateSearchResult(target.value, CATALOGUE_DATA.Catalogue );
       this.setState({catalogue: searchResult,selectedFilters:[], searchedData: searchResult});
    }
    onFilterValueChange = (event) => { 
        let dataForFilteration = this.state.searchedData;
        let filterResult = updateFilterResult(event.target.value, dataForFilteration )
        this.setState({selectedFilters: event.target.value,catalogue: filterResult});
        
    }
    render(){
        console.log(CATALOGUE_DATA)
        const ITEM_HEIGHT = 48;
        const ITEM_PADDING_TOP = 8;
        const MenuProps = {
            PaperProps: {
              style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
                marginTop: 60
              },
            },
          };
        return (
            <>
             <div className='search-header'> Search  &amp; filter products </div>
            <div className= 'action-container'>
                <div className='sarch-cotainer'>
                    <SearchIcon className='search-icon'/>
                    <input type="text" placeholder='Search product based on name and brand' className='search-bar'
                          onChange={this.onSearch}/>
                </div>

                <div className= 'filter-container'>

                        <FormControl className={this.props.classes.formControl}>
                            <InputLabel id="filter-mutiple-checkbox-label">Filter for brands</InputLabel>
                            <Select labelId="filter-mutiple-checkbox-label"
                                    id="demo-mutiple-checkbox" multiple
                                    value={this.state.selectedFilters}
                                    onChange={this.onFilterValueChange}
                                    onClose ={()=>this.setState({hasDisplayCloseIcon: true})}
                                    onOpen ={() =>this.setState({hasDisplayCloseIcon: false})}
                                    input={<Input />}
                                    renderValue={(selected) =>selected.join(', ')}
                                    MenuProps={MenuProps} >
                                {this.state.brands.map((brand) => (
                                    <MenuItem key={brand} value={brand} >
                                        <Checkbox checked={this.state.selectedFilters.indexOf(brand) > -1} />
                                        <ListItemText primary={brand} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                       <CloseIcon className='clear-button' style ={{visibility: (this.state.hasDisplayCloseIcon && this.state.selectedFilters.length> 0)? 'visible':'hidden'}}
                        onClick ={()=> this.setState({selectedFilters: [], catalogue: this.state.searchedData})}/>
                </div>

            </div>
            {
                this.state.catalogue.map(eachCategory => {
                    return (
                        <div className='category-container' key={eachCategory.category_id}>
                            <h1 className='category-header'>{eachCategory.category}</h1>
                            <div className='category-items-container'>
                                {
                                  eachCategory.products.length>0 ? eachCategory.products.map(eachProduct => (
                                            <ProductDisplay key={eachProduct.product_id}  isAddToCart
                                                            category={eachCategory.category} {...eachProduct}
                                            />
                                    
                                    ))   : <div style={{width: 'calc(100vw - 55px)', textAlign:'center'}}>No Data found</div>
                                }
                            </div>
                        </div>
                        
                    )
                })
            }
             
            </>
           
        )
    }
 
}

export default withStyles(styles)(OrderCatalogue);